import React, { useContext } from 'react';
import './wishlistPage.scss';
import wishlistContext from '../../configurations/wishlistContext';
import cartContext from '../../configurations/cartContext';
import { FaTrash, FaArrowLeft, FaShoppingCart, FaRegHeart, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import RatingStars from '../star';
import ProductLabel from '../ProductLabel';
import { toast } from 'react-toastify';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useContext(wishlistContext);
  const { addToCart } = useContext(cartContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Silent operations (without toasts)
    addToCart(item, true); // Pass true to skip toast
    removeFromWishlist(item.id, true); // Pass true to skip toast
    
    // Only show combined toast
    toast.success('Item added to cart and removed from wishlist!');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-wishlist">
        <div className="container">
          <div className="empty-content">
            <FaRegHeart className="empty-icon" />
            <h2>Your Wishlist is Empty</h2>
            <p>Browse our products and add your favorites to the wishlist!</p>
            <button className="continue-shopping" onClick={() => navigate('/')}>
              <FaArrowLeft /> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <h1>My Wishlist <span>({wishlistItems.length} items)</span></h1>
          <button className="back-to-shop" onClick={() => navigate('/')}>
            <FaArrowLeft /> Continue Shopping
          </button>
        </div>

        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div className="wishlist-item" key={item.id}>
              <div className="item-image">
                <img src={item.thumbnail} alt={item.title} />
                <ProductLabel stock={item.stock} />
              </div>

              <div className="item-details">
                <div className="item-header">
                  <h3>{item.title}</h3>
                  <div className="item-rating">
                    <RatingStars rating={item.rating} />
                    <span className="rating-value">({item.rating})</span>
                  </div>
                </div>

                <div className="item-info">
                  <div className="price-section">
                    <div className="main-price">${item.price}</div>
                    {item.discountPercentage && (
                      <div className="discount">
                        <span className="original-price">
                          ${Math.round(item.price / (1 - item.discountPercentage / 100))}
                        </span>
                        <span className="discount-tag">-{Math.round(item.discountPercentage)}% OFF</span>
                      </div>
                    )}
                  </div>

                  <div className="stock-info">
                    <span className={`stock-status ${item.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                      {item.stock > 0 ? `${item.stock} units left` : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="item-meta">
                  <span className="brand">
                    <strong>Brand:</strong> {item.brand}
                  </span>
                  <span className="category">
                    <strong>Category:</strong> {item.category}
                  </span>
                </div>

                <p className="item-description">{item.description}</p>

                <div className="item-actions">
                  <button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(item)}
                    disabled={item.stock <= 0}
                  >
                    <FaCartPlus /> Add to Cart
                  </button>
                  <button 
                    className="view-details"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <FaShoppingCart /> Buy Now
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                    title="Remove from wishlist"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
