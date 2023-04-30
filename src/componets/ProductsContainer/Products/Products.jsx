import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products_container">
      <div className="products">
        <h5>
          product all <mark>{products.length}</mark>{" "}
        </h5>
      </div>
      <div className="cart">
        <h5>Order summary</h5>
      </div>
    </div>
  );
};

export default Products;
