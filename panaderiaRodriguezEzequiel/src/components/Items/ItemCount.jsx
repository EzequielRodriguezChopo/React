import React, { useState } from "react";
import simboloSuma from "../images/SimboloSuma.png";
import simboloResta from "../images/SimboloResta.png";
import { Link } from "react-router-dom";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const sumador = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };
  const restador = () => {
    count <= 1 ? setCount(initial) : setCount(count - 1);
  };


  return (
    <div class="contadorDeStock">
      <div class="BtnSumRest">
        <button class="" onClick={restador}>
          <img src={simboloResta} alt="" width="30" height="20" />
        </button>
        <div>{count}</div>
        <button class="" onClick={sumador}>
          <img src={simboloSuma} alt="" width="30" height="20" />
        </button>
      </div>
      <div class="btn btnPersonalizado" onClick={onAdd}>Agregar a carrito</div>
    </div>
  );
};

export default ItemCount;
