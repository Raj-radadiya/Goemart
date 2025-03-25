import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './carddetails.scss';
import RatingStars from '../../components/star';
import CustomLoader from '../../components/CustomLoader';
import CommonButton from '../button';
import Wishlist from '../wishlist';

export default function CardDetails() {
  const [placement, setPlacement] = React.useState("top");
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <CustomLoader />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <>
      <section>
        <div className="product-details">
          <div className="container">
            <div className="product-details-wrapper">
              {/* Left Side - Product Images */}
              <div className="details-images">
                <div className="main-image">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="primary-image"
                  />
                </div>
              </div>

              {/* Right Side - Product Information */}
              <div className="details-info">
                <h1 className="product-title">{product.title}</h1>

                <div className="product-meta">
                  <div className="rating-wrapper">
                    <RatingStars rating={product.rating} />
                    <span className="review-count">( {product.reviews ? product.reviews.length : 0} Customer Reviews )</span>
                  </div>
                </div>

                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.discountPercentage && (
                    <span className="discount">
                      {product.discountPercentage}% OFF
                    </span>
                  )}
                </div>

                <div className="product-description">
                  <p>{product.description}</p>
                </div>

                <div className="product-actions">
                  <div className='quantity'>Quantity</div>
                  <div className="quantity-selector">
                    <button
                      onClick={() => setSelectedQuantity(prev => Math.max(1, prev - 1))}
                      disabled={selectedQuantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max={product.stock}
                    />
                    <button
                      onClick={() => setSelectedQuantity(prev => Math.min(product.stock, prev + 1))}
                      disabled={selectedQuantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  <div className="otherDetails">
                    <p><b>Stock: </b>{product.stock} units</p>
                    <p><b>SKU: </b>{product.sku}</p>
                    <p><b>Category: </b>{product.category}</p>
                    <p><b>Brand: </b>{product.brand}</p>
                    <p><b>Discount: </b>{product.discountPercentage}% OFF</p>
                    <p><b>Tags: </b>{product.tags.join(',')}</p>
                  </div>

                  <div className="action-buttons">
                    <CommonButton buttonText="Add to Cart" borderRadius={"10px"} padding={"15px"} /> {/* Add to Cart button */}
                    <Wishlist variant='details' /> {/* Changed this line */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
