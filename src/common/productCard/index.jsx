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
          <ProductLabel stock={product.stock} />
          <div className="productImg" onClick={() => handleProductClick(product.id)}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="productMore">
            <CardHoverComp product={product} />
          </div>
        </div>
        <div onClick={() => handleProductClick(product.id)}>
          <div className="productName" >
            <p>{product.title}</p>
          </div>
          <div className="productRating">
            <RatingStars rating={product.rating} />
          </div>
          <div className="productPriceCart">
            <div className="productCart" >
              <AddToCartBtn />
            </div>
            <div className="productPrice">
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}