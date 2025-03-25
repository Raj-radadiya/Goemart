import React from 'react';
import { FaHeart } from "react-icons/fa6";
import './wishlist.scss';

const Wishlist = ({ variant = 'icon' }) => {
  const handleClick = () => {
    // Add wishlist functionality here
    console.log('Added to wishlist');
  };

  if (variant === 'details') {
    return (
      <div className="wishlist">
        <div className="cardWishlist">
          <FaHeart className='cardViewEye' />
        </div>
        <div className='quickViewText'>Add to Wishlist</div>
      </div>
    );
  }

  return (
    <div>
      <div className="quickView">
        <div className="cardViewImg">
          <FaHeart className='cardViewEye' />
        </div>
        <div className='quickViewText'>Add to Wishlist</div>
      </div>
    </div>
  );
};

export default Wishlist;
