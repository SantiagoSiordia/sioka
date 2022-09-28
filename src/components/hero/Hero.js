import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Lujo y seguridad</h1>
                <h2>En todos tus viajes</h2>
            </div>
        </div>
    )
}

export default Hero
