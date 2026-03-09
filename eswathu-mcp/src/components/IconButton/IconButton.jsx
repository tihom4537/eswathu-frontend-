import './IconButton.css';

const IconButton = ({
  icon,
  color = 'black',
  size = 'default',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`icon-btn icon-btn--${color} icon-btn--${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <span className="material-icons-outlined">{icon}</span>
    </button>
  );
};

export default IconButton;

