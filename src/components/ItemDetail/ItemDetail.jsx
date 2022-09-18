import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item, setItem }) => {

const [goToCart, setGoToCart] = useState(false)

const {addItem} = useCartContext();

  const onAdd = (quantity) => {

    setGoToCart(true);
    addItem(item, quantity);
    item.stock = item.stock - quantity; 

    console.log(quantity)

  };

const [cantidad, setCantidad] = useState(0);

const agregarAlCarrito = (item, cantidad) => {
  const productoCarrito = {id: item.id, cantidad: cantidad}
  console.log(productoCarrito)
} 

  return (
    <>
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
          
          <div className="d-grid gap-2">
                    {goToCart ? (
                      <Link
                        to="/cart"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                        Finalizar compra
                      </Link>
                      
                    ) : (
                      <ItemCount
                        className="mt-5 p-5"
                        stock={item.stock}
                        onAdd={onAdd}
                      />
                    )}
                    <Link
                        to="/"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                       Seguir Comprando
                      </Link>
                  </div>   

          <div>
          </div>
        </div>
        
      </div>
    </article>
    </>
  );
};

export default ItemDetail;
