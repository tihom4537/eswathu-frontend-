import { useTranslation } from '../../i18n';
import './Footer.css';

const Footer = ({ variant = 'homepage' }) => {
  const isHomepage = variant === 'homepage';
  const { t } = useTranslation('home');

  if (!isHomepage) {
    return (
      <footer className="footer footer--postlogin">
        <div className="footer__bottom">
          <p className="footer__credit">{t('footer_credit')}</p>
          <p className="footer__copyright">{t('footer_copyright')}</p>
          <p className="footer__rights">{t('footer_rights')}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer footer--homepage">
      <div className="footer__top">
        <div className="footer__top-inner">
          {/* All Pages */}
          <div className="footer__col">
            <h4 className="footer__heading">{t('footer_allpages')}</h4>
            <div className="footer__link-list">
              <a href="#" className="footer__link">{t('footer_link_home')}</a>
              <a href="#" className="footer__link">{t('footer_link_about')}</a>
              <a href="#" className="footer__link">{t('footer_link_citizen')}</a>
              <a href="#" className="footer__link">{t('footer_link_useful')}</a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="footer__col">
            <h4 className="footer__heading">{t('footer_hours')}</h4>
            <div className="footer__hours-group">
              <div className="footer__hours-times">
                <p className="footer__text">{t('footer_hours_days')}</p>
                <p className="footer__text">{t('footer_hours_time')}</p>
                <p className="footer__text">{t('footer_hours_lunch')}</p>
              </div>
              <p className="footer__text">{t('footer_hours_closed')}</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="footer__col footer__col--wide">
            <h4 className="footer__heading">{t('footer_address')}</h4>
            <div className="footer__offices">
              <div className="footer__office">
                <p className="footer__org">{t('footer_nic_name')}</p>
                <div className="footer__address">
                  <span className="material-icons-outlined footer__addr-icon">place</span>
                  <p className="footer__text">{t('footer_nic_addr')}</p>
                </div>
                <div className="footer__socials">
                  <a href="#" className="footer__social" aria-label="Facebook">
                    <span className="material-icons-outlined">public</span>
                  </a>
                  <a href="#" className="footer__social" aria-label="Instagram">
                    <span className="material-icons-outlined">photo_camera</span>
                  </a>
                  <a href="#" className="footer__social" aria-label="Twitter">
                    <span className="material-icons-outlined">share</span>
                  </a>
                </div>
              </div>

              <div className="footer__office">
                <p className="footer__org">{t('footer_rdpr_name')}</p>
                <div className="footer__address">
                  <span className="material-icons-outlined footer__addr-icon">place</span>
                  <p className="footer__text">{t('footer_rdpr_addr')}</p>
                </div>
                <div className="footer__socials">
                  <a href="#" className="footer__social" aria-label="Facebook">
                    <span className="material-icons-outlined">public</span>
                  </a>
                  <a href="#" className="footer__social" aria-label="Instagram">
                    <span className="material-icons-outlined">photo_camera</span>
                  </a>
                  <a href="#" className="footer__social" aria-label="Twitter">
                    <span className="material-icons-outlined">share</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__visitors">{t('footer_visitors')}</p>
        <p className="footer__credit">{t('footer_credit')}</p>
        <p className="footer__copyright">{t('footer_copyright')}</p>
        <p className="footer__rights">{t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;

