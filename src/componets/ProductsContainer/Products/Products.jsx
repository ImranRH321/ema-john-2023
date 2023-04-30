import React, { useEffect, useState } from "react"; 

import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // button click parent container data child components
  const handleAddToCart = (product) => {
  const newCart = [...cart, product]
    setCart(newCart);
  };
 
  console.log("cart", cart);

  return (
    <div className="products_container">
      <div className="products">
        <h5>
          product all {products.length}
          <div className="load-products">
            {products?.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
        </h5>
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
