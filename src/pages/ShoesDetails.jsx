// import React from "react";
import "../assets/styles/ShoesDetails.css";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';

const ShoesDetails = () => {
  const { id } = useParams();


  const [quantity, setQuantity] = useState(1); // State for quantity

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle "Add to Cart"
  // const handleAddToCart = () => {
  //   alert(`Added ${quantity} ${product.name}(s) to cart!`);
    // You can replace this with actual cart logic (e.g., Redux, Context API, etc.)



  return (
    <>
      <h1>Shoes Details</h1>
      <div className="product-details">
      <div className="product-image">
        <img src="" alt={"img not available"} />
      </div>
      <div className="product-info">
        <h1 className="product-name">Shoe name {id}</h1>
        <p className="product-price">Price</p>

        {/* Quantity adjustment buttons */}
        <div className="quantity-control">
          <button onClick={decreaseQuantity} className="quantity-btn">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-btn">+</button>
        </div>

        {/* Add to Cart button */}
        {/* onClick={handleAddToCart}  */}
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
};

export default ShoesDetails;
