import React from "react";
import facebook from "./images/Facebook.png";
import twitter from "./images/Twitter.png";
import instagram from "./images/Instagram.png";
import icono from "./images/Icono.jpg";
function Header() {
   return (
      <>
         <header>
            <div className="px-5 py-2 fondoHeader">
               <div className="container alineacionHeader">
                  <div className="textoAnimado">
                     <img src={icono} alt="Icono pantalla principal de Los Abuelos" className="icono"/>
                  </div>
                  <h1 className="textheader">Los Abuelos</h1>
                  <section className="iconosAnimados">
                     <img src={facebook} alt="Icono Facebook" className="redes"/>
                     <img src={instagram} alt="Icono Instagram" className="redes"/>
                     <img src={twitter} alt="Icono Twitter" className="redes" />
                  </section>
               </div>
            </div>
         </header>
      </>
   );
}

export default Header;
