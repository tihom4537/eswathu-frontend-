import './StepHeader.css';

const StepHeader = ({
  step,
  title,
  children,
  className = '',
  onBack,
  onNext,
  isBackEnabled = true,
  isNextEnabled = false,
  hideNext = false,
}) => {
  return (
    <div className={`step-header ${className}`}>
      <div className="step-header__inner">

        {/* ── Back arrow ─────────────────────────────── */}
        <button
          type="button"
          className={`step-header__arrow${!isBackEnabled ? ' step-header__arrow--disabled' : ''}`}
          disabled={!isBackEnabled}
          onClick={onBack}
          aria-label="Go to previous step"
        >
          <span className="material-icons-outlined">arrow_back</span>
        </button>

        {/* ── Step text ──────────────────────────────── */}
        <div className="step-header__text">
          {step && <p className="step-header__step">{step}</p>}
          <h1 className="step-header__title">{title}</h1>
        </div>

        {/* ── Right side: slot + forward arrow ──────── */}
        <div className="step-header__right">
          {children}
          {!hideNext && (
            <button
              type="button"
              className={`step-header__arrow${!isNextEnabled ? ' step-header__arrow--disabled' : ''}`}
              disabled={!isNextEnabled}
              onClick={onNext}
              aria-label="Go to next step"
            >
              <span className="material-icons-outlined">arrow_forward</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default StepHeader;
