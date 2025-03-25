import React from 'react';
import './addtoCart.scss';

export default function AddToCartBtn() {
  const addItems = () => {
    window.confirm('are you sure this item added to cart?');

  }
  return (
    <div className="addtoCartBtn" onClick={addItems}>
      <button className="addToCart" aria-label="Add to cart">
        <i className="fa-solid fa-bag-shopping"></i>
      </button>
      <div className="addToCartText">
        <p>add to cart</p>
      </div>
    </div>
  );
}
