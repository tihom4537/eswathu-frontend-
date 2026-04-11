import { Fragment } from 'react';
import './Stepper.css';

const DEFAULT_STEPS = [
  'Sale Deed\nDetails',
  'Owner KYC',
  'Property\nDetails',
  'Property\nClassification',
  'Upload EC',
];

/**
 * activeStep       — bcIdx of the page currently being viewed (0–4)
 * completedBCSteps — array of bcIdx values the user has saved and proceeded from
 *
 * Structure matches Figma (node 249-71979):
 *   Each step item = [circle + label] + [connector that follows it]
 *   All items grow=1 (flex:1) except the last, which has no connector and is flex:0
 */
const Stepper = ({ steps = DEFAULT_STEPS, activeStep = 0, completedBCSteps = [], onStepClick }) => {
  const completedSet = new Set(completedBCSteps);

  return (
    <div className="stepper">
      <div className="stepper__inner">
        {steps.map((label, i) => {
          const isLast      = i === steps.length - 1;
          const isActive    = i === activeStep;
          const isCompleted = completedSet.has(i) && !isActive;
          const status      = isCompleted ? 'completed' : isActive ? 'active' : 'upcoming';
          const isClickable = isCompleted && !!onStepClick;

          // The connector after step i is filled when step i is completed
          const lineIsFilled = completedSet.has(i);

          return (
            <div
              key={i}
              className={`stepper__item${isLast ? ' stepper__item--last' : ''}`}
            >
              {/* Step content: circle + label side by side */}
              <div
                className={`stepper__step${isClickable ? ' stepper__step--clickable' : ''}`}
                onClick={isClickable ? () => onStepClick(i) : undefined}
              >
                <div className={`stepper__circle stepper__circle--${status}`}>
                  {isCompleted ? (
                    <span className="material-icons-outlined stepper__check">check</span>
                  ) : (
                    <span className="stepper__number">{i + 1}</span>
                  )}
                </div>
                <span className={`stepper__label stepper__label--${status}`}>
                  {label}
                </span>
              </div>

              {/* Connector line that follows this step (absent on last step) */}
              {!isLast && (
                <div
                  className={`stepper__connector${lineIsFilled ? ' stepper__connector--filled' : ''}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
