import { useState } from 'react';
import CaptionMessage from '../CaptionMessage/CaptionMessage';
import './Input.css';

/* ── Per-inputType validation config ───────────────────────
 *  blockPattern  – chars matching this are blocked on keydown/paste
 *  blurError(val) – returns error string on blur, or null if valid
 */
const TYPE_CONFIG = {
  numeric: {
    blockPattern: /[^0-9]/,
    blurError: null,
  },
  alpha: {
    blockPattern: /[^a-zA-Z\s]/,
    blurError: (val) =>
      /[^a-zA-Z\s]/.test(val) ? 'Please enter alphabets only' : null,
  },
  phone: {
    blockPattern: /[^0-9]/,
    blurError: (val) =>
      val.replace(/\s/g, '').length !== 10
        ? 'Please enter a valid 10-digit mobile number'
        : null,
  },
  otp: {
    blockPattern: /[^0-9]/,
    blurError: null,
  },
  'alphanumeric-code': {
    blockPattern: /[^a-zA-Z0-9\-]/,
    blurError: null,
  },
  text: {
    blockPattern: null,
    blurError: null,
  },
};

/* ── Control keys always allowed ────────────────────────── */
const CONTROL_KEYS = new Set([
  'Backspace', 'Delete', 'Tab', 'Enter', 'Escape',
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
  'Home', 'End',
]);

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
  frozenWithEdit = false, // grey bg + red close icon — for fetched data the user CAN override
  onUnfreeze,             // called when the close icon is clicked
  frozenBlue = false,
  size = 'default',
  className = '',
  inputType = 'text',
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [validationError, setValidationError] = useState('');

  const isReadOnly = frozen || frozenWithEdit || frozenBlue;
  const config = TYPE_CONFIG[inputType] || TYPE_CONFIG.text;

  /* ── Block invalid keydown ───────────────────────────── */
  const handleKeyDown = (e) => {
    if (isReadOnly || !config.blockPattern) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (CONTROL_KEYS.has(e.key)) return;
    if (config.blockPattern.test(e.key)) {
      e.preventDefault();
    }
  };

  /* ── Clean invalid paste ─────────────────────────────── */
  const handlePaste = (e) => {
    if (isReadOnly || !config.blockPattern) return;
    const pasted = e.clipboardData.getData('text');
    const pattern = new RegExp(config.blockPattern.source, 'g');
    const cleaned = pasted.replace(pattern, '');
    if (cleaned !== pasted) {
      e.preventDefault();
      const el = e.target;
      const before = (value ?? '').slice(0, el.selectionStart);
      const after = (value ?? '').slice(el.selectionEnd);
      onChange?.({ target: { value: before + cleaned + after } });
    }
  };

  /* ── Blur: validate ──────────────────────────────────── */
  const handleBlur = () => {
    setFocused(false);
    if (isReadOnly || !config.blurError) return;
    const err = config.blurError(value ?? '');
    setValidationError(err || '');
  };

  /* ── Change: clear error ─────────────────────────────── */
  const handleChange = (e) => {
    if (validationError) setValidationError('');
    onChange?.(e);
  };

  const resolvedState = frozenBlue
    ? 'frozen-blue'
    : frozenWithEdit
      ? 'frozen-with-edit'
      : frozen
        ? 'frozen'
        : disabled
        ? 'disabled'
        : validationError
          ? 'error'
          : state;

  const wrapperClass = [
    'input-field',
    `input-field--${resolvedState}`,
    focused && resolvedState !== 'frozen' && resolvedState !== 'frozen-with-edit' && resolvedState !== 'frozen-blue' ? 'input-field--focused' : '',
    size === 'big' ? 'input-field--big' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const effectiveCaption = validationError || caption;
  const captionType = validationError
    ? 'error'
    : captionVariant ||
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
          onChange={handleChange}
          disabled={frozen || frozenWithEdit || frozenBlue || disabled}
          readOnly={frozen || frozenWithEdit || frozenBlue}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          {...rest}
        />
        {/* frozenWithEdit: always render the danger-coloured close button */}
        {frozenWithEdit && (
          <button
            type="button"
            className="input-field__trailing-btn input-field__trailing-btn--danger"
            onClick={onUnfreeze}
            tabIndex={0}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        )}
        {/* Manual trailing icon (used in non-frozen contexts) */}
        {!frozenWithEdit && trailingIcon && (
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

      {effectiveCaption && captionType && (
        <CaptionMessage variant={captionType}>{effectiveCaption}</CaptionMessage>
      )}
    </div>
  );
};

export default Input;
