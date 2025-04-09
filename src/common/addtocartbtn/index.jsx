import React from 'react';
import './addtoCart.scss';
import CountIncrease from '../increseCount';

export default function AddToCartBtn({ backgroundColor, color, className, className2, count, addItems }) {
  return (
    <div className={`addtoCartBtn ${className}`} >
      <button className="addToCart" aria-label="Add to cart" style={{ backgroundColor: backgroundColor, color: color }}>
        <i className="fa-solid fa-bag-shopping"></i>
      </button>
      <div className={`addToCartText ${className2}`}>
        <p>add to cart</p>
      </div>
      <div className={`count ${count}`}>
        <CountIncrease />
      </div>
    </div>
  );
}