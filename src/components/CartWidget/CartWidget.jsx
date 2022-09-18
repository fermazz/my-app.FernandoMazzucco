import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();

  return cart.length > 0 ?
  <div>
    <Link to="/cart">
    <RiShoppingCartLine className="icon"> </RiShoppingCartLine>
    <span className="number-icon icon">{totalProducts()}</span>
    </Link>
  </div>
  :
  <div>""</div>
};

export default CartWidget;
