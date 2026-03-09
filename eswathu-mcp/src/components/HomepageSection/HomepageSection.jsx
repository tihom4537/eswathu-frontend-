import './HomepageSection.css';

const HomepageSection = ({ icon, title, header, children, className = '' }) => {
  return (
    <div className={`hp-section ${className}`}>
      <div className="hp-section__card">
        <div className="hp-section__header">
          {header ? header : (
            <>
              {icon && <span className="material-icons-outlined hp-section__icon">{icon}</span>}
              {title && <span className="hp-section__title">{title}</span>}
            </>
          )}
        </div>
        <div className="hp-section__body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomepageSection;
