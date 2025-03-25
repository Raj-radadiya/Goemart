import React from 'react'
import CommonButton from '../../../common/button'
import './megasale.scss'
import { SectionTitle } from '../../../dataset/herobannerSlider'
import ViewMore from '../../../common/viewMore'
import Slider from 'react-slick'
import brandFirst from '../../../assets/logo/brand1.png'
import brandSecond from '../../../assets/logo/brand2.png'
import brandThird from '../../../assets/logo/brand3.png'
import brandForth from '../../../assets/logo/brand4.png'
import brandFifth from '../../../assets/logo/brand5.png'
import brandSixth from '../../../assets/logo/brand6.png'
export default function MegasaleBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }
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
                <CommonButton className={'megasaleBtn'} />
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
              <div className='brand'>
                <img src={brandFirst} alt='brand' />
              </div>
              <div className='brand'>
                <img src={brandSecond} alt='brand' />
              </div>
              <div className='brand'>
                <img src={brandThird} alt='brand' />
              </div>
              <div className='brand'>
                <img src={brandForth} alt='brand' />
              </div>
              <div className='brand'>
                <img src={brandFifth} alt='brand' />
              </div>
              <div className='brand'>
                <img src={brandSixth} alt='brand' />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}
