import React, { useRef } from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiMusic2Fill } from "react-icons/ri";
import { GiSofa } from "react-icons/gi";
import { MdOutlineSmartToy } from "react-icons/md";
import { BsFillGiftFill } from "react-icons/bs";
import { MdBabyChangingStation } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import "./heroSection.scss";
import { HerobannerText } from "../../../dataset/herobannerSlider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CommonButton from "../../../common/button";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="leftArrow" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="rightArrow" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}
function HeroSection() {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section>
      <div className="container">
        <div className="heroSection">
          {/* Sidebar Menu */}
          <div className="sideBar">
            <div className="sidebarMenu">
              <ul className="category-list">
                <li className="category-item">
                  <div className="category">
                    <div className="category-name">
                      <GiSchoolBag />
                      <span>New Arrivals</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <GiClothes />
                      <span>Fashion & Accessories</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <FaLaptop />
                      <span>Electronics</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <IoFastFoodSharp />
                      <span>Grocery & Market</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <RiMusic2Fill />
                      <span>Music & Audio</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <GiSofa />
                      <span>Home & Furniture</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <MdOutlineSmartToy />
                      <span>Toy & Video Games</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <BsFillGiftFill />
                      <span>Gifts</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <MdBabyChangingStation />
                      <span>Babies & Moms</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <MdHealthAndSafety />
                      <span>Health & Beauty</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <MdOutlineSportsBasketball />
                      <span>Sports & Outdoor</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <RiLandscapeFill />
                      <span>Home & Garden</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <FaCar />
                      <span>Automotive</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Hero Banner Slider */}
          <div className="herobanner">
            <div className="herobannerSliderMain">
              <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                  {HerobannerText.map((el, index) => (
                    <div key={index} className="herobannerSlider">
                      <div className="herobannerInfo">
                        <div className="offerDiscount">
                          <h6>{el.discount}</h6>
                        </div>
                        <div className="herobannerProductName">
                          <h1>
                            {el.productName}
                          </h1>
                        </div>
                        <div className="herobannerDIscription">
                          <p>{el.para}</p>
                        </div>
                        <div className="herobannerProductBtn">
                          <CommonButton>
                            {el.btn}
                          </CommonButton>
                        </div>
                      </div>
                      <div className="herobannerImg">
                        <img
                          src={el.bannerImg}
                          alt="Product Banner"

                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
