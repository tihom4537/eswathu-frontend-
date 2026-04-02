import { useState, useRef, useEffect } from 'react';
import Button from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../i18n';
import './NavigationBar.css';

import karnatakaLogo from '/images/Karnataka.png';
import eswathuLogo from '/images/eSwathuLogoEnglish.jpg.jpeg';
import nicLogo from '/images/MyGov.png';

const DEFAULT_CITIZEN_SERVICES = [
  { label: 'New Application', path: '/new-application' },
  { label: 'Track Application', path: '/track-application' },
  { label: 'Download Certificate', path: '/download-certificate' },
];

const DEFAULT_USEFUL_LINKS = [
  { label: 'e-Khata', path: '/e-khata' },
  { label: 'Bhoomi', path: '/bhoomi' },
  { label: 'Kaveri', path: '/kaveri' },
];

const NavigationBar = ({
  variant = 'homepage',
  username = '',
  onLogout,
  onCitizenLogin,
  onDeptLogin,
  onNavigate,
  citizenServicesItems = DEFAULT_CITIZEN_SERVICES,
  usefulLinksItems = DEFAULT_USEFUL_LINKS,
}) => {
  const isHomepage = variant === 'homepage';
  const [openDropdown, setOpenDropdown] = useState(null);
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation('common');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = (path) => {
    setOpenDropdown(null);
    onNavigate?.(path);
  };

  return (
    <header className="navbar">
      {/* Top bar — accessibility + language */}
      <div className="navbar__topbar">
        <div className="navbar__topbar-inner">
          <div className="navbar__accessibility">
            <button className="navbar__font-btn" type="button" aria-label="Decrease font size">A<sup>-</sup></button>
            <button className="navbar__font-btn navbar__font-btn--active" type="button" aria-label="Default font size">A</button>
            <button className="navbar__font-btn" type="button" aria-label="Increase font size">A<sup>+</sup></button>
          </div>
          <div className="navbar__lang">
            <button
              className={`navbar__lang-btn${lang === 'kn' ? ' navbar__lang-btn--active' : ''}`}
              type="button"
              onClick={() => setLang('kn')}
            >ಕನ್ನಡ</button>
            <button
              className={`navbar__lang-btn${lang === 'en' ? ' navbar__lang-btn--active' : ''}`}
              type="button"
              onClick={() => setLang('en')}
            >English</button>
          </div>
        </div>
      </div>

      {/* Main bar — logos + title */}
      <div className="navbar__main">
        <div className="navbar__main-inner">
          <div className="navbar__brand">
            <img src={karnatakaLogo} alt="Government of Karnataka" className="navbar__logo" />
            <img src={eswathuLogo} alt="E-Swathu" className="navbar__logo navbar__logo--eswathu" />
            <div className="navbar__title-block">
              <span className="navbar__title">E-Swathu 2.0</span>
              <span className="navbar__subtitle">Rural Development and Panchayati Raj Department</span>
              <span className="navbar__subtitle navbar__subtitle--light">Government of Karnataka</span>
            </div>
          </div>
          <img src={nicLogo} alt="NIC" className="navbar__nic-logo" />
        </div>
      </div>

      {/* Bottom bar — differs by variant */}
      <div className="navbar__bottombar">
        <div className="navbar__bottombar-inner" ref={dropdownRef}>
          {isHomepage ? (
            <>
              <nav className="navbar__nav">
                <button type="button" className="navbar__link" onClick={() => handleLinkClick('home')}>{t('navHome')}</button>
                <button type="button" className="navbar__link" onClick={() => handleLinkClick('/about')}>{t('navAbout')}</button>

                {/* Citizen Services dropdown */}
                <div className="navbar__dropdown-wrapper">
                  <button
                    type="button"
                    className="navbar__link navbar__link--dropdown"
                    onClick={() => toggleDropdown('citizen')}
                    aria-expanded={openDropdown === 'citizen'}
                  >
                    {t('navCitizenServices')}
                    <span className={`material-icons-outlined navbar__link-chevron ${openDropdown === 'citizen' ? 'navbar__link-chevron--open' : ''}`}>expand_more</span>
                  </button>
                  {openDropdown === 'citizen' && (
                    <div className="navbar__dropdown-menu">
                      {citizenServicesItems.map((item) => (
                        <button
                          key={item.path}
                          type="button"
                          className="navbar__dropdown-item"
                          onClick={() => handleLinkClick(item.path)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Useful links dropdown */}
                <div className="navbar__dropdown-wrapper">
                  <button
                    type="button"
                    className="navbar__link navbar__link--dropdown"
                    onClick={() => toggleDropdown('useful')}
                    aria-expanded={openDropdown === 'useful'}
                  >
                    {t('navUsefulLinks')}
                    <span className={`material-icons-outlined navbar__link-chevron ${openDropdown === 'useful' ? 'navbar__link-chevron--open' : ''}`}>expand_more</span>
                  </button>
                  {openDropdown === 'useful' && (
                    <div className="navbar__dropdown-menu">
                      {usefulLinksItems.map((item) => (
                        <button
                          key={item.path}
                          type="button"
                          className="navbar__dropdown-item"
                          onClick={() => handleLinkClick(item.path)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button type="button" className="navbar__link" onClick={() => handleLinkClick('glossary')}>{t('navGlossary')}</button>
              </nav>
              <div className="navbar__actions">
                <Button variant="white" onClick={onCitizenLogin}>{t('navCitizenLogin')}</Button>
                <Button variant="primary" onClick={onDeptLogin}>{t('navDeptLogin')}</Button>
              </div>
            </>
          ) : (
            <>
              <nav className="navbar__breadcrumb">
                <span className="material-icons-outlined navbar__home-icon" style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('citizen-home')}>home</span>
                <button type="button" className="navbar__crumb" onClick={() => handleLinkClick('citizen-home')}>{t('navHome')}</button>

                {/* Citizen Services dropdown in breadcrumb */}
                <div className="navbar__dropdown-wrapper">
                  <button
                    type="button"
                    className="navbar__crumb navbar__crumb--dropdown"
                    onClick={() => toggleDropdown('citizen')}
                    aria-expanded={openDropdown === 'citizen'}
                  >
                    {t('navCitizenServices')}
                    <span className={`material-icons-outlined navbar__link-chevron ${openDropdown === 'citizen' ? 'navbar__link-chevron--open' : ''}`}>expand_more</span>
                  </button>
                  {openDropdown === 'citizen' && (
                    <div className="navbar__dropdown-menu">
                      {citizenServicesItems.map((item) => (
                        <button
                          key={item.path}
                          type="button"
                          className="navbar__dropdown-item"
                          onClick={() => handleLinkClick(item.path)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
              <div className="navbar__user">
                <span className="navbar__username">{t('navUsername')}: {username}</span>
                <Button variant="white" onClick={onLogout}>{t('navLogout')}</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

