import React, { useState } from "react";
import { useEffect } from "react";
import simboloSuma from "../images/SimboloSuma.png";
import simboloResta from "../images/SimboloResta.png";
const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);
  const sumador = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
    console.log("Estoy sumando");
  };
  const restador = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
    console.log("Estoy restando");
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
      <button class="btn botonAgregarCarrito">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
{
  /*<button class="" onClick={() => setCount(count - 1)}><img src={simboloResta} alt="" width="30" height="20" /></button>
<div>{count}</div>
<button class="" onClick={() => setCount(count + 1)}><img src={simboloSuma} alt="" width="30" height="20" /></button>
*/
}
