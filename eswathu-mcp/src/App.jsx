import { useState, useEffect } from 'react';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/HomePage/LoginPage';
import CitizenLoginHomePage from './pages/HomePage/CitizenLogin-HomePage';
import NewApplicationFirstPage from './pages/HomePage/NewApplicationFirstPage';
import SaleDeedDetailsPage from './pages/NewApplicationPage/steps/SaleDeedDetailsPage';
import OwnerEKYCPage from './pages/NewApplicationPage/steps/OwnerEKYCPage';
import PropertyDetailsPage from './pages/NewApplicationPage/steps/PropertyDetailsPage';
import PropertyClassificationPage from './pages/NewApplicationPage/steps/PropertyClassificationPage';
import ECStep from './pages/NewApplicationPage/steps/ECStep';

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

/** Step names shown in the Breadcrumb — matches Stepper DEFAULT_STEPS */
const BC_STEP_NAMES = [
  'Sale Deed Details',
  'Owner KYC',
  'Property Details',
  'Property Classification',
  'Upload EC',
];

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

function App() {
  const [page, setPage] = useState('home');

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
    isBackEnabled: routeIdx > 0,
    currentBCStep: ROUTE_ORDER[routeIdx].bcIdx,
    completedBCSteps: Array.from(completedBCSteps),
    onBCStepClick: handleBCStepClick,
    bcStepNames: BC_STEP_NAMES,
    completionResetKey: pageResetKeys[routeIdx] ?? 0,
  });

  /* ─────────────────────────────────────────────────────────────
     NEW APPLICATION FLOW  (lazy-mount, keep-alive strategy)
     ─────────────────────────────────────────────────────────────
     All visited step pages stay mounted so React state is never lost.
     Only the active step is visible; others are hidden via display:none.
  ───────────────────────────────────────────────────────────── */
  if (NEW_APP_ROUTE_KEYS.has(page)) {
    return (
      <>
        {mountedSteps.has('new-application-step1') && (
          <div style={{ display: page === 'new-application-step1' ? 'block' : 'none' }}>
            <SaleDeedDetailsPage
              onNavigate={handleNavigate}
              onResetDownstream={() => resetStepsFrom(1)}
              onVillageChange={setStep1Village}
              {...navProps(0)}
            />
          </div>
        )}

        {mountedSteps.has('new-application-step2') && (
          <div style={{ display: page === 'new-application-step2' ? 'block' : 'none' }}>
            <OwnerEKYCPage
              onNavigate={handleNavigate}
              {...navProps(1)}
            />
          </div>
        )}

        {mountedSteps.has('new-application-step3') && (
          <div style={{ display: page === 'new-application-step3' ? 'block' : 'none' }}>
            <PropertyDetailsPage
              onNavigate={handleNavigate}
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
              {...navProps(3)}
            />
          </div>
        )}

        {mountedSteps.has('new-application-step7') && (
          <div style={{ display: page === 'new-application-step7' ? 'block' : 'none' }}>
            <ECStep
              onNavigate={handleNavigate}
              {...navProps(4)}
            />
          </div>
        )}
      </>
    );
  }

  if (page === 'new-application') {
    return <NewApplicationFirstPage onNavigate={handleNavigate} onClassificationConfirmed={setStep0Classification} />;
  }

  if (page === 'citizen-home') {
    return <CitizenLoginHomePage onNavigate={handleNavigate} />;
  }

  if (page === 'login') {
    return <LoginPage onLogin={() => handleNavigate('citizen-home')} />;
  }

  return <HomePage onNavigate={handleNavigate} />;
}

export default App;
