import React from "react";
import { createContext, useState } from "react";

export const myContext = createContext();

const CartContext = ({ children }) => {
   const [carrito, setCarrito] = useState([]);
 
   const addItem = (product, cantidad) => {
  
       if (carrito.find(producto=>producto.id==product.id)) {
         setCarrito(carrito.map(producto => {
            return producto.id == product.id ? { ...producto, cantidad: (producto.cantidad + cantidad) }: producto;})
      );
      alert('Esta en el carrito')
         
      } else {
         setCarrito([...carrito, { ...product, cantidad:cantidad }]);
      alert('No esta en el carrito')
      }

console.log('carrito',carrito);

   };

   const removeItem = (id) => {
      //Remueve el item del carrito segun su id
      setCarrito(carrito.filter((product) => product.id !== id));
      console.log(carrito);
   };

   const isInCart = (id) => {
      //Para saber si el producto ya esta en carrito
      carrito.find(producto => producto.id === id)? true : false;
   };

   const clear = () => {
      //Funcion que borra todo el carrito
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
