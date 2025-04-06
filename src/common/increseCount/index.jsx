import React, { useState } from "react";
import "./count.scss";

function CountIncrease() {
  const [count, setCount] = useState(0);

  // Add to cart function
  const handleAddToCart = () => {
    
  };

  return (
    <div>
      {/* Cart icon with count */}
      <div className="cart-btn">
        <span className="cart-count">{count}</span>
      </div>
    </div>
  );
}

export default CountIncrease;
