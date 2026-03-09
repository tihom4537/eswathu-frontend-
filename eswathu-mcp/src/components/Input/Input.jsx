import { useState } from 'react';
import CaptionMessage from '../CaptionMessage/CaptionMessage';
import './Input.css';

const Input = ({
  label,
  placeholder = '',
  value,
  onChange,
  state = 'empty',
  required = false,
  caption,
  captionVariant,
  leadingIcon,
  trailingIcon,
  onTrailingIconClick,
  trailingIconClassName = '',
  infoTooltip,
  disabled = false,
  frozen = false,
  frozenBlue = false,
  size = 'default',
  className = '',
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const resolvedState = frozenBlue
    ? 'frozen-blue'
    : frozen
      ? 'frozen'
      : disabled
        ? 'disabled'
        : state;

  const wrapperClass = [
    'input-field',
    `input-field--${resolvedState}`,
    focused && resolvedState !== 'frozen' && resolvedState !== 'frozen-blue' ? 'input-field--focused' : '',
    size === 'big' ? 'input-field--big' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const captionType =
    captionVariant ||
    (resolvedState === 'error'
      ? 'error'
      : resolvedState === 'success'
        ? 'success'
        : caption
          ? 'info'
          : null);

  return (
    <div className={wrapperClass}>
      {label && (
        <div className="input-field__label-row">
          <label className="input-field__label">
            {label}
            {required && <span className="input-field__required"> *</span>}
          </label>
          {infoTooltip && (
            <span className="material-icons-outlined input-field__info" title={infoTooltip}>
              info
            </span>
          )}
        </div>
      )}

      <div className="input-field__box">
        {leadingIcon && (
          <span className="material-icons-outlined input-field__icon input-field__icon--lead">
            {leadingIcon}
          </span>
        )}
        <input
          className="input-field__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={frozen || frozenBlue || disabled}
          readOnly={frozen || frozenBlue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        {trailingIcon && (
          onTrailingIconClick ? (
            <button
              type="button"
              className={`input-field__trailing-btn ${trailingIconClassName}`}
              onClick={onTrailingIconClick}
              tabIndex={0}
            >
              <span className="material-icons-outlined">{trailingIcon}</span>
            </button>
          ) : (
            <span className={`material-icons-outlined input-field__icon input-field__icon--trail ${trailingIconClassName}`}>
              {trailingIcon}
            </span>
          )
        )}
      </div>

      {caption && captionType && (
        <CaptionMessage variant={captionType}>{caption}</CaptionMessage>
      )}
    </div>
  );
};

export default Input;

