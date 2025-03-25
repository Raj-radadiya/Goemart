import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rendering from '../rendering'
import CardDetails from '../common/productCardDetails'
// import PopUpModel from '../components/model'

export default function RouteIng() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Rendering />} />
                {/* <Route path='/model' element={<PopUpModel />} /> */}
                <Route path="/product/:id" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    )
}





