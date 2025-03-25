import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import './quickview.scss'

export default function QuickView() {
    return (
        <>
            <div>
                <div className="quickView">
                    <div className="cardViewImg">
                        <IoEyeSharp className='cardViewEye' />
                    </div>
                    <div className='quickViewText'>Quick View</div>
                </div>
            </div>

        </>
    )
}
