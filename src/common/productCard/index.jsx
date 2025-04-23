import React, { useContext } from "react";
import "./productCard.scss";
import ProductLabel from "../../components/ProductLabel";
import CardHoverComp from "../cardHoverComp";
import { useNavigate } from "react-router";
import RatingStars from "../../components/star";
import AddToCartBtn from "../addtocartbtn";
import cartContext from "../../configurations/cartContext";
import wishlistContext from "../../configurations/wishlistContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(cartContext);
  const { removeFromWishlist } = useContext(wishlistContext);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents clicking through to the product details

    const isConfirmed = window.confirm('Are you sure you want to add this item to cart?');

    if (isConfirmed) {
      addToCart(product);
      removeFromWishlist(product.id, true);
    }
  };

  const handleProductClick = (productId) => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };

  return (
    <div key={product.id} className="productCard">
      <div className="productImgAndMore">
        <ProductLabel stock={product.stock} />
        <div className="productImg" onClick={() => handleProductClick(product.id)}>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="productMore">
          <CardHoverComp product={product} />
        </div>
      </div>
      <div>
        <div className="productName" onClick={() => handleProductClick(product.id)}>
          <p>{product.title}</p>
        </div>
        <div className="productRating">
          <RatingStars rating={product.rating} />
        </div>
        <div className="productPriceCart">
          <div className="productCart" onClick={handleAddToCart}>
            <AddToCartBtn count={'CartInc'} />
          </div>
          <div className="productPrice">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
