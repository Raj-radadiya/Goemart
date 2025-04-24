import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rendering from '../rendering';
import CardDetails from '../common/productCardDetails';
import AddToCartPage from '../components/addToCart';
import Header from '../layout/header';
import WishlistPage from '../components/wishlist';
import Dashboard from '../UserProfile/Dashboard';
import MyProfile from '../UserProfile/myProfile';
import DashboardLayout from '../UserProfile/components/DashboardLayout';

export default function RouteIng() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path='/' element={
                    <>
                        <Header />
                        <Rendering />
                    </>
                } />

                {/* User Dashboard routes */}
                <Route path="/user" element={<DashboardLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<MyProfile />} />
                </Route>

                {/* Other routes */}
                <Route path="/product/:id" element={
                    <>
                        <Header />
                        <CardDetails />
                    </>
                } />
                <Route path='/cart' element={
                    <>
                        <Header />
                        <AddToCartPage />
                    </>
                } />
                <Route path='/wishlist' element={
                    <>
                        <Header />
                        <WishlistPage />
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}






