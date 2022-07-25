import React from "react";
import carrito from "../images/carrito.png"
const CartWidget = () => {
  return (
    <>
      <img src={carrito} alt="" width="40" height="40" class="d-inline-block img-thumbnail"/>
    </>
  );
};
export default CartWidget;
