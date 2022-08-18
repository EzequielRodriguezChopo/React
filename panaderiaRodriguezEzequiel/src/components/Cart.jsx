import React, { useContext } from "react";
import { myContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
   let { carrito,setCarrito,removeItem } = useContext(myContext);
   console.log(carrito);
   const deleteProduct = (product) =>{
      console.log(carrito);
      let nuevo = carrito.map((products)=>{
         if(product==products.id){
            if(products.cantidad ==0){
               return products 
            }else{
            products.cantidad=products.cantidad - 1
            return products}
         }else{
            return products
         }
      })
      setCarrito(nuevo)
      console.log(carrito);

   }
   return (
      <div>
         {carrito.length == 0 ? (
            <>
               <h3>No hay Items en su carrito</h3>
               <Link to="/">
                  <div class="btn btnPersonalizado">Ver productos</div>
               </Link>
            </>
         ) : (
            carrito.map((products) => {
               return (
                  <h4>{products.cantidad==0?(removeItem(products.id)):(<>                     {products.titulo} {products.cantidad + ' '}  
                  Precio total : {products.precio * products.cantidad}$
                  <button onClick={()=>{deleteProduct(products.id)}} class="btn btnPersonalizado">Eliminar producto</button></>)}

                  </h4>
               );
            })
         )}
      </div>
   );
};
export default Cart;
