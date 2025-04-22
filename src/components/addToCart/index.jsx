import React, { useContext } from 'react';
import './addtocart.scss';
import { FaShoppingCart, FaMinus, FaPlus, FaTrash, FaArrowLeft, FaGift } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import cartContext from '../../configurations/cartContext';

const AddToCartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(cartContext);

  const handleQuantityChange = (itemId, value) => {
    // Convert string to number and ensure it's within valid range
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const newQuantity = Math.min(Math.max(1, parseInt(value) || 1), item.stock);
      updateQuantity(itemId, newQuantity);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.10;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span className="item-count">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingCart className="cart-icon" />
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <div className="empty-cart-features">
              <div className="feature">
                <MdLocalShipping size={24} />
                <span>Free Shipping</span>
              </div>
              <div className="feature">
                <RiSecurePaymentLine size={24} />
                <span>Secure Payment</span>
              </div>
              <div className="feature">
                <FaGift size={24} />
                <span>Easy Returns</span>
              </div>
            </div>
            <a href="/" className="continue-shopping">
              <FaArrowLeft /> Continue Shopping
            </a>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <div className="item-header">
                      <h3>{item.title}</h3>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <p className="item-description">{item.description}</p>
                    <div className="stock-status">Stock: {item.stock} units</div>
                    <div className="brand">Brand: {item.brand}</div>
                    <div className="category">Category: {item.category}</div>
                    <div className="price-quantity">
                      <span className="price">${item.price}</span>
                      <div className="quantity-controls">
                        <button
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        >
                          <FaMinus />
                        </button>
                        <input type="text" className="quantity" value={item.quantity || 1} onChange={(e) => handleQuantityChange(item.id, e.target.value)} />
                        {/* <span className="quantity">{item.quantity || 1}</span> */}
                        <button
                          disabled={(item.quantity || 1) >= item.stock}
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <span className="total-price">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="promo-code">
                <input type="text" placeholder="Enter promo code" />
                <button>Apply</button>
              </div>

              <div className="checkout-features">
                <div className="feature">
                  <MdLocalShipping size={24} />
                  <span>Free Shipping</span>
                </div>
                <div className="feature">
                  <RiSecurePaymentLine size={24} />
                  <span>Secure Payment</span>
                </div>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>

              <a href="/" className="continue-shopping-link">
                <FaArrowLeft /> Continue Shopping
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;
