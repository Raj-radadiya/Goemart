import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rendering from '../rendering';
import CardDetails from '../common/productCardDetails';
import AddToCartPage from '../components/addToCart';
import Header from '../layout/header';

export default function RouteIng() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Rendering />} />
                <Route path="/product/:id" element={<CardDetails />} />
                <Route path='/cart' element={<AddToCartPage />} />
            </Routes>
        </BrowserRouter>
    )
}