import React from 'react'
import './saleBanner.scss'
import { Sale } from '../../../dataset/herobannerSlider'
export default function SaleBanner() {
    return (
        <div>
            <div className="container">
                <div className="womenSale">
                    {Sale.map((el, index) => {
                        return (
                            <div 
                                key={index}
                                className="saleBanner" 
                                style={{ 
                                    backgroundImage: `url(${el.backgroundImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="saleContent">
                                    <h3>{el.saleTitle}</h3>
                                    <h1>
                                        {el.saleDiscount}
                                        <span className="discount-percentage">{el.discountPercentage}</span>
                                    </h1>
                                    <button>{el.saleBtn}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
