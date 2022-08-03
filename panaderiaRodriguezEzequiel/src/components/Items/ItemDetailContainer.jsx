import React from "react";
import { useState, useEffect } from "react";
import imagen1 from "../images/medialuna.png";
import imagen2 from "../images/bizcochos.jpeg";
import imagen3 from "../images/chipa.jpeg";
import imagen4 from "../images/pastafrola.jpg";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [error,setError]=useState(false)
    useEffect(() => {
      let productosHarcodeados =[
      {
        id: 1, titulo: "Medialunas", descripcion: "Estan hechas sin Tacc", precio: "60$", stock: "6", imagen: imagen1,
      },
      {
        id: 2, titulo: "Biscochitos", descripcion: "Estos bizcochos se elaboran mezclando ingredientes como huevos, harina, leche, manteca y azúcar y cociendo la mezcla en un horno", precio: "80$", stock: "7", imagen: imagen2,
      },
      {
        id: 3, titulo: "Chipacitos", descripcion: "Son Ligth", precio: "90$", stock: "4", imagen: imagen3,
      },
      {
        id: 4, titulo: "Torta", descripcion: "De dulce de Batata", precio: "100$", stock: "5", imagen: imagen4,
      }];
  
      const idProducto=2;
      const miPromesa = new Promise((resolve,reject)=>{
          setTimeout(()=>{

              resolve(productosHarcodeados.find((e)=> e.id==idProducto))
          },2000)
        })
       
      miPromesa.then((res)=>{   //Aca es cuando se cumple mi promesa, manda los productos a render
        setProduct(res)
      })
      .catch((error)=>{
        setError(true)
      })
    },[])
  
    return (
      <>
        <ItemDetail product={product} />
      </>
    );
  };
  
 
export default ItemDetailContainer



