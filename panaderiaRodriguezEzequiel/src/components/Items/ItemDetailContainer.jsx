import React,{ useState, useEffect } from "react";
import {collection,getDocs,getFirestore} from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
   const [product, setProduct] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      const db = getFirestore();
      const collectionProducts = collection(db, "productos");
      getDocs(collectionProducts).then((res) => {
         let productsOrdened = res.docs;
         productsOrdened = productsOrdened.map((producto) => {
            return { id: producto.id, ...producto.data() };
         });
         setProduct(productsOrdened.find((e) => e.id == id));
      });
   }, []);
   return (
      <>
         <ItemDetail product={product} />
      </>
   );
};

export default ItemDetailContainer;
