import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {totalProducts} = useCartContext()

  return (
    <>
      <RiShoppingCartLine className="icon">{totalProducts()} </RiShoppingCartLine> 
    </>
  );
};

export default CartWidget;
