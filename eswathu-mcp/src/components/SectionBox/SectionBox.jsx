import './SectionBox.css';

const SectionBox = ({
  number,
  title,
  open = false,
  children,
  className = '',
}) => {
  return (
    <div className={`section-box ${open ? 'section-box--open' : 'section-box--closed'} ${className}`}>
      <div className="section-box__header">
        <span className="section-box__number">{number}</span>
        <span className="section-box__title">{title}</span>
      </div>
      {open && (
        <div className="section-box__body">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionBox;

