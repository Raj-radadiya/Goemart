import React, { useContext } from 'react';
import './addtoCart.scss';
import cartContext from '../../configurations/cartContext';


export default function AddToCartBtn({ backgroundColor, color, className, className2, count, addItems }) {
  const { cartItems } = useContext(cartContext);

  return (
    <div className={`addtoCartBtn ${className}`} >
      <button className="addToCart" aria-label="Add to cart" style={{ backgroundColor: backgroundColor, color: color }}>
        <i className="fa-solid fa-bag-shopping"></i>
      </button>
      <div className={`addToCartText ${className2}`}>
        <p>add to cart</p>
      </div>
      <div className={`count ${count}`}>
        {/* <CountIncrease /> */}
        <span className="cart-count">{cartItems.length}</span> {/* 🔥 Cart Count */}

      </div>
    </div>
  );
}