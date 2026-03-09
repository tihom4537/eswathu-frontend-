import { useState } from 'react';
import './CollapseHeader.css';

const CollapseHeader = ({
  title,
  defaultOpen = false,
  open: openProp,   // controlled mode: pass this to override internal state
  onToggle,         // controlled mode: called with next open value
  children,
  className = '',
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle && onToggle(!open);
    } else {
      setInternalOpen((o) => !o);
    }
  };

  return (
    <div className={`collapse ${open ? 'collapse--open' : 'collapse--closed'} ${className}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={handleToggle}
        aria-expanded={open}
      >
        <span className="collapse__title">{title}</span>
        <span className="material-icons-outlined collapse__chevron">
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      <div className={`collapse__body-anim ${open ? 'collapse__body-anim--open' : ''}`}>
        <div className="collapse__body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseHeader;
