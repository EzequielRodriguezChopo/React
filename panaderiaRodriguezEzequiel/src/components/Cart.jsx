import React, { useContext, useState } from "react";
import { myContext } from "./CartContext";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore, addDoc, doc, updateDoc} from "firebase/firestore";

const Cart = () => {
   let { carrito,setCarrito,removeItem } = useContext(myContext);
   const [name, setName] = useState("");
   const [tel, setTel] = useState("");
   const [email, setEmail] = useState("");
   const [idOrder, setIdOrder] = useState("");

console.log(carrito);
   const terminarcompra = () => {

      const total=()=>{
         return 25

      }

      const order = {
         buyer: { name, tel, email },
         items: {carrito,total: total()}
         //setCarrito([...carrito, { ...product, cantidad:cantidad }]);
      };
      const db = getFirestore();
      const refCollection = collection(db, "orders");
      addDoc(refCollection, order).then((res) => {
         setIdOrder(res.id);
      });
   };

   const deleteProduct = (product) =>{
      console.log(carrito);
      let nuevo = carrito.map((products)=>{
         if(product==products.id){
            if(products.cantidad ==0){
               return products 
            }else{
            products.cantidad=products.cantidad - 1
            return products}
         }else{
            return products
         }
      })
      setCarrito(nuevo)
      console.log(carrito);

   }
   return (
      <div>
         {carrito.length == 0 ? (
            <>
               <h3>No hay Items en su carrito</h3>
               <Link to="/">
                  <div class="btn btnPersonalizado">Ver productos</div>
               </Link>
            </>
         ) : (
            carrito.map((products) => {
               return ( <>
                  <h4>{products.cantidad==0?(removeItem(products.id)):(<>                     {products.titulo} {products.cantidad + ' '}  
                  Precio total : {products.precio * products.cantidad}$
                  <button onClick={()=>{deleteProduct(products.id)}} class="btn btnPersonalizado">Eliminar producto</button></>)}

                  </h4>

                        </>
               );
            })
         )}
                                   
                                   <br />
                           <br />
                           <input type={"text"} placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                           <br />
                           <br />
                           <input type={"tel"} placeholder="Celular" value={tel} onChange={(e) => setTel(e.target.value)}/> 
                           <br />
                           <br />
                           <input type={"email"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                           <br />
                           <br />
                           <button onClick={terminarcompra}>Terminar Compra</button>
                           <br />
                           <br />
                           <p>Id de tu compra {idOrder}</p>
      </div>
   );
};
export default Cart;
