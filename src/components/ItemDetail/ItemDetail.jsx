import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

const [goToCart, setGoToCart] = useState(false)

  const onAdd = (quantity) => {

    setGoToCart(true)


    console.log(quantity);
  };

const [cantidad, setCantidad] = useState(0);

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
          {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> */}

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
          
         {/* <Link to="/cart"> 
        <button className="btn btn-outline-light"
            // onClick={() => onAdd(count)}
            onClick={() => agregarAlCarrito(item, cantidad)}
          >
            Comprar
          </button>
          </Link> */}
        </div>
        </div>
        
      </div>
    </article>
  );
};

export default ItemDetail;
