import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, handleAddToCart }) => {
  //   console.log(product);
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

  //   click btn

  return (
    <div className="single_product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h3>Price: ${price}</h3>
      <h4>quantity: {quantity}</h4>
      <p> Manufacture:{seller}</p>
      <p>rating: {ratings}</p>
      <button onClick={() => handleAddToCart(product)} className="btn-add">
        addToCart

        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
