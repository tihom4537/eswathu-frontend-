import { useEffect } from 'react';
import Button from '../Button/Button';
import './HomePagePopup.css';

/**
 * HomePagePopup
 * Modal shell for homepage service info popups.
 *
 * Props:
 *   title    — string displayed in the header
 *   onClose  — function called when backdrop or X is clicked / Escape pressed
 *   children — popup body content
 */
const HomePagePopup = ({ title, onClose, onProceed, proceedLabel = 'Proceed', children }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="hp-popup-backdrop" onClick={onClose} role="presentation">
      <div
        className="hp-popup"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="hp-popup__header">
          <h2 className="hp-popup__title">{title}</h2>
          <button
            type="button"
            className="hp-popup__close"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="hp-popup__body">
          {children}
        </div>
        {onProceed && (
          <div className="hp-popup__footer">
            <Button variant="primary" onClick={onProceed}>
              {proceedLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePagePopup;
