import './CardHomepage.css';

const CardHomepage = ({ icon, title, description, onClick, className = '' }) => {
  return (
    <div className={`card-homepage ${className}`} onClick={onClick} role="button" tabIndex={0}>
      {icon && (
        <span className="material-icons-outlined card-homepage__icon">{icon}</span>
      )}
      <h3 className="card-homepage__title">{title}</h3>
      {description && <p className="card-homepage__desc">{description}</p>}
    </div>
  );
};

export default CardHomepage;

