import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const categories = ["Liquidos", "Dulces", "Salado"]; 
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nombre: '',
    precio: '',
    cantidad: '',
    categorias: '',
  });

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
//Endpoint 2
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (response.ok) {
          // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
          console.log('Producto agregado exitosamente');
          // Restablecer el formulario
          setProduct({
            nombre: '',
            precio: '',
            cantidad: '',
            categorias: '',
          });
          navigate('/products');
        } else {
          // Manejar el error de la respuesta del servidor
          throw new Error('Error al agregar el producto');
        }
      })
      .catch((error) => {
        // Manejar el error de la solicitud, por ejemplo, mostrar un mensaje de error
        console.error(error);
      });
  };


  return (
    <div>
      <h1>Agregar Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="formGroup">
          <label htmlFor="nombre">Nombre del Producto:    </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
          />
        </div>  
            
        <div className="formGroup">
          <label htmlFor="precio">Precio:   </label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
          />
        </div>
            
        <div className="formGroup">
          <label htmlFor="cantidad">Cantidad:   </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={product.cantidad}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="categorias">Categorías:   </label>
          <select 
            id="categorias" 
            name="categorias" 
            value={product.categorias} 
            onChange={handleInputChange}
          >
            <option value="">Seleccione una categoría   </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
            
        <button type="submit" className="button-link-search">Agregar Producto</button>
      </form>
      <br/>   
      <Link to="/products" className="button-link">
        Volver atrás
      </Link>
    </div>
  );
}
export default AddProductForm;
