import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (quantity) => {
    console.log(quantity);
  };
  return (
    <article className="card text-white bg-dark mb-3">
      <h1>{item.nombre}</h1>
      <div className="card-detail">
        <div className="card-detail-left">
          <img src={item.img} alt={item.nombre} className="img" />
        </div>
        <div className="card-detail-right">
          <p>{item.descripcion}</p>
          <p className="price">${item.precio}</p>
          <p>Stock: {item.stock}</p>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
