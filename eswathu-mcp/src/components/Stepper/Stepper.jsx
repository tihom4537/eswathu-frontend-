import './Stepper.css';

const DEFAULT_STEPS = [
  'Sale Deed Details',
  'Owner KYC',
  'Property Details',
  'Property classification',
  'Upload EC',
];

const Stepper = ({ steps = DEFAULT_STEPS, activeStep = 0 }) => {
  return (
    <div className="stepper">
      <div className="stepper__inner">
        {steps.map((label, i) => {
          const isCompleted = i < activeStep;
          const isActive = i === activeStep;
          const status = isCompleted ? 'completed' : isActive ? 'active' : 'upcoming';

          return (
            <div key={i} className="stepper__step">
              {/* Connector line before (except first) */}
              {i > 0 && (
                <div className={`stepper__line ${i <= activeStep ? 'stepper__line--filled' : ''}`} />
              )}

              <div className={`stepper__circle stepper__circle--${status}`}>
                {isCompleted ? (
                  <span className="material-icons-outlined stepper__check">check</span>
                ) : (
                  <span className="stepper__number">{i + 1}</span>
                )}
              </div>

              <span className={`stepper__label ${isActive ? 'stepper__label--active' : ''} ${isCompleted ? 'stepper__label--completed' : ''}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

