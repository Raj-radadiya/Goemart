import React, { useState } from 'react'
import cartContext from '../configurations/cartContext'
import { toast } from 'react-toastify';

export default function CartContextProviders(props) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const exists = cartItems.find((item) => item.id === product.id);
        if (!exists) {
            setCartItems((prev) => [...prev, product]);
            toast.success("Product added to cart.");
        } else {
            toast.info("Product already in cart.");
        }
    };

    return (
        <cartContext.Provider value={{ cartItems, addToCart }}>
            {props.children}
        </cartContext.Provider>
    );
}
