import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, stock, imagen, initial, onAdd }) => {

   return (
      <>
         <Link className="card" to={`/item/${id}`}>
            <img src={imagen} className="estiloImagen" />
            <div className="card-body">
               <h4 className="card-title">{titulo}</h4>
               <h5 className="card-title">{precio}$</h5>
               <button className="btn btnPersonalizado">
                  Ver detalle del Producto
               </button>
               <p>Stock disponible {stock}</p>
            </div>
         </Link>
      </>
   );
};

export default Item;
 