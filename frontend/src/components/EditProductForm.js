import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditProductForm = () => {
  const categories = ["Liquidos", "Dulces", "Salado"]; 
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    nombre: '',
    precio: '',
    cantidad: '',
    categorias: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/product/${id}`);
        const data = await response.json();
        const productData = data[0]; // Obtener el primer elemento del arreglo (objeto)
        setProduct({
            nombre: productData.nombre,
            precio: productData.precio,
            cantidad: productData.cantidad,
            categorias: productData.categoria
          });

        } catch (error) {
          console.error(error);
        }
      };
      fetchProduct();
    }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        console.log('Producto actualizado exitosamente');
        // Redireccionar a la lista de productos
        navigate('/products');
      } else {
        // Manejar el error de la respuesta del servidor
        throw new Error('Error al actualizar el producto');
      }
    } catch (error) {
      // Manejar el error de la solicitud, por ejemplo, mostrar un mensaje de error
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={product.cantidad}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="categorias">Categorías:</label>
          <select 
            id="categorias" 
            name="categorias" 
            value={product.categorias} 
            onChange={handleInputChange}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="button-link-search">Actualizar Producto</button>
        <Link to="/products" className="button-link">
          Volver atrás
        </Link>
      </form>
    </div>
  );
};

export default EditProductForm;
