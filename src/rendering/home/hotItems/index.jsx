import React from 'react';
import useProductApi from '../../../api/productApi';
import Slider from "react-slick";
import { SectionTitle } from "../../../dataset/herobannerSlider";
import ViewMore from "../../../common/viewMore";
import "./tranding.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard from '../../../common/productCard';

// Custom arrow components for slider
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="leftArrow" onClick={onClick}>
      <IoIosArrowForward className="trandingLeftArrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="rightArrow" onClick={onClick}>
      <IoIosArrowBack className="trandingRightArrow" />
    </div>
  );
}

export default function HotItems() {
  const { products, error } = useProductApi();

  if (error) {
    return (
      <div className="container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="container">
        <div className="no-products">No trending products found</div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="categoryIcon">
        <div className="categoryTitle">
          <img src={SectionTitle[2].geticon} alt="" />
          <p>{SectionTitle[2].title}</p>
        </div>
        <ViewMore />
      </div>
      <div className="trandingItemsSlider">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="slide-wrapper">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


