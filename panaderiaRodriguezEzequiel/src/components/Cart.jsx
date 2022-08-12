import React, {useContext} from "react";
import { myContext } from "./CartContext";

const Cart = () => {

  const {countItems} = useContext(myContext) 
  let numero=9 
  return (
    <div >
      {countItems(numero)} 
        <h2>Soy en carrito</h2>
    </div>
 );
};
export default Cart;
 