import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      //Endpoint 1
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleEditProduct = (productId) => {
    // Redireccionar a la ruta de edición del producto con el ID proporcionado
    window.location.href = `/product/edit/${productId}`;
  };

return (
    <div>
      <h1>Lista de productos</h1>
      <Link to="/" className="button-link">Volver al Inicio</Link>
      <Link to="/product/form" className="button-link">Crear un nuevo producto</Link>
      <Link to="/products/filter" className="button-link">Filtrar productos</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <br/>
            ID: {product.id}
            <br/>
            Nombre: {product.nombre}
            <br/>
            Precio: $ {product.precio}
            <br/>
            Cantidad: {product.cantidad} 
            <br/>
            Categoria: {product.categorias}
            <button className="myButton" onClick={() => handleEditProduct(product.id)}>Editar</button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default ProductList;