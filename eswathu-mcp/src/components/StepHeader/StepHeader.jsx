import './StepHeader.css';

const StepHeader = ({ step, title, children, className = '' }) => {
  return (
    <div className={`step-header ${className}`}>
      <div className="step-header__inner">
        <div className="step-header__text">
          {step && <p className="step-header__step">{step}</p>}
          <h1 className="step-header__title">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default StepHeader;
