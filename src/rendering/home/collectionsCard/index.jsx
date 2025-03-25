import React from 'react'
import './collections.scss'
import { CollectionsCardDetails } from '../../../dataset/herobannerSlider'
export default function Collections() {
    return (
        <div>
            <div className='container'>
                <div className='grid'>
                    {CollectionsCardDetails.map((el, index) => (
                        <div key={index} className='collectionsCard' style={{ backgroundImage: `url(${el.backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }} >
                            <div className='collectionsCardDetails'>
                                <div className='collectionsType'>
                                    <span>{el.type}</span>
                                </div>
                                <div className='collectionsTitle'>
                                    <h3>{el.title}</h3>
                                </div>
                                <div className='collectionsLink'>
                                    <a href='#'>{el.link}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
