import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import imagen1 from "../images/medialuna.png";
import imagen2 from "../images/bizcochos.jpeg";
import imagen3 from "../images/chipa.jpeg";
import imagen4 from "../images/pastafrola.jpg";

const lecturaBaseDeDatos=true 

const ItenListContainer = () => {
  const [initial, setInitial] = useState(1);
  const onAdd = () => {
    alert("Agregaste un producto exitosamente")
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {

    let productosHarcodeados =[
    {
      id: 1, titulo: "Medialunas", descripcion: "Estan hechas sin Tacc", precio: "60$", stock: "6", imagen: imagen1,
    },
    {
      id: 2, titulo: "Biscochitos", descripcion: "Estan hechas con grasa", precio: "80$", stock: "7", imagen: imagen2,
    },
    {
      id: 3, titulo: "Chipacitos", descripcion: "Son Ligth", precio: "90$", stock: "4", imagen: imagen3,
    },
    {
      id: 4, titulo: "Torta", descripcion: "De dulce de Batata", precio: "100$", stock: "5", imagen: imagen4,
    }];

    const miPromesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(lecturaBaseDeDatos){
            resolve(productosHarcodeados)
          }else{
            reject("No se pudo leer la base de datos")
          }
        },3000)
      })
     
    miPromesa.then((res)=>{   //Aca es cuando se cumple mi promesa, manda los productos a render
      setProducts(res)
    });
  },[])

  return (
    <>
      <ItemList products={products} initial={initial} onAdd={onAdd}/>
    </>
  );
};

export default ItenListContainer; 
