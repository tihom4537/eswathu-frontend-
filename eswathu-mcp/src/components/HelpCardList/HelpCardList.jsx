import './HelpCardList.css';

const HelpCardList = ({
  subtitle,
  title,
  description,
  items = [],
  variant = 'default',
  noDoc = false,
  className = '',
}) => {
  const isDocument = variant === 'document';

  return (
    <div className={`hcl ${isDocument ? 'hcl--document' : ''} ${className}`}>
      {subtitle && <p className="hcl__subtitle">{subtitle}</p>}
      {title && <h3 className="hcl__title">{title}</h3>}
      {description && <p className="hcl__desc">{description}</p>}

      {/* Document variant: file_copy icon pills + compulsory heading */}
      {isDocument && !noDoc && items.length > 0 && (
        <div className="hcl__doc-section">
          <p className="hcl__doc-heading">
            <strong>Compulsory documents</strong> required for e-khata
          </p>
          <ul className="hcl__list">
            {items.map((item, i) => (
              <li key={i} className="hcl__item">
                <span className="material-icons-outlined hcl__check">file_copy</span>
                <span className="hcl__item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isDocument && noDoc && (
        <p className="hcl__no-doc">No standard compulsory documents apply for this classification.</p>
      )}

      {/* Default variant: green check_circle items */}
      {!isDocument && items.length > 0 && (
        <ul className="hcl__list">
          {items.map((item, i) => (
            <li key={i} className="hcl__item">
              <span className="material-icons-outlined hcl__check">check_circle</span>
              <span className="hcl__item-text">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HelpCardList;
