import React, { useContext } from "react";
import medialuna from "../images/medialuna.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { myContext } from "../CartContext";

const NavBar = () => {
   const { carrito } = useContext(myContext);
   
   const total = () => {
      let count=0;
      carrito.forEach(products => {
         count = count + products.cantidad
      });
      return count
   };
   return (
      <div className="estiloNavAlinear">
         <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
         <Link class="btn btnPersonalizado" to="/"> Inicio </Link>
         <Link class="btn btnPersonalizado" to="/category/ConTacc"> Con Tacc </Link>
         <Link class="btn btnPersonalizado" to="/category/SinTacc"> Sin Tacc </Link>
         <Link class="btn btnPersonalizado" to="/cart"> Cart </Link>
         <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
         <Link to="/cart">
            {total()==0?'':
            (<>
            <CartWidget  />
            {total()}
            </>
            )}

         </Link>
      </div>
   );
};
export default NavBar;
