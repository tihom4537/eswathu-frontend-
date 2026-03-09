import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  icon,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="material-icons-outlined btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

