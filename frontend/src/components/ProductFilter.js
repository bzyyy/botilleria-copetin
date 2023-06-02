import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Endpoint 3
const ProductFilter = () => {
  const categories = ["Liquidos", "Dulces", "Salado"]; 
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para la opción de ordenamiento
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:3000/api/products/${category}/${sortOrder}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Filtrar Productos por Categoría</h1>
      <label htmlFor="category">Categoría:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">Seleccione una categoría</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <br/>
      <br/>
      <label htmlFor="sortOrder">Orden:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <br/>
      <br/>
      <button onClick={handleSearch} className="button-link-search">Buscar</button>
      <br/>
      <br/>
      <Link to="/products" className="button-link">
      Volver atrás
      </Link>
      {products.length > 0 && (
        <div>
          <h2>Productos encontrados:</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.nombre}</li>
            ))}
          </ul>
        </div>
        
      )}
    </div>
  );
};

export default ProductFilter;