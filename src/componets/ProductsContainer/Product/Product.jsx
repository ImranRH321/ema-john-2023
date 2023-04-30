import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const {
    category,
    id,
    img,
    name,
    price,
    quantity,
    ratingsCount,
    ratings,
    seller,
    shipping,
    stock,
  } = product;
  return (
    <div className="single_product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>quantity: {quantity}</h4>
      <p> seller:{seller}</p>
      <p>ratings: {ratings}</p>
      <div className="btn-grope">
        <button>click</button>
        <span>one click</span>
      </div>
    </div>
  );
};

export default Product;
