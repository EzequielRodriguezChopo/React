import React, { useState } from "react";
import simboloSuma from "../images/SimboloSuma.png";
import simboloResta from "../images/SimboloResta.png";

const ItemCount = ({ stock, initial, onAdd }) => {
   const [count, setCount] = useState(initial);
   const sumador = () => {
      count < stock ? setCount(count + 1) : setCount(stock);
   };
   const restador = () => {
      count <= 1 ? setCount(initial) : setCount(count - 1);
   };

   return (
      <div className="contadorDeStock">
         <div className="BtnSumRest">
            <button className="" onClick={restador}>
               <img src={simboloResta} alt="" width="30" height="20" />
            </button>
            <div>{count}</div>
            <button className="" onClick={sumador}>
               <img src={simboloSuma} alt="" width="30" height="20" />
            </button>
         </div>
         <button className="btn btnPersonalizado" onClick={() => {onAdd(count);}}>Agregar a carrito</button>
      </div>
   );
};
export default ItemCount;
