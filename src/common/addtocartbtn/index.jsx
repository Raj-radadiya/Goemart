import React from 'react';
import './addtoCart.scss';
import CountIncrease from '../increseCount';

export default function AddToCartBtn({ backgroundColor, color, className, className2, onclick, count }) {
  const addItems = () => {
    window.confirm('are you sure this item added to cart?');
  }
  return (
    <div className={`addtoCartBtn ${className}`} onClick={addItems} >
      <button className="addToCart" aria-label="Add to cart" style={{ backgroundColor: backgroundColor, color: color }}>
        <i className="fa-solid fa-bag-shopping"></i>
      </button>
      <div className={`addToCartText ${className2}`}>
        <p>add to cart</p>
      </div>
      <div className={`count ${count}`}>
        <CountIncrease cartItems={onclick} />
      </div>
    </div>
  );
}