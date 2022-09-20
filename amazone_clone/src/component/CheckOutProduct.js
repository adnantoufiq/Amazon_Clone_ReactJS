import React from "react";
import "./CheckOutProduct";

const CheckOutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="checkOutProduct">
      <img className="checkOutProduct__image" src={image} alt="" />
      <div className="checkOutProduct__info">
        <p className="checkOutProduct__title">{title}</p>
        <p className="checkOutProduct__price">
          <small>Tk</small>
          <strong>{price}</strong>
        </p>

        <div className="checkOutProduct__rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
