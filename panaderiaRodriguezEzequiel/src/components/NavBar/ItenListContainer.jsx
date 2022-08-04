import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItenListContainer = ({ imagen, titulo, descripcion, precio, stock }) => {
  const [initial, setInitial] = useState(1);

  const onAdd = () => {
    alert("Agregaste un producto exitosamente")
  };

  return (
    <>
      <div class="card">
        <img src={imagen} class="estiloImagen" />
        <div class="card-body">
          <h5 class="card-title">{titulo}</h5>
          <p class="card-text">{descripcion}</p>
          <div>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
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
