import Button from '../Button/Button';
import './ErrorMessageCard.css';

/**
 * ErrorMessageCard
 *
 * Default usage (single OK button):
 *   <ErrorMessageCard message="..." onOk={fn} />
 *
 * Custom actions usage (pass Button configs, onOk is ignored):
 *   <ErrorMessageCard
 *     message="..."
 *     subMessage="..."
 *     actions={[
 *       { label: 'Yes, Edit', variant: 'primary', onClick: fn },
 *       { label: 'Cancel',   variant: 'error',   onClick: fn },
 *     ]}
 *   />
 */
const ErrorMessageCard = ({ message, subMessage, onOk, actions, className = '' }) => {
  return (
    <div className={`error-card ${className}`}>
      <p className={`error-card__message${subMessage ? '' : ' error-card__message--only'}`}>
        {message}
      </p>
      {subMessage && <p className="error-card__sub-message">{subMessage}</p>}

      {actions ? (
        <div className="error-card__actions">
          {actions.map((a, i) => (
            <Button key={i} variant="modal" onClick={a.onClick}>
              {a.label}
            </Button>
          ))}
        </div>
      ) : (
        <Button variant="modal" onClick={onOk}>OK</Button>
      )}
    </div>
  );
};

export default ErrorMessageCard;

