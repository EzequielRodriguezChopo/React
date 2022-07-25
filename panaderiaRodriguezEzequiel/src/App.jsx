import { useState } from "react";
import "./App.css";
import ItenListContainer from "./components/NavBar/ItenListContainer";
import NavBar from "./components/NavBar/NavBar";
import medialuna from "./components/images/medialuna.jpg"
import imagen1 from "./components/images/medialuna.png"
import imagen2 from "./components/images/bizcochos.jpeg"
import imagen3 from "./components/images/chipa.jpeg"
import imagen4 from "./components/images/pastafrola.jpg"

function App() {

  return (
    <div>
      <NavBar />
      <div class="alineacionItems">
        <ItenListContainer imagen={imagen1}  titulo="Medialunas" descripcion="Estan hechas sin Tacc" precio="60$"/>
        <ItenListContainer imagen={imagen2} titulo="Biscochitos" descripcion="Estan hechas con grasa" precio="80$"/>
        <ItenListContainer imagen={imagen3} titulo="Vigilantes" descripcion="Son Ligth" precio="90$"/>
        <ItenListContainer imagen={imagen4} titulo="Pepas" descripcion="Poseen dulce de Batata" precio="100$"/>
      </div>
    </div>
  );
}

export default App;
