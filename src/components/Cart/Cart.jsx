import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useCartContext();

  return cart.length > 0 ? (
    <div className="container__cart" key={cart.id}>
      {cart.map((product) => (
        <table className="table table-hover table-position" key={product.id}>
          <tbody className="tbody">
            <tr className="table-dark">
              <td scope="row">Cantidad: {product.quantity}</td>
              <td className="">{product.nombre}</td>
              <td>$ {product.precio.toLocaleString()}</td>

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

      <div className="price-position">
        <h4>Precio total: {totalPrice().toLocaleString()}</h4>
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
        <hr />
        <br />
        <br />
        <Link to="/">
          <button className="btn btn-lg btn-dark mt-2 cancelar-position">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
