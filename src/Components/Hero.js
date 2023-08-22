import React from 'react'
import heroImg from '../Assets/Hero Image.jpg';

export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroImg} alt="collage-pic" className='hero--img' />
            <h1 className='hero--heading'>Online Experiences</h1>
            <p className='hero--desc'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}