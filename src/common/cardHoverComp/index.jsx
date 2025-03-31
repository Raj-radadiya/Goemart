import React, { useState } from 'react';
import PopUpModel from '../../components/Model/Model';
import QuickView from '../quickView';
import Wishlist from '../wishlist';
import './cardHover.scss';

export default function CardHoverComp({ product }) {
    const [showModal, setShowModal] = useState(false);

    const handleQuickViewClick = (e) => {
        e.stopPropagation();
        setShowModal(true);
    };

    return (
        <>
            <div className="cardView">
                <div className="hoverAction">
                    <div onClick={handleQuickViewClick}>
                        <QuickView />
                    </div>
                    <Wishlist />
                </div>
            </div>

            <PopUpModel
                show={showModal}
                handleClose={() => setShowModal(false)}
                product={product}
            />
        </>
    );
}
