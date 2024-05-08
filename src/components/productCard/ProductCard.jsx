import "./productCard.scss";
import star from "../../assets/star.svg";


const ProductCard = ({ name, img, unit, info, size, rating, price }) => {
  return (
    <>
      <div className="product__card">
        <img src={img} alt="" />
        <div className="product__card__info">
          <h2>{name}</h2>
          <h3>
            {size} {unit}
          </h3>
          <p className="product__card__desc">{info}</p>
          <div className="card__rating">
            <h3>{price}</h3>
            <div className="rating">
              {rating} <img src={star} alt="" />
            </div>
          </div>
          <button className="add-btn">Details</button>
        </div>
      </div>
      
    </>
  );
};

export default ProductCard;
