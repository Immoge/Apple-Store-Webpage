import React from 'react';
import DataGrid from './components/DataGrid/DataGrid';
import productsData from './data/products.json';

function App() {
  const columns = [
    { field: 'ProductName', header: 'Product' },
    { field: 'ProductID', header: 'ID' },
    { field: 'UnitPrice', header: 'Unit Price', format: (value) => `${value.toFixed(2)}` },
    { field: 'QuantityPerUnit', header: 'Qty Per Unit' }
  ];

  const detailFields = [
    { key: 'UnitsInStock', label: 'In Stock', format: (value) => `${value} units` },
    { key: 'UnitsOnOrder', label: 'On Order', format: (value) => `${value} units` },
    { key: 'ReorderLevel', label: 'Reorder Level', format: (value) => `${value} units` },
    { key: 'Discontinued', label: 'Discontinued', format: (value) => value ? 'Yes' : 'No' },
    { key: 'Category', label: 'Category', format: (value) => `${value.CategoryName} - ${value.Description}` }
  ];

  return (
    <div className="App">
      <h1>Product Data Grid</h1>
      <DataGrid 
        data={productsData}
        columns={columns}
        detailFields={detailFields}
      />
    </div>
  );
}

export default App;