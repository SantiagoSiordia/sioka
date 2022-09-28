import React from 'react'
import './DestinationsStyles.css'

import Cabos from '../../assets/cabos.jpeg'
import Cancun from '../../assets/cancun.jpeg'
import Chiapas from '../../assets/chiapas.webp'
import IslaMujeres from '../../assets/isla-mujeres.png'
import PuertoVallarta from '../../assets/puerto-vallarta.jpeg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>En las mejores playas de méxico</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={PuertoVallarta} alt="/"/>
                    <img src={Cancun} alt="/cancun"/>
                    <img src={Chiapas} alt="/chiapas"/>
                    <img src={IslaMujeres} alt="/isla-mujeres"/>
                    <img src={Cabos} alt="/cabos"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
