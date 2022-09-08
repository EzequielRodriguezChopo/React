import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItenListContainer = () => {
   const [initial, setInitial] = useState(1);
   const { id } = useParams();
   const onAdd = () => {
      alert("Agregaste un producto exitosamente");
   };
   const [products, setProducts] = useState([]);
   useEffect(() => {
      const db = getFirestore();
      const collectionProducts = collection(db, "productos");
      getDocs(collectionProducts).then((res) => {
         let productsOrdened = res.docs;
         productsOrdened = productsOrdened.map((producto) => {
            return { id: producto.id, ...producto.data() };
         });
         if (!id) {
            setProducts(productsOrdened);
         } else {
            setProducts(
               productsOrdened.filter((producto) => producto.categoria == id)
            );
         }
      });
   }, [id]);

   return (
      <>
         <div className="alineacionItems">
            <ItemList products={products} initial={initial} onAdd={onAdd} />
         </div>
      </>
   );
};

export default ItenListContainer;
