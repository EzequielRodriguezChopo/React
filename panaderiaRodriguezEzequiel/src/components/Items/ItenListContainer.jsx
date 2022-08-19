import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
//import imagen1 from "../images/medialuna.png";
//import imagen2 from "../images/bizcochos.jpeg";
//import imagen3 from "../images/chipa.jpeg";
//import imagen4 from "../images/torta.jpg";
//import imagen5 from "../images/cremona.jpeg";
//import imagen6 from "../images/facturas.jpg";
//import imagen7 from "../images/sanguchesDeMiga.jpeg";
//import imagen8 from "../images/pastafrola.jpg";
//import imagen9 from "../images/tortaDeRicota.jpg";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItenListContainer = () => {
  const [initial, setInitial] = useState(1);
  const { id } = useParams();
  const onAdd = () => {
    alert("Agregaste un producto exitosamente")
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {

    const db = getFirestore();
    const collectionProducts = collection(db,"productos")
    getDocs(collectionProducts).then((res)=>{

        let productsOrdened = res.docs;
        productsOrdened = productsOrdened.map((producto)=>{
            return({id:producto.id,...producto.data()})
        })  
        if (!id) {
          setProducts(productsOrdened); 
       } else {
        setProducts(productsOrdened.filter((producto)=>producto.categoria == id))
       }

    });     
  },[id])

  return (
    <>
         <div className="alineacionItems">
         <ItemList products={products} initial={initial} onAdd={onAdd} />
         </div>
    </>
  );
};

export default ItenListContainer; 
/*

   const db = getFirestore();
      const collectionProducts = collection(db,"productos")
      getDocs(collectionProducts).then((res)=>{
  
          let productsOrdened = res.docs;
          productsOrdened = productsOrdened.map((producto)=>{
              return({id:producto.id,...producto.data()})
          })  
          setProduct(productsOrdened.find((e) => e.id == id))

      });     


    let productosHarcodeados =[
    {id: 1, titulo: "Medialunas", precio: "60", stock: "6", imagen: imagen1, categoria:"SinTacc"},
    {id: 2, titulo: "Biscochitos", precio: "80", stock: "7", imagen: imagen2, categoria:"ConTacc"},
    {id: 3, titulo: "Chipacitos", precio: "90", stock: "4", imagen: imagen3, categoria:"SinTacc"},
    {id: 4, titulo: "Torta", precio: "100", stock: "5", imagen: imagen4, categoria:"SinTacc"},
    {id: 5, titulo: "Cremona", precio: "90", stock: "4", imagen: imagen5, categoria:"ConTacc"},
    {id: 6, titulo: "Facturas", precio: "90", stock: "4", imagen: imagen6, categoria:"SinTacc"},
    {id: 7, titulo: "Sanguches de miga", precio: "90", stock: "4", imagen: imagen7, categoria:"ConTacc"},
    {id: 8, titulo: "Pasta frola", precio: "90", stock: "4", imagen: imagen8, categoria:"SinTacc"},
    {id: 9, titulo: "Torta de ricota", precio: "90", stock: "4", imagen: imagen9, categoria:"ConTacc"},
];

    const miPromesa = new Promise((resolve, reject) => {
      setTimeout(() => { 
         if (lecturaBaseDeDatos) {
            if (!id) {
               resolve(productosHarcodeados); 
            } else {
               resolve(productosHarcodeados.filter((producto)=>producto.categoria == id))
            }
            resolve(productosHarcodeados);
         } else {
            reject("No se pudo leer la base de datos");
         }
        },2000)
      })
     
    miPromesa.then((res)=>{   //Aca es cuando se cumple mi promesa, manda los productos a render
      setProducts(res)
    });

*/