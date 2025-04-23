import React, { useState, useEffect } from 'react';
import wishlistContext from '../configurations/wishlistContext';
import { toast } from 'react-toastify';

export const WishlistContextProvider = ({ children }) => {
    // Initialize wishlistItems from localStorage if available
    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Update localStorage whenever wishlistItems changes
    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        if (!product) return;

        const exists = wishlistItems.find((item) => item.id === product.id);
        if (!exists) {
            setWishlistItems((prev) => [...prev, product]);
            toast.success("Product added to wishlist.");
        } else {
            toast.warning("Product already in wishlist.");
        }
    };

    const removeFromWishlist = (id, silent = false) => {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
        if (!silent) {
            toast.error("Product removed from wishlist.");
        }
    };

    return (
        <wishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </wishlistContext.Provider>
    );
};

