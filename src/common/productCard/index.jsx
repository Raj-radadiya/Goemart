import React from "react";
import "./productCard.scss";
import ProductLabel from "../../components/ProductLabel";
import CardHoverComp from "../cardHoverComp";
import { useNavigate } from "react-router";
import RatingStars from "../../components/star";
import AddToCartBtn from "../addtocartbtn";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    console.log("Clicking product:", productId);
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };
  return (
    <>
      <div
        key={product.id}
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

