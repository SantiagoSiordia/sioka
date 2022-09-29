import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './FooterStyles.css'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="social">
                        <h3>SIOKA.</h3>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
