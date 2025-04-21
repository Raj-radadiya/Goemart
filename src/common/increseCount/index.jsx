import React from "react";
import "./count.scss";

function CountIncrease() {
  return (
    <div>
      {/* Cart icon with count */}
      <div className="cart-btn">
        <span className="cart-count">0</span>
      </div>
    </div>
  );
}

export default CountIncrease;
