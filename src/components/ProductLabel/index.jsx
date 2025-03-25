import React from 'react';
import './ProductLabel.scss';

const ProductLabel = ({ stock }) => {
  if (stock === 0) {
    return <div className="product-label out-of-stock">Out of Stock</div>;
  }
  if (stock <= 5) {
    return <div className="product-label low-stock">Low Stock</div>;
  }
  return <div className="product-label in-stock">In Stock</div>;
};

export default ProductLabel;