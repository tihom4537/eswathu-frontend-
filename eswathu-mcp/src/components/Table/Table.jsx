import './Table.css';

const Table = ({ columns = [], rows = [], actionButton, className = '' }) => {
  return (
    <div className={`table-wrapper ${className}`}>
      <table className="data-table">
        <thead>
          <tr className="data-table__header">
            {columns.map((col, i) => (
              <th key={i} className="data-table__th">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="data-table__row">
              {row.map((cell, ci) => (
                <td key={ci} className="data-table__td">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {actionButton && (
        <div className="data-table__action">
          {actionButton}
        </div>
      )}
    </div>
  );
};

export default Table;

