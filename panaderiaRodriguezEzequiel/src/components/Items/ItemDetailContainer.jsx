import React from "react";
import { useState, useEffect } from "react";
import imagen1 from "../images/medialuna.png";
import imagen2 from "../images/bizcochos.jpeg";
import imagen3 from "../images/chipa.jpeg";
import imagen4 from "../images/pastafrola.jpg";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
   const [product, setProduct] = useState([]);
   const [error, setError] = useState(false);
   const { id } = useParams();
   useEffect(() => {
      let productosHarcodeados = [
         {
            id: 1,
            titulo: "Medialunas",
            descripcion: "s son panes con masa enriquecida con huevo y mantequilla, en este caso el uso de una mantequilla de excelente sabor y hecha con cuidado es fundamental para el resultado final",
            precio: "60$",
            stock: "6",
            imagen: imagen1,
         },
         {
            id: 2,
            titulo: "Biscochitos",
            descripcion:
               "Estos bizcochos se elaboran mezclando ingredientes como huevos, harina, leche, manteca y azúcar y cociendo la mezcla en un horno",
            precio: "80$",
            stock: "7",
            imagen: imagen2,
         },
         {
            id: 3,
            titulo: "Chipacitos",
            descripcion: "Preparado ancestral, un pan elaborado con almidón de mandioca (yuca), huevos y mucho queso, tradicional de la cultura guaraní y popular en Argentina, Paraguay y Brasil.",
            precio: "90$",
            stock: "4",
            imagen: imagen3,
         },
         {
            id: 4,
            titulo: "Torta",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            stock: "5",
            imagen: imagen4,
         },
      ];
      const miPromesa = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(productosHarcodeados.find((e) => e.id == id));
         }, 2000);
      });

      miPromesa
         .then((res) => {
            //Aca es cuando se cumple mi promesa, manda los productos a render
            setProduct(res);
         })
         .catch((error) => {
            setError(true);
         });
   }, []);

   return (
      <>
         <ItemDetail product={product} />
      </>
   );
};

export default ItemDetailContainer;
