import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import db from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clear } = useCartContext();
  const [orderId, setOrderId] = useState();

  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });

  const { Nombre, Email, Telefono } = buyer;

  const navigate = useNavigate();

  const generateOrder = async (data) => {
    try {
      const col = collection(db, "Orders");
      const order = await addDoc(col, data);
      console.log("OrderNro:", order);
      setOrderId(order.id);
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cart.map((e) => {
      return { id: e.id, title: e.nombre, price: e.precio, amount: e.quantity };
    });
    const dia = new Date();
    const total = totalPrice();
    const data = { buyer, items, dia, total };
    console.log("data", data);
    generateOrder(data);
  };

  const handleClear = () => {
    clear();
    console.log("vacio carrito");
    navigate("/cart");
  };

  return (
    <>
      <h1>Finalizando Compra</h1>
      <hr />

      {!orderId ? (
        <div>
          <h4>Completar Datos:</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              value={Nombre}
              onChange={handleInputChange}
            />

            <br />
            <br />

            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={handleInputChange}
            />

            <br />
            <br />

            <input
              type="text"
              name="Telefono"
              placeholder="Telefono"
              value={Telefono}
              onChange={handleInputChange}
            />

            <br />
            <br />

            <input
              type="submit"
              value="Finalizar Compra"
              className="btn btn-lg btn-dark mt-2"
            />
          </form>
        </div>
      ) : (
        <h4>Su orden de compra es: {orderId}</h4>
      )}

      <br />

      <button className="btn btn-lg btn-dark mt-2" onClick={handleClear}>
        {" "}
        Cancelar Compra{" "}
      </button>
    </>
  );
};

export default Checkout;
