import React, { useState } from "react";
import "./count.scss";

function CountIncrease() {
  return (
    <div>
      {/* Cart icon with count */}
      <div className="cart-btn">
        <span className="cart-count"></span>
      </div>
    </div>
  );
}

export default CountIncrease;
