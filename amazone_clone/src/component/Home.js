import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* product, title, image, rating */}
      <div className="home__row">
        <Product
          id="0213"
          title="Apple debuts iPhone 14 Pro and iPhone 14 Pro Max"
          price={1500000}
          rating={5}
          image="https://www.bdprice.com.bd/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max-Space-Black-price-in-Bangladesh.jpg"
        />
        <Product
          id="0214"
          title="Samsung Galaxy S22 "
          price={75000}
          rating={5}
          image="https://mobilemall.pk/public_html/images/product/product_1644494008FLRC-214-B0-SkyBlue-01-PDP-GALLERY-1600x1200.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0215"
          title="Apple MacBook Pro 13-inch"
          price={170000}
          rating={5}
          image="https://mcsolution.com.bd/wp-content/uploads/2021/03/Apple-MacBook-Pro-i5-Processor-8GB-Ram.jpg"
        />
        <Product
          id="0216"
          title="Wale Clock"
          price={10000}
          rating={4}
          image="https://m.media-amazon.com/images/I/81nUFx9sXoL._AC_SL1500_.jpg"
        />
        <Product
          id="0217"
          title="BMW K1300R [Dhoom 3 Bike]"
          price={200000}
          rating={5}
          image="https://ic1.maxabout.us/autos/tw_india//D/2021/3/dhoom-3-bike-bmw-k1300r.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0218"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={100998}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
