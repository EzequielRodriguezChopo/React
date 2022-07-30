import React from "react";
import medialuna from "../images/medialuna.jpg"
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
   
    <div class="estiloNavAlinear">
      <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
      <button class="btn btnPersonalizado" type="submit"> Inicio </button>
      <button class="btn btnPersonalizado" >Productos</button>
      <button class="btn btnPersonalizado" >Nosotros</button>
      <button class="btn btnPersonalizado" >Contacto</button>
      <button class="btn btnPersonalizado" type="submit"> Login </button>
      <img src={medialuna} alt="" width="40" height="30" class="d-inline-block "/>
      <CartWidget/>
    </div>
  );
};
export default NavBar;
