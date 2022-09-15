import React from "react";
import "./Product.css";

const Product = ({ id, title, image, rating, price }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Tk </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p> * </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Order Now</button>
    </div>
  );
};

export default Product;
