import React from "react";
import Item from "./Item";


const ItemList = ({ products }) => {

  return (
    <>
      
      {products.map((producto, i) => (
        <Item
          key={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          precio={producto.precio}
          stock={producto.stock}
          imagen={producto.imagen}
        />
      ))}
    </>
  );
};

export default ItemList;

