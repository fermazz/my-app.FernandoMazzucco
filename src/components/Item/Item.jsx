import React from "react";
const Item = ({ producto }) => {
  return (
    <div
      className="card text-white bg-dark mb-3 row"
      key={producto.id}
      style={{ maxWidth: "18rem", margin: "0.5rem" }}
    >
      <div className="card-header">{producto.nombre}</div>
      <div className="card-body">
        <p className="card-text">Marca: {producto.marca} </p>
        <p className="card-text">Precio: ${producto.precio} </p>
        <p className="card-text">Stock: {producto.stock} </p>
      </div>
    </div>
  );
};

export default Item;
