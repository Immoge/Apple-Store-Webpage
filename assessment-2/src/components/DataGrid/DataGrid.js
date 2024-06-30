import React, { useState } from 'react';
import './DataGrid.css';

const DataGrid = ({ data, columns, detailFields }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <table className="data-grid">
      <thead>
        <tr>
          <th></th>
          {columns.map(column => (
            <th key={column.field}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={item[columns[0].field]}>
            <tr className={index % 2 === 0 ? 'even-row' : ''}>
              <td>
                <button onClick={() => toggleRow(item[columns[0].field])}>
                  {expandedRows[item[columns[0].field]] ? '-' : '+'}
                </button>
              </td>
              {columns.map(column => (
                <td key={column.field}>
                  {column.format ? column.format(item[column.field]) : item[column.field]}
                </td>
              ))}
            </tr>
            {expandedRows[item[columns[0].field]] && (
              <tr className="expanded-row">
                <td></td>
                <td colSpan={columns.length}>
                  <div className="expanded-content">
                    {detailFields.map(field => (
                      <p key={field.key}>
                        <strong>{field.label}:</strong> {field.format ? field.format(item[field.key]) : item[field.key]}
                      </p>
                    ))}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;