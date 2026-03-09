import './ErrorMessageCard.css';

const ErrorMessageCard = ({ message, onOk, className = '' }) => {
  return (
    <div className={`error-card ${className}`}>
      <p className="error-card__message">{message}</p>
      <button type="button" className="error-card__ok" onClick={onOk}>
        OK
      </button>
    </div>
  );
};

export default ErrorMessageCard;

