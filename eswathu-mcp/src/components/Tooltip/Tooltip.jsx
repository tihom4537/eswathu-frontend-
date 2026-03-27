import { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ label, imageSrc, imageAlt = 'Sample', caption, className = '', variant, definition, children }) => {
  const [imgError, setImgError] = useState(false);
  const [showDef, setShowDef] = useState(false);

  /* ── Definition variant — inline underlined term + hover box ── */
  if (variant === 'definition') {
    return (
      <span
        className={`tooltip-def ${className}`}
        onMouseEnter={() => setShowDef(true)}
        onMouseLeave={() => setShowDef(false)}
      >
        <span className="tooltip-def__term">{children}</span>
        {showDef && (
          <span className="tooltip-def__box" role="tooltip">
            {definition}
          </span>
        )}
      </span>
    );
  }

  /* ── Default variant — image + label card ────────────────── */
  return (
    <div className={`tooltip-card ${className}`}>
      <div className="tooltip-card__label">
        <span className="material-icons-outlined tooltip-card__label-icon">info_outline</span>
        <p className="tooltip-card__label-text">{label}</p>
      </div>
      <div className="tooltip-card__media">
        {imageSrc && !imgError ? (
          <img
            className="tooltip-card__image"
            src={imageSrc}
            alt={imageAlt}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="tooltip-card__image tooltip-card__image--placeholder" />
        )}
        {caption && (
          <div className="tooltip-card__caption">
            <span className="material-icons-outlined tooltip-card__caption-icon">info_outline</span>
            <span className="tooltip-card__caption-text">{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
