import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useCartContext();

  return cart.length > 0 ? (
    <div key={cart.id}>
      {/* <table className="table table-hover">
      <thead>
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio unidad</th>
              <th scope="col">Imagen</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          </table> */}
      {cart.map((product) => (
        <table className="table table-hover" key={product.id}>
          <tbody className="tbody">
            <tr className="table-dark">
              <td scope="row">Cantidad: {product.quantity}</td>
              <td>Nombre: {product.nombre}</td>
              <td>$ {product.precio}</td>

              <td className="img-container">
                <img className="img" src={product.img} />
              </td>

              <td>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => removeItem(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}

      <div>
        <h4>Precio total: {totalPrice()}</h4>
        <Link to="/checkout">
          <button className="btn btn-lg btn-dark mt-2 ">
            Confirmar Compra
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <div className="cart-container">
        <h1>No hay elementos en el carrito</h1>
        <Link to="/">
          <button className="btn btn-lg btn-dark mt-2 ">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
