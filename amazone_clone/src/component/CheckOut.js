import React from "react";
import "./CheckOut.css";
import { useStateValue } from "./StateProvider";

const CheckOut = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {/*  checkout page add  */}
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />

      {/*  basket full or empty logic use ternary operator */}
      {basket?.length === 0 ? (
        <div>
          <h2>Empty Basket</h2>
        </div>
      ) : (
        <div>
          <h2>Full Basket</h2>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
