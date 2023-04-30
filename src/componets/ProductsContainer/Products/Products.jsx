import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

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
          product all {products.length}
          <div className="load-products">
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </h5>
      </div>
      <div className="cart">
        <h5>Order summary</h5>
      </div>
    </div>
  );
};

export default Products;
