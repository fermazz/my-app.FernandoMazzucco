import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();

  return (
    <div className="container-fluid">
      <Link className="navbar-brand carrito" to="../cart">
        <RiShoppingCartLine className="icon"> </RiShoppingCartLine>
      </Link>
      <li
        className={`nav-item ${
          cart.length === 0 ? "d-none" : "navbar-brand d-block"
        }`}
      >
        <span>{totalProducts()}</span>
      </li>
    </div>
  );
};

export default CartWidget;
