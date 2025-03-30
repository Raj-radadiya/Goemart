import React from "react";
import "./productCard.scss";
import ProductLabel from "../../components/ProductLabel";
import CardHoverComp from "../cardHoverComp";
import { Navigate } from "react-router";
import RatingStars from "../../components/star";
import AddToCartBtn from "../addtocartbtn";

export default function ProductCard(el) {
  const handleProductClick = (productId) => {
    console.log("Clicking product:", productId); // Debug log
    if (productId) {
      Navigate(`/product/${productId}`);
    }
  };
  return (
    <>
      <div
        key={el.product.id}
        className="productCard"
      >
        <div className="productImgAndMore">
          <ProductLabel stock={el.product.stock} isNew={!el.product.isLowStock && !el.product.isOutOfStock} />
          <div className="productImg" onClick={() => handleProductClick(el.product.id)}>
            <img src={el.product.thumbnail} alt={el.product.title} />
          </div>
          <div className="productMore">
            <CardHoverComp product={el.product} />
          </div>
        </div>
        <div onClick={() => handleProductClick(el.product.id)}>
          <div className="productName" >
            <p>{el.product.title}</p>
          </div>
          <div className="productRating">
            <RatingStars rating={el.product.rating} />
          </div>
          <div className="productPriceCart">
            <div className="productCart" >
              <AddToCartBtn />
            </div>
            <div className="productPrice">
              <span>${el.product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

