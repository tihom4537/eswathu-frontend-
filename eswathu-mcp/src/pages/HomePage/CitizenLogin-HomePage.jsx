import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import PageHeading from '../../components/PageHeading/PageHeading';
import HomepageSection from '../../components/HomepageSection/HomepageSection';
import CardHomepage from '../../components/CardHomepage/CardHomepage';
import HomePagePopup from '../../components/HomePagePopup/HomePagePopup';
import { useTranslation } from '../../i18n';
import POPUP_CONTENT, { loc } from './homePopupContent';
import './CitizenLogin-HomePage.css';

/* ── Popup body renderer ──────────────────────────────────────── */
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

/* ── Component ────────────────────────────────────────────────── */
const CitizenLoginHomePage = ({ onNavigate, username = '' }) => {
  const [activePopup, setActivePopup] = useState(null);
  const { t, lang } = useTranslation('home');

  const openPopup = (key) => setActivePopup(key);
  const closePopup = () => setActivePopup(null);
  const activeContent = activePopup ? POPUP_CONTENT[activePopup] : null;

  const checkStatusHeader = (
    <div className="citizen-home__multi-header">
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">image_search</span>
        <span>{t('hp_section_checkStatus')}</span>
      </div>
      <span className="citizen-home__multi-header-sep">|</span>
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">download</span>
        <span>{t('hp_section_download')}</span>
      </div>
      <span className="citizen-home__multi-header-sep">|</span>
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">print</span>
        <span>{t('hp_section_print')}</span>
      </div>
    </div>
  );

  return (
    <div className="citizen-home-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onNavigate={onNavigate}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      <main className="citizen-home-page__content">
        <PageHeading subtitle={t('hp_services_subtitle')} title={t('hp_services_title')} />

        {/* e-Khata Related Services */}
        <HomepageSection icon="file_copy" title={t('hp_section_ekhata')}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="add_circle_outline"
              title={t('card_newEkhata_title')}
              onClick={() => openPopup('newEkhata')}
            />
            <CardHomepage
              icon="search"
              title={t('card_pidEkhata_title')}
              onClick={() => openPopup('pidEkhata')}
            />
            <CardHomepage
              icon="add_circle_outline"
              title={t('card_newLayouts_title')}
              onClick={() => openPopup('newLayouts')}
            />
            <CardHomepage
              icon="add_circle_outline"
              title={t('card_newApartments_title')}
              onClick={() => openPopup('newApartments')}
            />
            <CardHomepage
              icon="pending_actions"
              title={t('card_pending_title')}
              description={t('card_pending_desc')}
              onClick={() => onNavigate && onNavigate('new-application')}
            />
            <CardHomepage
              icon="error_outline"
              title={t('card_reportObjection_title')}
              description={t('card_reportObjection_desc')}
            />
            <CardHomepage
              icon="assignment_return"
              title={t('card_returnApps_title')}
              description={t('card_returnApps_desc')}
            />
          </div>
        </HomepageSection>

        {/* Conversions */}
        <HomepageSection icon="file_copy" title={t('hp_section_conversions')}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="file_copy"
              title={t('card_conv11ATo11B_title')}
              onClick={() => openPopup('conv11ATo11B')}
            />
            <CardHomepage
              icon="file_copy"
              title={t('card_convApartments_title')}
              onClick={() => openPopup('convApartments')}
            />
            <CardHomepage
              icon="file_copy"
              title={t('card_conv11BTransactable_title')}
              onClick={() => openPopup('conv11BTransactable')}
            />
          </div>
        </HomepageSection>

        {/* Check Status | Download | Print */}
        <HomepageSection header={checkStatusHeader}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="image_search"
              title={t('card_checkStatus_title')}
              description={t('card_checkStatus_desc')}
            />
            <CardHomepage
              icon="download"
              title={t('card_downloadEkhata_title')}
              description={t('card_downloadEkhata_desc')}
            />
            <CardHomepage
              icon="check_circle"
              title={t('card_checkRegistrable_title')}
            />
          </div>
        </HomepageSection>

        {/* Mutation and Transfer */}
        <HomepageSection icon="people" title={t('hp_section_mutation')}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="people"
              title={t('card_mutation_title')}
              onClick={() => openPopup('mutation')}
            />
          </div>
        </HomepageSection>

        {/* Reports and Dashboards */}
        <HomepageSection icon="dashboard" title={t('hp_section_reports')}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="dashboard"
              title={t('card_reports_title')}
              description={t('card_reports_desc')}
            />
          </div>
        </HomepageSection>
      </main>

      <Footer variant="postLogin" />

      {activeContent && (
        <HomePagePopup
          title={loc(activeContent.title, lang)}
          onClose={closePopup}
          onProceed={() => onNavigate && onNavigate('new-application')}
          proceedLabel="Proceed to Application"
        >
          <PopupBody contentKey={activePopup} lang={lang} />
        </HomePagePopup>
      )}
    </div>
  );
};

export default CitizenLoginHomePage;
