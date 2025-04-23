import React, { useState, useEffect, useContext } from 'react'
import cartContext from '../configurations/cartContext'
import { toast } from 'react-toastify';
import wishlistContext from '../configurations/wishlistContext';

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const { removeFromWishlist } = useContext(wishlistContext);

    // Update localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, silent = false) => {
        if (!product) return;

        const exists = cartItems.find((item) => item.id === product.id);
        if (!exists) {
            const productWithQuantity = {
                ...product,
                quantity: product.quantity || 1
            };
            setCartItems((prev) => [...prev, productWithQuantity]);
            removeFromWishlist(product.id, true);
            if (!silent) {
                toast.success("Product added to cart.");
            }
        } else {
            if (!silent) {
                toast.info("Product already in cart.");
            }
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
        toast.error("Product removed from cart.");
    };

    return (
        <cartContext.Provider value={{
            cartItems,
            addToCart,
            updateQuantity,
            removeItem
        }}>
            {children}
        </cartContext.Provider>
    );
}
