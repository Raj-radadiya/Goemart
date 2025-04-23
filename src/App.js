import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouteIng from './route';
import CustomLoader from './common/CustomLoader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './contextProviders/cartContextProviders';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './Toast/toast';
import { WishlistContextProvider } from './contextProviders/wishlistContextProvider';


// Create a context for global loading state
export const LoadingContext = createContext();

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initial loading delay
        //le
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, []);

        return () => clearTimeout(timer);
    }, []);

    const loadingState = {
        isLoading,
        setIsLoading
    };

    if (isLoading) {
        return <CustomLoader />;
    }

    return (
        <LoadingContext.Provider value={loadingState}>
            <WishlistContextProvider>
                <CartContextProvider>
                    <Toast />
                    <RouteIng />
                </CartContextProvider>
            </WishlistContextProvider>
        </LoadingContext.Provider>
    );
}

export default App;
