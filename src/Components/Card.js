import React from 'react'
import image from '../Assets/img.png'
import star from "../Assets/Star.png";

export default function Card() {
    return (
        <div className='card'>
            <img src={image} alt='card' className='card--image' />
            <div className="card--stats">
                <img src={star} alt='star' className='card--star' />
                <span className='gray'>5.0</span>
                <span className='gray'>(8) ◉ </span>
                <span>USA</span>
            </div>
            <p>Life lessons from Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}
