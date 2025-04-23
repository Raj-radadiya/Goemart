import React, { useContext } from "react";
import "./count.scss";
import wishlistContext from "../../configurations/wishlistContext";
import cartContext from "../../configurations/cartContext";

function CountIncrease({ type = "cart" }) {
  const { wishlistItems } = useContext(wishlistContext);
  const { cartItems } = useContext(cartContext);

  const count = type === "wishlist" ? wishlistItems?.length : cartItems?.length;

  return (
    <div>
      <div className="cart-btn">
        <span className="cart-count">{count || 0}</span>
      </div>
    </div>
  );
}

export default CountIncrease;
