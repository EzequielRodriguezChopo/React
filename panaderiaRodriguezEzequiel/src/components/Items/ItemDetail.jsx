import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <>
      <div class="card2">
        <div>
          <img src={product.imagen} class="estiloImagen" />
        </div>
        <div class="espacio">
          <h4 class="card-title">{product.titulo}</h4>
          <p class="card-text">{product.descripcion}</p>
          <h5 class="card-title">{product.precio}</h5>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
