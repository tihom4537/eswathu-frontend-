import { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

const BOX_WIDTH = 520;
const MARGIN = 12; // min gap from viewport edge

/* ── Definition tooltip — always-mounted sub-component so hooks are unconditional ── */
const DefinitionTooltip = ({ definition, className = '', children }) => {
  const [showDef, setShowDef] = useState(false);
  const [boxStyle, setBoxStyle] = useState({});
  const termRef = useRef(null);
  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    if (!termRef.current) return;
    const rect = termRef.current.getBoundingClientRect();
    const vw = window.innerWidth;

    // Horizontal: left-align unless not enough space, then right-align
    let hStyle;
    if (vw - rect.left >= BOX_WIDTH + MARGIN) {
      hStyle = { left: rect.left };
    } else {
      hStyle = { right: Math.max(vw - rect.right, MARGIN) };
    }

    // Vertical: default below; will flip above in useEffect if needed
    setBoxStyle({ top: rect.bottom + 8, ...hStyle });
    setShowDef(true);
  };

  // After box renders, flip above if it overflows the bottom of the viewport
  useEffect(() => {
    if (!showDef || !boxRef.current || !termRef.current) return;
    const boxRect = boxRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    if (boxRect.bottom > vh - MARGIN) {
      const termRect = termRef.current.getBoundingClientRect();
      setBoxStyle((prev) => ({
        ...prev,
        top: Math.max(termRect.top - boxRect.height - 8, MARGIN),
      }));
    }
  }, [showDef]);

  return (
    <span
      className={`tooltip-def ${className}`}
      ref={termRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShowDef(false)}
    >
      <span className="tooltip-def__term">{children}</span>
      {showDef && (
        <span className="tooltip-def__box" role="tooltip" style={boxStyle} ref={boxRef}>
          {definition}
        </span>
      )}
    </span>
  );
};

const Tooltip = ({ label, imageSrc, imageAlt = 'Sample', caption, className = '', variant, definition, children }) => {
  const [imgError, setImgError] = useState(false);

  /* ── Definition variant ── */
  if (variant === 'definition') {
    return (
      <DefinitionTooltip definition={definition} className={className}>
        {children}
      </DefinitionTooltip>
    );
  }

  /* ── Default variant — image + label card ── */
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
