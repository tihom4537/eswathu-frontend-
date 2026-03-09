import './Checkbox.css';

const Checkbox = ({
  label,
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  color = 'default',
  className = '',
}) => {
  const type = indeterminate ? 'intermediate' : checked ? 'selected' : 'unselected';
  const icon = indeterminate ? 'remove' : checked ? 'check' : null;

  return (
    <label className={`checkbox checkbox--${type} checkbox--${color} ${disabled ? 'checkbox--disabled' : ''} ${className}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkbox__box">
        {icon && <span className="material-icons-outlined checkbox__icon">{icon}</span>}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;

