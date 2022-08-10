import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";

const ItemDetail = ({ product }) => {
  console.log(product);
  const [initial, setInitial] = useState(1);
  const onAdd = () => {
    alert("Agregaste un producto exitosamente")
  };
  return (
    <>
      <div class="card2">

          <img src={product.imagen} class="estiloImagen2" />

        <div class="espacio">
          <h4 class="card-title">{product.titulo}</h4>
          <p class="card-text">{product.descripcion}</p>
          <h5 class="card-title">{product.precio}</h5>
          <ItemCount stock={product.stock} initial={initial} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
 