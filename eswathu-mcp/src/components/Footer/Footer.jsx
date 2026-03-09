import './Footer.css';

const Footer = ({ variant = 'homepage' }) => {
  const isHomepage = variant === 'homepage';

  if (!isHomepage) {
    return (
      <footer className="footer footer--postlogin">
        <div className="footer__bottom">
          <p className="footer__credit">Designed and Developed by NIC.</p>
          <p className="footer__copyright">
            Copyright © 2025, Rural Development and Panchayati Raj Department, Government of Karnataka
          </p>
          <p className="footer__rights">All Rights Reserved.</p>
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
            <h4 className="footer__heading">All Pages</h4>
            <div className="footer__link-list">
              <a href="#" className="footer__link">Home</a>
              <a href="#" className="footer__link">About e-Swathu 2.0 and e-Khata</a>
              <a href="#" className="footer__link">Citizen services</a>
              <a href="#" className="footer__link">Useful Links</a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="footer__col">
            <h4 className="footer__heading">Working Hours</h4>
            <div className="footer__hours-group">
              <div className="footer__hours-times">
                <p className="footer__text">Monday - Friday</p>
                <p className="footer__text">9:00 AM - 6:00 PM</p>
                <p className="footer__text">Lunch: 1:30 PM - 2:00 PM</p>
              </div>
              <p className="footer__text">Closed on Public holidays</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="footer__col footer__col--wide">
            <h4 className="footer__heading">Office Address</h4>
            <div className="footer__offices">
              <div className="footer__office">
                <p className="footer__org">National Informatics Centre</p>
                <div className="footer__address">
                  <span className="material-icons-outlined footer__addr-icon">place</span>
                  <p className="footer__text">6th &amp; 7th Floor, Mini Tower, Ambedkar Veedhi, Bengaluru 560001</p>
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
                <p className="footer__org">Rural Development and Panchayati Raj Department</p>
                <div className="footer__address">
                  <span className="material-icons-outlined footer__addr-icon">place</span>
                  <p className="footer__text">3rd Gate, 3rd Floor, MS Building, Bengaluru 560001</p>
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
        <p className="footer__visitors">Number of Visitors on Site : XXXXX</p>
        <p className="footer__credit">Designed and Developed by NIC.</p>
        <p className="footer__copyright">
          Copyright © 2025, Rural Development and Panchayati Raj Department, Government of Karnataka
        </p>
        <p className="footer__rights">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

