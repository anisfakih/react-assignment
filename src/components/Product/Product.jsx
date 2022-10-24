import React from "react";
import "./Product.css";

const Product = ({ image, title, description, price, rate }) => {
  return (
    <>
      <div className="product">
        <div className="product__image">
          <img src={image} alt="" />
        </div>
        <div className="product__info">
          <p className="info__name">{title}</p>
          <p className="info__description">{description}</p>
          <p className="info__price">{price}</p>
          <div className="info__rating">
            {Array(rate)
              .fill()

              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
