import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './layout/header';
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouteIng from './route';
import CustomLoader from './components/CustomLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProviders from './contextProviders/cartContextProviders';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './Toast/toast';


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
        <CartContextProviders>
            <Toast />
            <LoadingContext.Provider value={loadingState}>
                <Header />
                <RouteIng />
            </LoadingContext.Provider>
        </CartContextProviders>
    );
}

export default App;