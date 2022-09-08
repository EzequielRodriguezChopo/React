import React, { useContext } from "react";
import medialuna from "../images/medialunas.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { myContext } from "../CartContext";

const NavBar = () => {
   const { carrito } = useContext(myContext);
   const total = () => {
      let count = 0;
      carrito.forEach((products) => {
         count = count + products.cantidad;
      });
      return count;
   };
   return (
      <>
         <nav className="fondonav">
            <ul className="cartPosition nav col-12 my-2 my-md-0 textsmall fondonav">
               <ul className="nav">
                  <li className="btn nav-link colorBoton degrade margin">
                     <img src={medialuna} alt="" width="40" height="40" />
                  </li>
                  <li className="btn nav-link colorBoton degrade margin">
                     <Link className="colorLink" to="/">Inicio</Link>
                  </li>
                  <li className="btn nav-link colorBoton degrade margin">
                     <Link className="colorLink" to="/category/ConTacc">Con Tacc</Link>
                  </li>
                  <li className="btn nav-link colorBoton degrade margin">
                     <Link className="colorLink" to="/category/SinTacc"> Sin Tacc</Link>
                  </li>
                  <li className="btn nav-link colorBoton degrade margin">
                     <Link className="colorLink" to="/cart">Cart{" "}</Link>
                  </li>
                  <li className="btn nav-link colorBoton degrade margin">
                     <img src={medialuna} alt="" width="40" height="40" />
                  </li>
               </ul>
               <Link to="/cart">
                  {total() == 0 ? (
                     ""
                  ) : (
                     <>
                        <a href="" className="toTheEnd ">
                           <CartWidget />

                           <div className="cartNumber"> {total()}</div>
                        </a>
                     </>
                  )}
               </Link>
            </ul>
         </nav>
      </>
   );
};
export default NavBar;
