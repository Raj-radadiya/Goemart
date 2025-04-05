import React from 'react'
import './aboutBlog.scss'
import experienceIcon from '../../../assets/icon/experienceIcon.png'
import CommonButton from '../../../common/button'

export default function AboutBlog() {
    return (
        <>
            <div className="container">
                <div className='aboutUsBanner'>
                    <div className="aboutUsBannerImg">
                        <div className="totalExperience">
                            <div className="experienceIcon">
                                <img src={experienceIcon} alt='experienceIcon' />
                            </div>
                            <div className="experienceDetail">
                                <p>30 Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutUsBannerText'>
                        <span className='aboutUsTitle'>ABOUT US</span>
                        <h2>World Largest Online <span className='greenText'>Shopping Marketplace</span> For You.</h2>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially by injected humour unchanged.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <CommonButton buttonText={'Discover More'} padding={'12px 20px'} />
                    </div>
                </div>
            </div>
        </>
    )
}
