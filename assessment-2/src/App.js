import React from 'react';
import DataGrid from './components/DataGrid/DataGrid';
import productsData from './data/products.json';

function App() {
  return (
    <div className="App">
      <h1>Product Data Grid</h1>
      <DataGrid data={productsData} />
    </div>
  );
}

export default App;