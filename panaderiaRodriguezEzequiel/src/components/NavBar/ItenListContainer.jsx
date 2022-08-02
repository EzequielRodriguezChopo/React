import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import imagen1 from "../images/medialuna.png";
import imagen2 from "../images/bizcochos.jpeg";
import imagen3 from "../images/chipa.jpeg";
import imagen4 from "../images/pastafrola.jpg";

const lecturaBaseDeDatos=true

const ItenListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const crearProductos = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(lecturaBaseDeDatos){
            setProducts([
              {
                id: 1,
                titulo: "Medialunas",
                descripcion: "Estan hechas sin Tacc",
                precio: "60$",
                stock: "6",
                imagen: imagen1,
              },
              {
                id: 2,
                titulo: "Biscochitos",
                descripcion: "Estan hechas con grasa",
                precio: "80$",
                stock: "7",
                imagen: imagen2,
              },
              {
                id: 3,
                titulo: "Chipacitos",
                descripcion: "Son Ligth",
                precio: "90$",
                stock: "4",
                imagen: imagen3,
              },
              {
                id: 4,
                titulo: "Torta",
                descripcion: "De dulce de Batata",
                precio: "100$",
                stock: "5",
                imagen: imagen4,
              },
            ]);
            resolve("La promesa se ha cumplido")
          }else{
            reject("No se pudo leer la base de datos")
          }
        },3000)
      })
    }
    
    crearProductos()
    .then((resolve)=>{
      console.log(resolve);
    })
    .catch((reject)=>{
      console.log(reject);
    })
    .finally(()=>{
      console.log("La promesa ha terminado");
    })
  }, []);
  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItenListContainer; 
