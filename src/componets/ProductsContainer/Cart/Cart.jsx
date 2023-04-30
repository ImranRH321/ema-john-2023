import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log("cart data ", cart);
  let totalPrice = 0;
  let totalShipping = 0;
  console.log(cart.quantity,'lnew');
  for (const product of cart) {
    //  console.log(product.shipping);
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Order Summary</h5>
      <p>
        Selected Items: {cart.quantity ? cart.quantity : "no Quanity found"}
      </p>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
