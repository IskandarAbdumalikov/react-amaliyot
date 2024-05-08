import { Fragment, useState } from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/footer/Footer";
import Module from "./components/modules/Module";
import { productData } from "./static/productData";
import star from "./assets/star.svg";

function App() {
  const [bool, setShowModal] = useState(false);
  let products = productData.slice(0, 4).map((el) => (
    <div className="product__card" key={el.id}>
      <img src={el.img} alt="" />
      <div className="product__card__info">
        <h2>{el.name}</h2>
        <h3>
          {el.size} {el.unit}
        </h3>
        <p className="product__card__desc">{el.info}</p>
        <div className="card__rating">
          <h3>{el.price}</h3>
          <div className="rating">
            {el.rating} <img src={star} alt="" />
          </div>
        </div>
        <button className="add-btn">Details</button>
      </div>
    </div>
  ));
  return (
    <Fragment>
      <Header setShowModal={setShowModal} />
      <main>
        <Hero />
      </main>
      <Footer />
      <Module bool={bool} setShowModal={setShowModal}>
        {products}
      </Module>
    </Fragment>
  );
}

export default App;
