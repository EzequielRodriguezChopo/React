import React from "react";
import { useState, useEffect } from "react";
import imagen1 from "../images/medialuna.png";
import imagen2 from "../images/bizcochos.jpeg";
import imagen3 from "../images/chipa.jpeg";
import imagen4 from "../images/torta.jpg";
import imagen5 from "../images/cremona.jpeg";
import imagen6 from "../images/facturas.jpg";
import imagen7 from "../images/sanguchesDeMiga.jpeg";
import imagen8 from "../images/pastafrola.jpg";
import imagen9 from "../images/tortaDeRicota.jpg";
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
            descripcion: "Son panes con masa enriquecida con huevo y mantequilla, en este caso el uso de una mantequilla de excelente sabor y hecha con cuidado es fundamental para el resultado final",
            precio: "60$",
            imagen: imagen1, stock: "6"
         },
         {
            id: 2,
            titulo: "Biscochitos",
            descripcion:
               "Estos bizcochos se elaboran mezclando ingredientes como huevos, harina, leche, manteca y azúcar y cociendo la mezcla en un horno",
            precio: "80$",
            imagen: imagen2, stock: "6"
         },
         {
            id: 3,
            titulo: "Chipacitos",
            descripcion: "Preparado ancestral, un pan elaborado con almidón de mandioca (yuca), huevos y mucho queso, tradicional de la cultura guaraní y popular en Argentina, Paraguay y Brasil.",
            precio: "90$",
            imagen: imagen3, stock: "6"
         },
         {
            id: 4,
            titulo: "Torta",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen4, stock: "6"
         },
         {
            id: 5,
            titulo: "Cremona",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen5, stock: "6"
         },
         {
            id: 6,
            titulo: "Facturas",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen6, stock: "6"
         },
         {
            id: 7,
            titulo: "Sanguches de miga",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen7, stock: "6"
         },
         {
            id: 8,
            titulo: "Pasta frola",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen8, stock: "6"
         },
         {
            id: 9,
            titulo: "Torta de ricota",
            descripcion: "Pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenadas y decoradas con crema (pastelera, trufa, nata), fruta, chocolate u otros ingredientes.",
            precio: "100$",
            imagen: imagen9, stock: "6"
         }
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
