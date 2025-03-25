import React from "react";
import "./productCard.scss";
import { trandingProduct } from "../../dataset/herobannerSlider";
import AddToCart from "../addtoCart";
import QuickView from "../quickviewDialog";

export default function ProductCard() {
  return (
    <div>
      {trandingProduct.map((el) => (
        <div className="productCard">
          <div className="productImg">
            <img src={el.productImg} alt="" />
          </div>
          <div className="productName">
            <p>{el.productName}</p>
          </div>
          {/* <div className="productRating"></div> */}
          <div className="prodductPriceCart">
            <div className="productPrice">
              <span>{el.productPrice}</span>
            </div>
            <div className="productCart">
              <AddToCart />
            </div>
          </div>
          <div className="quickView">
            <QuickView product={el} />
          </div>
        </div>
      ))}
    </div>
  );
}

