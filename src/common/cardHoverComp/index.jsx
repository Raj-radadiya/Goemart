import React from 'react'
import './cardHover.scss'
import Wishlist from '../wishlist';
import QuickView from '../quickView';

export default function CardHoverComp({ product }) {
    return (
        <div className="cardView">
            <div className="hoverAction">
                <QuickView />
                <Wishlist />
            </div>
        </div>
    )
}
