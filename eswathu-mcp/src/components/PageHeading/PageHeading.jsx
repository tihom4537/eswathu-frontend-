import './PageHeading.css';

const PageHeading = ({ subtitle, title, className = '' }) => {
  return (
    <div className={`page-heading ${className}`}>
      {subtitle && <p className="page-heading__subtitle">{subtitle}</p>}
      <h1 className="page-heading__title">{title}</h1>
    </div>
  );
};

export default PageHeading;

