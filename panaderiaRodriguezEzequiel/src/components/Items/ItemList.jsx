import React from "react";
import Item from "./Item";


const ItemList = ({ products, initial, onAdd }) => {

  return (
    <> 
      
      {products.map((producto) => (
        <Item
          key={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          precio={producto.precio}
          stock={producto.stock}
          imagen={producto.imagen}
          initial={initial}
          onAdd={onAdd}
        /> 
      ))}
    </>
  );
};

export default ItemList; 

