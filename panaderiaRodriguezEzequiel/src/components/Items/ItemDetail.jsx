import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../CartContext";
const ItemDetail = ({ product }) => {
   const [carrito, setCarrito] = useState(false);
   const [initial, setInitial] = useState(1);
   const [count, setCount] = useState(0);
   const { addItem } = useContext(myContext);
   const onAdd = (cantidad) => {
      setCarrito(true);
      setCount(cantidad);
   };

   return (
      <>
         <div className="card2">
            <img src={product.imagen} className="estiloImagen2" />
            <div className="espacio">
               <h4 className="card-title">{product.titulo}</h4>
               <p className="card-text">{product.descripcion}</p>
               <h5 className="card-title">{product.precio}$</h5>
               {carrito ? (
                  <Link to="/cart">
                     <button className="btn btnPersonalizado" onClick={() => {addItem(product, count);}}>Terminar compra</button>
                  </Link>
               ) : (
                  <ItemCount stock={product.stock} initial={initial} onAdd={onAdd}/>
                     )}
            </div>
         </div>
      </>
   );
};

export default ItemDetail;
