import './RadioButton.css';

const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`radio ${checked ? 'radio--checked' : ''} ${disabled ? 'radio--disabled' : ''} ${className}`}>
      <input
        type="radio"
        className="radio__input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio__circle">
        {checked && <span className="radio__dot" />}
      </span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};

export default RadioButton;

