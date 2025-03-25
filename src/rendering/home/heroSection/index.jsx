import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import bag from "../../../assets/icon/arrivals.svg";
import fashion from "../../../assets/icon/dress.svg";
import electronics from "../../../assets/icon/Electronics.svg";
import Grocery from "../../../assets/icon/grocery.svg";
import Music from "../../../assets/icon/music.svg";
import Furniture from "../../../assets/icon/furniture.svg";
import Toy from "../../../assets/icon/toy.svg";
import gift from "../../../assets/icon/gifts.svg";
import beauty from "../../../assets/icon/mother.svg";
import health from "../../../assets/icon/beauty.svg";
import sports from "../../../assets/icon/sports.svg";
import Garden from "../../../assets/icon/garden.svg";
import Automotive from "../../../assets/icon/automotive.svg";
import "./heroSection.scss";
import { HerobannerText } from "../../../dataset/herobannerSlider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div className="leftArrow" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div className="rightArrow" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
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
    afterChange: (index) => setCurrentSlide(index), // Update current slide index
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Trigger animations when the slide changes
  useEffect(() => {
    const animateElements = () => {
      const slide = sliderRef.current?.innerSlider?.list.querySelector(
        `.slick-slide[data-index="${currentSlide}"]`
      );
      if (slide) {
        const discountElement = slide.querySelector(".offerDiscount h6");
        const productNameElement = slide.querySelector(
          ".herobannerProductName h1"
        );
        const productPara = slide.querySelector(".herobannerDIscription p");
        const productBtn = slide.querySelector(".herobannerProductBtn button");
        const productImg = slide.querySelector(".herobannerImg img");

        // Add a small delay before triggering animations
        setTimeout(() => {
          if (discountElement) {
            discountElement.classList.remove("animate__fadeInUp");
            void discountElement.offsetWidth; // Trigger reflow
            discountElement.classList.add("animate__fadeInUp");
          }

          if (productNameElement) {
            productNameElement.classList.remove("animate__fadeInRight");
            void productNameElement.offsetWidth; // Trigger reflow
            productNameElement.classList.add("animate__fadeInRight");
          }

          if (productPara) {
            productPara.classList.remove("animate__fadeInLeft");
            void productPara.offsetWidth; // Trigger reflow
            productPara.classList.add("animate__fadeInLeft");
          }

          if (productBtn) {
            productBtn.classList.remove("animate__fadeInUp");
            void productBtn.offsetWidth; // Trigger reflow
            productBtn.classList.add("animate__fadeInUp");
          }

          if (productImg) {
            productImg.classList.remove("animate__fadeInRight");
            void productImg.offsetWidth; // Trigger reflow
            productImg.classList.add("animate__fadeInRight");
          }
        }, 100); // Adjust the delay (in milliseconds) as needed
      }
    };

    animateElements();
  }, [currentSlide]);

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
                      <img src={bag} alt="bag" />
                      <span>New Arrivals</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={fashion} alt="fashion" />
                      <span>Fashion & Accessories</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={electronics} alt="electronics" />
                      <span>Electronics</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Grocery} alt="grocery" />
                      <span>Grocery & Market</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Music} alt="music" />
                      <span>Music & Audio</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Furniture} alt="furniture" />
                      <span>Home & Furniture</span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Toy} alt="toy" />
                      <span>Toy & Video Games</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={gift} alt="gift" />
                      <span>Gifts</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={beauty} alt="beauty" />
                      <span>Babies & Moms</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={health} alt="health" />
                      <span>Health & Beauty</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={sports} alt="sports" />
                      <span>Sports & Outdoor</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Garden} alt="garden" />
                      <span>Home & Garden</span>
                    </div>
                  </div>
                  <div className="category">
                    <div className="category-name">
                      <img src={Automotive} alt="automotive" />
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
                          <h6 className="animate__animated">{el.discount}</h6>
                        </div>
                        <div className="herobannerProductName">
                          <h1 className="animate__animated">
                            {el.productName}
                          </h1>
                        </div>
                        <div className="herobannerDIscription">
                          <p className="animate__animated">{el.para}</p>
                        </div>
                        <div className="herobannerProductBtn">
                          <button className="animate__animated">
                            {el.btn}
                          </button>
                        </div>
                      </div>
                      <div className="herobannerImg">
                        <img
                          src={el.bannerImg}
                          alt="Product Banner"
                          className="animate__animated"
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
