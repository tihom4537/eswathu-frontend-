import { useState, useRef } from 'react';
import './Tooltip.css';

const BOX_WIDTH = 520;
const MARGIN = 12; // min gap from viewport edge

const Tooltip = ({ label, imageSrc, imageAlt = 'Sample', caption, className = '', variant, definition, children }) => {
  const [imgError, setImgError] = useState(false);
  const [showDef, setShowDef] = useState(false);
  const [boxStyle, setBoxStyle] = useState({});
  const termRef = useRef(null);

  /* ── Definition variant — inline underlined term + hover box ── */
  if (variant === 'definition') {
    const handleMouseEnter = () => {
      if (termRef.current) {
        const rect = termRef.current.getBoundingClientRect();
        const top = rect.bottom + 8;
        // Decide left vs right alignment based on available space
        const spaceOnRight = window.innerWidth - rect.left;
        if (spaceOnRight >= BOX_WIDTH + MARGIN) {
          setBoxStyle({ top, left: rect.left });
        } else {
          // Align right edge of box to right edge of term
          const right = window.innerWidth - rect.right;
          setBoxStyle({ top, right: Math.max(right, MARGIN) });
        }
      }
      setShowDef(true);
    };

    return (
      <span
        className={`tooltip-def ${className}`}
        ref={termRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowDef(false)}
      >
        <span className="tooltip-def__term">{children}</span>
        {showDef && (
          <span className="tooltip-def__box" role="tooltip" style={boxStyle}>
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
