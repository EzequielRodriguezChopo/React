import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, stock, imagen, initial, onAdd }) => {

   return (
      <>
         <Link class="btn btnPersonalizado" to={`/item/${id}`}>
            <div class="card ">
               <img src={imagen} class="estiloImagen" />
               <div class="card-body">
                  <h4 class="card-title">{titulo}</h4>
                  <h5 class="card-title">{precio}$</h5>
                  <a href="#" class="btn btnPersonalizado">
                     Ver detalle del Producto
                  </a>
                  <p>Stock disponible {stock}</p>
               </div>
            </div>
         </Link>
         
      </>
   );
};

export default Item;
