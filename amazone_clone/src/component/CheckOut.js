import React from "react";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  // props with useStatevalue
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {/*  checkout page add  */}
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {/*  basket full or empty logic use ternary operator */}
        {basket?.length === 0 ? (
          <div>
            <h2>Empty Basket</h2>
            <p>
              You have no items in your basket. To buy one or "Add To Basket"
              next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Shopping Basket</h2>
            {/* list out all of the items in the basket */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {
        <div className="checkout__right">
          <Subtotal />
        </div>
      }
    </div>
  );
};

export default CheckOut;
