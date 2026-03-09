import './InfoBox.css';

const InfoBox = ({ variant = 'outline', children, className = '' }) => {
  return (
    <div className={`info-box info-box--${variant} ${className}`}>
      <span className="material-icons-outlined info-box__icon">info</span>
      <span className="info-box__text">{children}</span>
    </div>
  );
};

export default InfoBox;

