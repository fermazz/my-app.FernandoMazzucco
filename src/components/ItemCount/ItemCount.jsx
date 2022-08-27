import React from "react";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
  // Declaro variable count y setCount que me va a permitir modificar el estado de count, no olvidar importa useState
  const [count, setCount] = useState(0);

  // Declaro las funciones para cambiar el estado de count y luego las coloco en los botones con OnClick
  function add() {
    if (count < stock){
    setCount(count + 1);}

  }

  function substract() {
    if (count > 0){
    setCount(count - 1);}
    else{count = 0; }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div className="card text-white bg-dark mb-3 card-styles" >
        
        <h1>Product</h1>
        <p>Stock: {stock}</p>
        <p>Cantidad: {count}</p>
        
        <div>
          <button className="btn btn-outline-success" onClick={substract}>
            -
          </button>
          <button className="btn btn-outline-secondary" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-outline-primary" onClick={add}>
            +
          </button>
        </div>
        <div>
        <button className="btn btn-outline-light" onClick={() => onAdd(count)}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
