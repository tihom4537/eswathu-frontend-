import { isValidElement } from 'react';
import './Table.css';

/* When a row cell is a React component (not plain text/number), the <td> gets
   data-table__td--input so Table.css can strip the Input component's own box
   styling — the cell border becomes the only visible boundary. */

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
              {row.map((cell, ci) => {
                const isComponent = isValidElement(cell);
                return (
                  <td
                    key={ci}
                    className={`data-table__td${isComponent ? ' data-table__td--input' : ''}`}
                  >
                    {cell}
                  </td>
                );
              })}
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
