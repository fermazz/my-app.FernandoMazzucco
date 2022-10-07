import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  // Declaro variable count y setCount que me va a permitir modificar el estado de count, no olvidar importa useState
  const [count, setCount] = useState(1);

  // Declaro las funciones para cambiar el estado de count y luego las coloco en los botones con OnClick
  function add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function substract() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      count = 0;
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div className="card text-white bg-dark mb-3 card-styles">
        <p>Cantidad: {count}</p>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={substract}
            disabled={count !== 1 ? false : true}
          >
            -
          </button>
          <button className="btn btn-outline-secondary" onClick={reset}>
            Reset
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={add}
            disabled={count !== stock ? false : true}
          >
            +
          </button>
          <div className="d-grid gap-2">
            <button
              disabled={stock <= 0}
              className="btn btn-lg btn-dark mt-2"
              type="button"
              onClick={() => onAdd(count)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
