import { useState } from 'react';
import CaptionMessage from '../CaptionMessage/CaptionMessage';
import './DatePicker.css';

const DatePicker = ({
  label,
  value,
  onChange,
  state = 'empty',
  required = false,
  caption,
  captionVariant,
  frozen = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const resolvedState = frozen ? 'frozen' : disabled ? 'disabled' : state;

  const captionType =
    captionVariant ||
    (resolvedState === 'error' ? 'error' : resolvedState === 'success' ? 'success' : caption ? 'info' : null);

  return (
    <div className={`datepicker datepicker--${resolvedState} ${focused ? 'datepicker--focused' : ''} ${className}`}>
      {label && (
        <label className="datepicker__label">
          {label}
          {required && <span className="datepicker__required"> *</span>}
        </label>
      )}

      <div className="datepicker__box">
        <input
          type="date"
          className="datepicker__input"
          value={value}
          onChange={onChange}
          disabled={frozen || disabled}
          readOnly={frozen}
          max={new Date().toISOString().split('T')[0]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        <span className="material-icons-outlined datepicker__icon">calendar_today</span>
      </div>

      {caption && captionType && (
        <CaptionMessage variant={captionType}>{caption}</CaptionMessage>
      )}
    </div>
  );
};

export default DatePicker;
