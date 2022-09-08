import React from "react";
import { createContext, useState } from "react";
export const myContext = createContext();

const CartContext = ({ children }) => {
   const [carrito, setCarrito] = useState([]);
   const addItem = (product, cantidad) => {
      if (carrito.find((producto) => producto.id == product.id)) {
         setCarrito(
            carrito.map((producto) => {
               return producto.id == product.id
                  ? { ...producto, cantidad: producto.cantidad + cantidad }
                  : producto;
            })
         );
      } else {
         setCarrito([...carrito, { ...product, cantidad: cantidad }]);
      }
      
   };
   const removeItem = (id) => {
      setCarrito(carrito.filter((product) => product.id !== id));
   };
   const isInCart = (id) => {
      carrito.find((producto) => producto.id === id) ? true : false;
   };
   const clear = () => {
      setCarrito([]);
   };
   return (
      <>
         <myContext.Provider
            value={{
               carrito,
               setCarrito,
               addItem,
               removeItem,
               isInCart,
               clear,
            }}
         >
         <div>{children}</div>
         </myContext.Provider>
      </>
   );
};

export default CartContext;
