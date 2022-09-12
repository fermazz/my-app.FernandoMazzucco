import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const onAdd = (quantity) => {
    console.log(quantity);
  };

const [cantidad, setCantidad] = useState(1);

const agregarAlCarrito = (item, cantidad) => {
  const productoCarrito = {id: item.id, cantidad: cantidad}
  console.log(productoCarrito)
} 

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
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          <div>
          
         <Link to="/cart"> 
        <button className="btn btn-outline-light"
            // onClick={() => onAdd(count)}
            onClick={() => agregarAlCarrito(item, cantidad)}
          >
            Confirmar
          </button>
          </Link>
        </div>
        </div>
        
      </div>
    </article>
  );
};

export default ItemDetail;
