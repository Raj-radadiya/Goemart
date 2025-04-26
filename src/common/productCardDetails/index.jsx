import React, { useState, useEffect, useContext } from 'react';
import Slider from "react-slick";
import { useParams } from 'react-router-dom';
import './carddetails.scss';
import RatingStars from '../star';
import CustomLoader from '../CustomLoader';
import CommonButton from '../button';
import Wishlist from '../wishlist';
import cartContext from '../../configurations/cartContext';
import wishlistContext from '../../configurations/wishlistContext';

export default function CardDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useContext(cartContext);
  const { removeFromWishlist } = useContext(wishlistContext);

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,  // Reduced from 6 to show larger images
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,  // Reduced from 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,  // Reduced from 3
        }
      }
    ]
  };

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
  const addtocart = () => {
    addToCart(product);
    removeFromWishlist(product.id, true);
  }

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
                
                {/* Add product images slider */}
                {product.images && product.images.length > 0 && (
                  <div className="product-images-slider">
                    <Slider {...settings}>
                      {product.images.map((image, index) => (
                        <div key={index} className="slider-image">
                          <img 
                            src={image} 
                            alt={`${product.title} - ${index + 1}`}
                            onClick={() => {
                              const mainImage = document.querySelector('.primary-image');
                              mainImage.src = image;
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
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
                    <div onClick={addtocart}>
                      <CommonButton buttonText="Add to Cart" borderRadius={"10px"} padding={"15px"} /> {/* Add to Cart button */}
                    </div>
                    <Wishlist variant='details' product={product} /> {/* Added product prop here */}
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
