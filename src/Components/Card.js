import React from 'react'
import star from "../Assets/Star.png";

export default function Card(props) {

    console.log(props)
    return (
        <div className='card'>
            <img src={`../Assets/${props.image}`} alt='person-img' className='card--image' />
            <div className="card--stats">
                <img src={star} alt='star' className='card--star' />
                <span className='gray'>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) ◉ </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}
