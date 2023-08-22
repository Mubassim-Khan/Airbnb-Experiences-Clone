import React from 'react'
import Star from "../Assets/Star.png";

export default function Card(props) {
    let badgetext
    if (props.openSpots === 0) {
        badgetext = "SOLD OUT"
    } else if (props.status === "ONLINE") {
        badgetext = "ONLINE"
    }

    return (
        <div className='card'>
            {badgetext && <div className="card--badge">{badgetext}</div>}

            <img src={`../Assets/${props.image}`} alt='person-img' className='card--image' />
            <div className="card--stats">
                <img src={Star} alt='star' className='card--star' />
                <span className='gray'>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) ◉ </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}
