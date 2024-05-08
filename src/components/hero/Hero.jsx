import React from "react";
import "./hero.scss";
import { productData } from "../../static/productData/";
import ProductCard from "../productCard/ProductCard";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="products__cards">
        {productData.map((el) => (
          <ProductCard {...el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
