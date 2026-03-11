import './Breadcrumb.css';

/**
 * Breadcrumb — horizontal step-name trail for the New Application flow.
 *
 * Props
 *   steps          – string[]  ordered list of step labels
 *   currentStep    – number    0-based index of the current active step
 *   completedSteps – number[]  indices of steps the user has completed
 *   onStepClick    – (index: number) => void  called when a completed step is clicked
 */
const Breadcrumb = ({
  steps = [],
  currentStep = 0,
  completedSteps = [],
  onStepClick,
}) => {
  const completedSet = new Set(completedSteps);

  return (
    <div className="breadcrumb">
      <div className="breadcrumb__inner">
        {steps.map((label, i) => {
          const isCurrent   = i === currentStep;
          const isCompleted = completedSet.has(i);
          const isFuture    = !isCurrent && !isCompleted;
          const isClickable = isCompleted && !isCurrent;

          return (
            <span key={i} className="breadcrumb__item">
              {/* Step label */}
              <span
                className={[
                  'breadcrumb__label',
                  isCurrent   ? 'breadcrumb__label--current'   : '',
                  isCompleted ? 'breadcrumb__label--completed'  : '',
                  isFuture    ? 'breadcrumb__label--future'     : '',
                  isClickable ? 'breadcrumb__label--clickable'  : '',
                ].join(' ')}
                onClick={isClickable ? () => onStepClick?.(i) : undefined}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={isClickable
                  ? (e) => { if (e.key === 'Enter' || e.key === ' ') onStepClick?.(i); }
                  : undefined
                }
                aria-current={isCurrent ? 'step' : undefined}
              >
                {label}
              </span>

              {/* Chevron divider (not after last item) */}
              {i < steps.length - 1 && (
                <span className="breadcrumb__divider material-icons-outlined">
                  chevron_right
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
