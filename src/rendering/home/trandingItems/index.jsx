import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "../../../dataset/herobannerSlider";
import ViewMore from "../../../common/viewMore";
import "./tranding.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import CustomLoader from '../../../components/CustomLoader';

import AddToCartBtn from "../../../common/addtocartbtn";
import CardHoverComp from "../../../common/cardHoverComp";
import ProductLabel from "../../../components/ProductLabel";
import useProductApi from "../../../api/productApi";
import RatingStars from '../../../components/star';
import ProductCard from "../../../common/productCard";

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

export default function Tranding() {
  const { products, isLoading, error } = useProductApi();
  // Slider settings
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="container">
        <div className="no-products">No trending products found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="categoryIcon">
        <div className="categoryTitle">
          <img src={SectionTitle[1].geticon} alt="" />
          <p>{SectionTitle[1].title}</p>
        </div>
        <ViewMore />
      </div>
      <div className="trandingItemsSlider">
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}