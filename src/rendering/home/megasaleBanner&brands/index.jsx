import React from 'react';
import CommonButton from '../../../common/button';
import './megasale.scss';
import { SectionTitle } from '../../../dataset/herobannerSlider';
import ViewMore from '../../../common/viewMore';
import Slider from 'react-slick';
import { AllBrandsImage } from '../../../dataset/herobannerSlider';

export default function MegasaleBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const limitedBrands = AllBrandsImage.slice(0, 6);

  return (
    <div>
      <section>
        <div className="container">
          <div className="commonPadding">
            <div className="megasale">
              <div className="megasaleText">
                <h6>Mega Collections</h6>
                <h2>Huge Sale Up To 40% Off</h2>
                <p>at our outlet stores</p>
                <div className='megasaleBtn'>
                  <CommonButton className={'megasaleBtn'} buttonText={'Shop Now'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="categoryIcon">
            <div className="categoryTitle">
              <img src={SectionTitle[3].geticon} alt="" />
              <p>{SectionTitle[3].title}</p>
            </div>
            <ViewMore />
          </div>

          <div className="brandSlider">
            <Slider {...settings}>
              {limitedBrands.map((el, index) => (
                <div key={index} className="brand">
                  <img src={el.brandImage} alt={`brand-${index}`} className="brandImg" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}