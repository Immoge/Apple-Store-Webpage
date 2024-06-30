import React, { useState } from 'react';
import './DataGrid.css';

const DataGrid = ({ data }) => {
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
          <th>Product</th>
          <th>ID</th>
          <th>Unit Price</th>
          <th>Qty Per Unit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={item.ProductID}>
            <tr className={index % 2 === 0 ? 'even-row' : ''}>
              <td>
                <button onClick={() => toggleRow(item.ProductID)}>
                  {expandedRows[item.ProductID] ? '-' : '+'}
                </button>
              </td>
              <td>{item.ProductName}</td>
              <td>{item.ProductID}</td>
              <td>{item.UnitPrice.toFixed(2)}</td>
              <td>{item.QuantityPerUnit}</td>
            </tr>
            {expandedRows[item.ProductID] && (
              <tr className="expanded-row">
                <td></td>
                <td colSpan="4">
                  <div className="expanded-content">
                    <p><strong>In Stock:</strong> {item.UnitsInStock} units</p>
                    <p><strong>On Order:</strong> {item.UnitsOnOrder} units</p>
                    <p><strong>Reorder Level:</strong> {item.ReorderLevel} units</p>
                    <p><strong>Discontinued:</strong> {item.Discontinued ? 'Yes' : 'No'}</p>
                    <p><strong>Category:</strong> {item.Category.CategoryName} - {item.Category.Description}</p>
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