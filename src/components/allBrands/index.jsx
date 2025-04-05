import React from 'react';
import { AllBrandsImage } from '../../dataset/herobannerSlider';
import './brands.scss';
export const AllBrands = () => {
  return (
    <>
      <div className="brands">
        {AllBrandsImage.map((el, index) => (
          <div key={index} className="brand">
            <img src={el.brandImage} alt={`brand-${index}`} className="brandImg" />
          </div>
        ))}
      </div>
    </>
  );
};