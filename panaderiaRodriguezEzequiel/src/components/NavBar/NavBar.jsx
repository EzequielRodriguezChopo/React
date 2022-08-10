import React from "react";
import medialuna from "../images/medialuna.jpg"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="estiloNavAlinear">
       <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
       <Link class="btn btnPersonalizado" to="/">Inicio</Link>
       <Link class="btn btnPersonalizado" to="/category/ConTacc">Con Tacc</Link>
       <Link class="btn btnPersonalizado" to="/category/SinTacc">Sin Tacc</Link>
       <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
       <CartWidget />
    </div>
 );
};
export default NavBar;
