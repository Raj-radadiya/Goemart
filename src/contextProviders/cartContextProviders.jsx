import React, { useState, useEffect } from 'react'
import cartContext from '../configurations/cartContext'
import { toast } from 'react-toastify';

export default function CartContextProviders(props) {
    // Initialize cartItems from localStorage if available
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        if (!product) return;

        const exists = cartItems.find((item) => item.id === product.id);
        if (!exists) {
            // Use the quantity from the product or default to 1
            const productWithQuantity = {
                ...product,
                quantity: product.quantity || 1
            };
            setCartItems((prev) => [...prev, productWithQuantity]);
            toast.success("Product added to cart.");
        } else {
            toast.info("Product already in cart.");
        }
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.min(Math.max(newQuantity, 1), item.stock) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        toast.success("Product removed from cart.");
    };

    return (
        <cartContext.Provider value={{
            cartItems,
            setCartItems,
            addToCart,
            updateQuantity,
            removeItem
        }}>
            {props.children}
        </cartContext.Provider>
    );
}
