import React from "react";
import "./button.scss";
function CommonButton({
  className,
  padding,
  border,
  borderRadius,
  backgroundColor,
  fontWeight,
  fontSize,
  color,
  cursor,
  buttonText,
}) {
  return (
    <div>
      <button
        className={`button ${className}`}
        style={{
          padding: padding,
          border: border,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          cursor: cursor,
        }}
      >
        {buttonText || "Shop Now"}
      </button>
    </div>
  );
}

export default CommonButton;
