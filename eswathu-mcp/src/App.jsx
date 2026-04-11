import { useState, useEffect } from 'react';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { FontSizeProvider } from './context/FontSizeContext';
import { useLanguage } from './context/LanguageContext';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/HomePage/LoginPage';
import CitizenLoginHomePage from './pages/HomePage/CitizenLogin-HomePage';
import NewApplicationFirstPage from './pages/HomePage/NewApplicationFirstPage';
import SaleDeedDetailsPage from './pages/NewApplicationPage/steps/SaleDeedDetailsPage';
import OwnerEKYCPage from './pages/NewApplicationPage/steps/OwnerEKYCPage';
import PropertyDetailsPage from './pages/NewApplicationPage/steps/PropertyDetailsPage';
import PropertyClassificationPage from './pages/NewApplicationPage/steps/PropertyClassificationPage';
import ECStep from './pages/NewApplicationPage/steps/ECStep';
import GlossaryPage from './pages/GlossaryPage/GlossaryPage';
import HomePagePopup from './components/HomePagePopup/HomePagePopup';
import POPUP_CONTENT, { loc } from './pages/HomePage/homePopupContent';
import common from './i18n/namespaces/common';

/* ─── New Application flow config ───────────────────────────── */

/**
 * Route order for the New Application multi-step flow.
 * bcIdx = breadcrumb step index (shared by PropertyClassification +
 * BuildingDetails which are both part of "Step 4").
 */
const ROUTE_ORDER = [
  { key: 'new-application-step1', bcIdx: 0 }, // Sale Deed Details
  { key: 'new-application-step2', bcIdx: 1 }, // Owner KYC
  { key: 'new-application-step3', bcIdx: 2 }, // Property Details
  { key: 'new-application-step4', bcIdx: 3 }, // Property Classification (incl. Building Details + Avail Rebates)
  { key: 'new-application-step7', bcIdx: 4 }, // Upload EC
];

/** Step names shown in the Stepper/Breadcrumb — language-aware */
const getBCStepNames = (lang) => {
  const t = (key) => common[lang]?.[key] ?? common.en[key];
  return [
    t('bcSaleDeedDetails'),
    t('bcOwnerKYC'),
    t('bcPropertyDetails'),
    t('bcPropertyClassification'),
    t('bcUploadEC'),
  ];
};

/**
 * Breadcrumb click → navigate to the first route page in that BC group.
 */
const BC_IDX_TO_ROUTE_KEY = {
  0: 'new-application-step1',
  1: 'new-application-step2',
  2: 'new-application-step3',
  3: 'new-application-step4',
  4: 'new-application-step7',
};

const NEW_APP_ROUTE_KEYS = new Set(ROUTE_ORDER.map((r) => r.key));

/* Renders popup body — used when a citizen-services dropdown item is clicked */
const PopupBody = ({ contentKey, lang }) => {
  const content = POPUP_CONTENT[contentKey];
  if (!content) return null;
  return (
    <>
      {content.intro && <p className="hp-popup__intro">{loc(content.intro, lang)}</p>}
      <ul className="hp-popup__items">
        {content.items.map((item, i) => (
          <li key={i} className="hp-popup__item">
            {item.label && <span className="hp-popup__item-label">{loc(item.label, lang)}</span>}
            <p className="hp-popup__item-text">{loc(item.text, lang)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const PRE_LOGIN_PAGES = new Set(['home', 'login', 'glossary']);

/* Services that have a popup in homePopupContent.js */
const SERVICE_HAS_POPUP = new Set([
  'newEkhata', 'pidEkhata', 'newLayouts', 'newApartments',
  'conv11ATo11B', 'convApartments', 'conv11BTransactable', 'mutation',
]);

function App() {
  const { lang } = useLanguage();
  const [page, setPage] = useState('home');
  const [pendingServiceKey, setPendingServiceKey] = useState(null);

  /**
   * mountedSteps — which route steps have ever been visited.
   * Steps are never unmounted once added — this preserves all React
   * state (form values, section locks, etc.) across back/forward navigation.
   */
  const [mountedSteps, setMountedSteps] = useState(() => new Set());

  /**
   * completedBCSteps — BC step indices where the user clicked
   * "Save and Proceed".  Completed steps are clickable in the Breadcrumb.
   */
  const [completedBCSteps, setCompletedBCSteps] = useState(() => new Set());

  /**
   * pageResetKeys — per-route counter; when incremented, the matching
   * step page resets its isPageComplete flag (data is preserved, only
   * completion status resets so the user must re-save).
   * Keys are route indices (0 = SaleDeedDetails … 6 = ECStep).
   */
  const [pageResetKeys, setPageResetKeys] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0,
  });

  /* Village name from Step 1 — passed to PropertyClassificationPage */
  const [step1Village, setStep1Village] = useState('');
  const [step1HasKaveri, setStep1HasKaveri] = useState(true);

  /* Classification confirmed in Step 0 questionnaire — passed to PropertyClassificationPage */
  const [step0Classification, setStep0Classification] = useState('');

  /**
   * resetStepsFrom — removes BC completion flags and increments
   * pageResetKeys for every route at or after startRouteIdx.
   * Call this when an upstream edit invalidates downstream progress.
   */
  const resetStepsFrom = (startRouteIdx) => {
    // Remove affected BC step indices from completedBCSteps
    setCompletedBCSteps((prev) => {
      const next = new Set(prev);
      for (let i = startRouteIdx; i < ROUTE_ORDER.length; i++) {
        next.delete(ROUTE_ORDER[i].bcIdx);
      }
      return next;
    });
    // Bump reset counters for affected pages
    setPageResetKeys((prev) => {
      const next = { ...prev };
      for (let i = startRouteIdx; i < ROUTE_ORDER.length; i++) {
        next[i] = (prev[i] || 0) + 1;
      }
      return next;
    });
  };

  /* ── Whenever the current page is a new-app step, ensure it's mounted ── */
  useEffect(() => {
    if (NEW_APP_ROUTE_KEYS.has(page)) {
      setMountedSteps((prev) => {
        if (prev.has(page)) return prev;
        return new Set([...prev, page]);
      });
    }
  }, [page]);

  /* ── Scroll to top on every page change ──────────────────── */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  /* ── Smart navigate: ensures new-app steps are also mounted ── */
  const handleNavigate = (key) => {
    if (key.startsWith('service:')) {
      const serviceKey = key.slice('service:'.length);
      if (SERVICE_HAS_POPUP.has(serviceKey)) {
        setPendingServiceKey(serviceKey);
      } else {
        // No popup for this service — go directly to login or new-application
        const isPreLogin = PRE_LOGIN_PAGES.has(page);
        setPage(isPreLogin ? 'login' : 'new-application');
      }
      return;
    }
    if (NEW_APP_ROUTE_KEYS.has(key)) {
      setMountedSteps((prev) => new Set([...prev, key]));
    }
    setPage(key);
  };

  /* ── Mark a BC step complete and navigate to the next route step ── */
  const handleNext = (currentRouteIdx) => {
    const bcIdx = ROUTE_ORDER[currentRouteIdx].bcIdx;
    setCompletedBCSteps((prev) => new Set([...prev, bcIdx]));
    if (currentRouteIdx < ROUTE_ORDER.length - 1) {
      handleNavigate(ROUTE_ORDER[currentRouteIdx + 1].key);
    }
  };

  /* ── Navigate to the previous route step ─────────────────── */
  const handleBack = (currentRouteIdx) => {
    if (currentRouteIdx > 0) {
      handleNavigate(ROUTE_ORDER[currentRouteIdx - 1].key);
    } else {
      handleNavigate('new-application');
    }
  };

  /* ── Breadcrumb step click ────────────────────────────────── */
  const handleBCStepClick = (bcIdx) => {
    const key = BC_IDX_TO_ROUTE_KEY[bcIdx];
    if (key) handleNavigate(key);
  };

  /* ── Shared nav props for a given route index ─────────────── */
  const navProps = (routeIdx) => ({
    onBack: () => handleBack(routeIdx),
    onNext: () => handleNext(routeIdx),
    isBackEnabled: true,
    currentBCStep: ROUTE_ORDER[routeIdx].bcIdx,
    completedBCSteps: Array.from(completedBCSteps),
    onBCStepClick: handleBCStepClick,
    bcStepNames: getBCStepNames(lang),
    completionResetKey: pageResetKeys[routeIdx] ?? 0,
  });

  /* ─────────────────────────────────────────────────────────────
     PAGE RENDERER — single return so the service popup can overlay
     any page without duplicating its JSX.
  ───────────────────────────────────────────────────────────── */
  const renderPage = () => {
    /* NEW APPLICATION FLOW — lazy-mount keep-alive */
    if (NEW_APP_ROUTE_KEYS.has(page)) {
      return (
        <div style={{ background: '#ffffff', minHeight: '100vh' }}>
          {mountedSteps.has('new-application-step1') && (
            <div style={{ display: page === 'new-application-step1' ? 'block' : 'none' }}>
              <SaleDeedDetailsPage
                onNavigate={handleNavigate}
                onResetDownstream={() => { resetStepsFrom(1); setStep1HasKaveri(true); }}
                onVillageChange={setStep1Village}
                onFlowChange={setStep1HasKaveri}
                {...navProps(0)}
              />
            </div>
          )}
          {mountedSteps.has('new-application-step2') && (
            <div style={{ display: page === 'new-application-step2' ? 'block' : 'none' }}>
              <OwnerEKYCPage
                onNavigate={handleNavigate}
                hasKaveri={step1HasKaveri}
                onResetDownstream={() => resetStepsFrom(2)}
                {...navProps(1)}
              />
            </div>
          )}
          {mountedSteps.has('new-application-step3') && (
            <div style={{ display: page === 'new-application-step3' ? 'block' : 'none' }}>
              <PropertyDetailsPage
                onNavigate={handleNavigate}
                hasKaveri={step1HasKaveri}
                onResetDownstream={() => resetStepsFrom(3)}
                {...navProps(2)}
              />
            </div>
          )}
          {mountedSteps.has('new-application-step4') && (
            <div style={{ display: page === 'new-application-step4' ? 'block' : 'none' }}>
              <PropertyClassificationPage
                onNavigate={handleNavigate}
                step1Village={step1Village}
                step0Classification={step0Classification}
                onResetDownstream={() => resetStepsFrom(4)}
                {...navProps(3)}
              />
            </div>
          )}
          {mountedSteps.has('new-application-step7') && (
            <div style={{ display: page === 'new-application-step7' ? 'block' : 'none' }}>
              <ECStep
                onNavigate={handleNavigate}
                hasKaveri={step1HasKaveri}
                registrationDeedNo={step1HasKaveri ? 'KA-BLR-2024-12345' : ''}
                {...navProps(4)}
              />
            </div>
          )}
        </div>
      );
    }
    if (page === 'new-application') return <NewApplicationFirstPage onNavigate={handleNavigate} onClassificationConfirmed={setStep0Classification} />;
    if (page === 'citizen-home')   return <CitizenLoginHomePage onNavigate={handleNavigate} />;
    if (page === 'login')          return <LoginPage onLogin={() => handleNavigate('citizen-home')} onNavigate={handleNavigate} />;
    if (page === 'glossary')       return <GlossaryPage onNavigate={handleNavigate} />;
    return <HomePage onNavigate={handleNavigate} />;
  };

  /* When a service dropdown item is clicked, determine where "Proceed" goes */
  const isPreLogin = PRE_LOGIN_PAGES.has(page);
  const pendingContent = pendingServiceKey ? POPUP_CONTENT[pendingServiceKey] : null;

  const handleServiceProceed = () => {
    setPendingServiceKey(null);
    setPage(isPreLogin ? 'login' : 'new-application');
  };

  return (
    <>
      {renderPage()}
      {pendingContent && (
        <HomePagePopup
          title={loc(pendingContent.title, lang)}
          onClose={() => setPendingServiceKey(null)}
          onProceed={handleServiceProceed}
          proceedLabel={isPreLogin ? 'Login to Apply' : 'Proceed to Application'}
        >
          <PopupBody contentKey={pendingServiceKey} lang={lang} />
        </HomePagePopup>
      )}
    </>
  );
}

function AppWithProviders() {
  return (
    <LanguageProvider>
      <FontSizeProvider>
        <App />
      </FontSizeProvider>
    </LanguageProvider>
  );
}

export default AppWithProviders;
