import React from 'react';
import './ProductLabel.scss';

const ProductLabel = ({ stock }) => {
  if (stock >= 5) {
    return <div className="product-label in-stock">In Stock</div>;
  }
  else if (stock <= 5 && stock >= 1) {
    return <div className="product-label low-stock">Low Stock</div>;
  } else
  return <div className="product-label out-of-stock">Out Of Stock</div>;
};

export default ProductLabel;