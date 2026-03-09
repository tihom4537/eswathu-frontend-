import './ErrorMessageCard.css';

const ErrorMessageCard = ({ message, subMessage, onOk, className = '' }) => {
  return (
    <div className={`error-card ${className}`}>
      <p className={`error-card__message${subMessage ? '' : ' error-card__message--only'}`}>{message}</p>
      {subMessage && <p className="error-card__sub-message">{subMessage}</p>}
      <button type="button" className="error-card__ok" onClick={onOk}>
        OK
      </button>
    </div>
  );
};

export default ErrorMessageCard;

