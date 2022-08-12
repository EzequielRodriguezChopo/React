import React from "react";
import { createContext, useState } from "react";
import ItemCount from "./Items/ItemCount";

export const myContext = createContext();

const CartContext = ({ children }) => {
   const [carrito, setCarrito] = useState([]);
   const [count, setCount] = useState(0)
   let arrayCopia = [...carrito];

   const addItem = (obj, count) => {
    const nuevoCarrito = carrito.filter(product => product.id !== item.id);
    nuevoCarrito.push({...obj, cantidad: nuevaCantidad});
    setCarrito(nuevoCarrito)

   };

   const removeItem = (id) =>{          //Remueve el item del carrito segun su id
    setCarrito(carrito.filter(product => product.id !== id ))
   }

   const countItems = (count) =>{
       return count
   }

   const isInCart = (id) => {           //Para saber si el producto ya esta en carrito
    const found = arrayCopia.find((id) => (id.arrayCopia = id));
    if (found) return true;
    return false;
 };
   
   const clear = () =>{         //Funcion que borra todo el carrito
    setCarrito([]);
   }

   return (
      <>
         <myContext.Provider value={{ carrito, addItem , countItems, removeItem, isInCart, clear}}>
            <div>{children}</div>
         </myContext.Provider>
      </>
   );
};

export default CartContext;
