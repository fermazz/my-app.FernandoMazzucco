import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { nombre, img, precio, id } = producto;
  return (
    <div
      className="card text-white bg-dark mb-3 row"
      // key={producto.id}
      style={{ maxWidth: "18rem", margin: "0.5rem" }}
    >
      <div className="card-header">{producto.nombre}</div>
      <div className="card-body">
        <div>
          <img className="img" src={producto.img} alt={producto.nombre} />
        </div>
        <p className="card-text">Precio: ${producto.precio} </p>
        <Link to={`/detalles/${id}`}>
          <button className="btn btn-outline-secondary">Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
