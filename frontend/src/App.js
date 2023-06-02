import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList.js';
import AddProductForm from './components/AddProductForm';
import ProductFilter from './components/ProductFilter';
import EditProductForm from './components/EditProductForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/form" element={<AddProductForm />} />
        <Route path="/products/filter" element={<ProductFilter />} />
        <Route path="/product/edit/:id" element={<EditProductForm />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;