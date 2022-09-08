import React, { useContext, useState } from "react";
import { myContext } from "./CartContext";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Cart = () => {
   let { carrito, setCarrito, removeItem } = useContext(myContext);
   const [name, setName] = useState("");
   const [tel, setTel] = useState("");
   const [email, setEmail] = useState("");
   const [idOrder, setIdOrder] = useState("");

   const terminarcompra = (e) => {
      e.preventDefault();

      if (name === "" || tel === "" || email === "") {
      } else {
         const total = () => {
            let counter = 0;
            for (let index = 0; index < carrito.length; index++) {
               counter = carrito[index].cantidad + counter;
            }
            return counter;
         };

         const order = {
            buyer: { name, tel, email },
            items: { carrito, total: total()},
         };

         const db = getFirestore();
         const refCollection = collection(db, "orders");
         addDoc(refCollection, order).then((res) => {
            setIdOrder(res.id);
            setName("");
            setTel("");
            setEmail("");
           });
         setTimeout(() => {

            setCarrito([]);
            setIdOrder("");
         }, 5000);
      }
   };
   const total = () => {
      let totalcounter = 0;

      for (let index = 0; index < carrito.length; index++) {
         totalcounter = (carrito[index].cantidad*carrito[index].precio) + totalcounter;
      }
      return totalcounter;
   };
   const deleteProduct = (product) => {

      let nuevo = carrito.map((products) => {
         if (product == products.id) {
            if (products.cantidad == 0) {
               return products;
            } else {
               products.cantidad = products.cantidad - 1;
               return products;
            }
         } else {
            return products;
         }
      });
      setCarrito(nuevo);

   };
   return (
      <div className="carritoCompra">
         {carrito.length == 0 ? (
            <>
               <h3>No hay productos en su carrito</h3>
               <Link to="/">
                  <button className="btn btnPersonalizado">
                     Ver productos
                  </button>
               </Link>
            </>
         ) : (
            <>
               {carrito.map((products, index) => {
                  return (
                     <>
                        <>
                           <h4 key={`Product${index}`}>
                              {products.cantidad == 0 ? (
                                 removeItem(products.id)
                              ) : (
                                 <>
                                    <div className="productList">
                                       <h3 className="productsList">Producto: {products.titulo}</h3>
                                       <h3 className="productsList">Cantidad: {products.cantidad + " "}</h3>
                                       <h3 className="productsList">Precio: {products.precio * products.cantidad}$</h3>
                                       <button onClick={() => {deleteProduct(products.id);}} className="btn btnPersonalizado">Eliminar producto</button>
                                    </div>
                                 </>
                              )}
                           </h4>
                        </>
                     </>
                  );
               })}
               {

               }
               <h4>Total de la compra : {total()}$</h4>
               <form onSubmit={terminarcompra} className="form">
                  <input
                     className="formcelds"
                     type={"text"}
                     placeholder="Nombre"
                     value={name}
                     onChange={(e) => setName(e.target.value.trim())}
                     required
                  />
                  <input
                     className="formcelds"
                     type={"tel"}
                     placeholder="Celular"
                     value={tel}
                     onChange={(e) => setTel(e.target.value.trim())}
                     required
                  />
                  <input
                     className="formcelds"
                     type={"email"}
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value.trim())}
                     required
                  />
                  {name != "" && tel != "" && email != "" && (
                     <button type="submit" class="btn btnPersonalizado">
                        Terminar Compra
                     </button>
                  )}
                  <h4>Id de tu compra: {idOrder}</h4>
               </form>
            </>
         )}
      </div>
   );
};
export default Cart;
