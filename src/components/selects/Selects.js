import React from 'react'
import './SelectsStyles.css'

import Cancun from '../../assets/cancun.jpeg'
import Chiapas from '../../assets/chiapas.webp'
import IslaMujeres from '../../assets/isla-mujeres.png'

import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Cancun} text='Cancún' />
                <SelectsImg bgImg={Chiapas} text='Chiapas' />
                <SelectsImg bgImg={IslaMujeres} text='Isla mujeres' />
            </div>

        </div>
    )
}

export default Selects
