import './HelpCards.css';

const HelpCards = ({ icon, title, description, buttonLabel, onButtonClick, children, className = '' }) => {
  return (
    <div className={`help-card ${className}`}>
      {icon && (
        <span className="material-icons-outlined help-card__icon">{icon}</span>
      )}
      {title && <h3 className="help-card__title">{title}</h3>}
      {description && <p className="help-card__desc">{description}</p>}
      {children}
      {buttonLabel && (
        <button type="button" className="help-card__btn" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default HelpCards;

