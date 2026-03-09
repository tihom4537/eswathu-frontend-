import './ProgressCircle.css';

const ProgressCircle = ({ label, percentage = 0, size = 160, className = '' }) => {
  const strokeWidth = 6;
  const r = (size - strokeWidth * 2) / 2;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div className={`progress-circle ${className}`} style={{ width: size, height: size }}>
      <svg className="progress-circle__svg" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="progress-circle__track"
          cx={c}
          cy={c}
          r={r}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle__bar"
          cx={c}
          cy={c}
          r={r}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="progress-circle__center">
        {label && <span className="progress-circle__label">{label}</span>}
        <span className="progress-circle__value">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;

