import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa6";
import './wishlist.scss';
import wishlistContext from '../../configurations/wishlistContext';

const Wishlist = ({ variant = 'icon', product }) => {
  const { addToWishlist, wishlistItems } = useContext(wishlistContext);

  const isInWishlist = wishlistItems?.some(item => item.id === product?.id);

  const handleClick = (e) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  if (variant === 'details') {
    return (
      <div className={`wishlist ${isInWishlist ? 'in-wishlist' : ''}`} onClick={handleClick}>
        <div className="cardWishlist">
          <FaHeart className='cardViewEye' />
          <span className="wishlist-text">
            {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isInWishlist ? 'in-wishlist' : ''}`} onClick={handleClick}>
      <div className="quickView">
        <div className="cardViewImg">
          <FaHeart className='cardViewEye' />
        </div>
        <div className='quickViewText'>
          {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
