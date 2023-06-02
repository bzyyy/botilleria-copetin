import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Botilleria Los Copetines</h1>
      
      <img src="https://miltramites.net/wp-content/uploads/2021/06/instalar-una-botilleria-en-Chile-1.jpg" alt="La Mejor"/>
      <br/>
      <Link to="/products" className="button-link-search">
        Ver Todos los Productos
      </Link>
    </div>
  );
};

export default Home;