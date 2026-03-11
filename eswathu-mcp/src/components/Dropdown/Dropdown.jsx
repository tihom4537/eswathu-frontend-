import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({
  label,
  placeholder = 'Select',
  options = [],
  value,
  onChange,
  required = false,
  disabled = false,
  frozen = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);
  const isFrozen = frozen && !editing;

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`dropdown ${open ? 'dropdown--open' : ''} ${disabled ? 'dropdown--disabled' : ''} ${isFrozen ? 'dropdown--frozen' : ''} ${className}`} ref={ref}>
      {label && (
        <label className="dropdown__label">
          {label}
          {required && <span className="dropdown__required"> *</span>}
        </label>
      )}

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        className="dropdown__trigger"
        onClick={() => !disabled && !isFrozen && setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && !isFrozen && setOpen((o) => !o); } }}
        aria-disabled={disabled}
      >
        <span className={`dropdown__value ${!selected ? 'dropdown__value--placeholder' : ''}`}>
          {selected ? selected.label : placeholder}
        </span>
        {isFrozen ? (
          <div
            role="button"
            tabIndex={0}
            className="dropdown__edit-btn"
            onClick={(e) => { e.stopPropagation(); setEditing(true); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setEditing(true); } }}
          >
            <span className="material-icons-outlined dropdown__edit-icon">close</span>
          </div>
        ) : (
          <span className="material-icons-outlined dropdown__chevron">
            {open ? 'expand_less' : 'expand_more'}
          </span>
        )}
      </div>

      {open && (
        <ul className="dropdown__menu">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`dropdown__item ${opt.value === value ? 'dropdown__item--selected' : ''}`}
              onClick={() => {
                onChange?.({ target: { value: opt.value } });
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

