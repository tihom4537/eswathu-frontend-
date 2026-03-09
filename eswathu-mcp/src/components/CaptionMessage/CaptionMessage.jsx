import './CaptionMessage.css';

const ICON_MAP = {
  error: 'error_outline',
  success: 'check_circle_outline',
  warning: 'warning_amber',
  info: 'info',
};

const CaptionMessage = ({ variant = 'info', children }) => {
  if (!children) return null;

  const icon = ICON_MAP[variant] || ICON_MAP.info;

  return (
    <div className={`caption-msg caption-msg--${variant}`}>
      <span className="material-icons-outlined caption-msg__icon">{icon}</span>
      <span className="caption-msg__text">{children}</span>
    </div>
  );
};

export default CaptionMessage;

