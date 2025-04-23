import React from 'react';
import './loader.scss';

export default function CustomLoader() {
  return (
    <div className="custom-loader-overlay">
      <div className="cube-loader">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}


