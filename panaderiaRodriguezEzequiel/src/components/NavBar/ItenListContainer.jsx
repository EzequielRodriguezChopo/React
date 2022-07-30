import React from "react";
import ItemCount from "./ItemCount";

const ItenListContainer = ({ imagen, titulo, descripcion, precio, stock}) => {
  return (
    <>
      <div class="card">
        <img src={imagen} class="estiloImagen" />
        <div class="card-body">
          <h5 class="card-title">{titulo}</h5>
          <p class="card-text">{descripcion}</p>
          <div>
            <ItemCount stock={stock}/>
          </div>
          <a href="#" class="btn btnPersonalizado">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
};

export default ItenListContainer;
