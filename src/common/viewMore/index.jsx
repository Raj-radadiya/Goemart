import React from 'react'
import './viewMore.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
export default function ViewMore() {
    return (
        <div>
            <div className='categoyExplore'>
                <span>View More</span>
                <FaLongArrowAltRight color='var(--color-gray)' />
            </div>
        </div>
    )
}
