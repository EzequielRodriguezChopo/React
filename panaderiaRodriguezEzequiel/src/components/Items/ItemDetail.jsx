import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [carrito, setCarrito] = useState(false)
  const [initial, setInitial] = useState(1);
  const onAdd = () => {
    setCarrito(true);
  };
  return (
    <>
      <div class="card2">

        <img src={product.imagen} class="estiloImagen2" />

        <div class="espacio">
          <h4 class="card-title">{product.titulo}</h4>
          <p class="card-text">{product.descripcion}</p>
          <h5 class="card-title">{product.precio}</h5>
          <br />
          {
          carrito
            ?<Link class="btn btnPersonalizado" to="/cart">Terminar compra</Link>
            :<ItemCount stock={product.stock} initial={initial} onAdd={onAdd} />
          
          }

        </div>

      </div>
    </>
  );
};

export default ItemDetail;
