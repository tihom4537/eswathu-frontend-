import Button from '../../../components/Button/Button';
import { useTranslation } from '../../../i18n';
import './EKYCRedirectScreen.css';

/**
 * EKYCRedirectScreen — Simulates the external Aadhaar eKYC flow.
 * Shows ekyc1.png → user clicks "Proceed" → shows ekyc2.png → user clicks "Complete eKYC" → returns to caller.
 *
 * Props:
 *  - ownerName: string — name of the owner doing eKYC
 *  - onComplete: () => void — called when eKYC is finished, returns user to OwnerEKYCPage
 *  - onCancel: () => void — called when user wants to go back without completing
 */
const EKYCRedirectScreen = ({ ownerName = '', onComplete, onCancel }) => {
  const { t } = useTranslation('step2');

  return (
    <div className="ekyc-redirect">
      <div className="ekyc-redirect__body">
        <img
          className="ekyc-redirect__image"
          src="/images/ekyc1.png"
          alt="eKYC screen 1"
        />
        <img
          className="ekyc-redirect__image"
          src="/images/ekyc2.png"
          alt="eKYC screen 2"
        />
      </div>

      <div className="ekyc-redirect__actions">
        <Button variant="primary" onClick={onComplete}>
          {t('redirect_btn_complete')}
        </Button>
        <Button variant="error" onClick={onCancel}>
          {t('redirect_btn_cancel')}
        </Button>
      </div>
    </div>
  );
};

export default EKYCRedirectScreen;
