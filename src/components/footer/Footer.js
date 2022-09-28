import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import './FooterStyles.css'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>SIOKA.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>Acerca de</li>
                            <li>Privacidad</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contacto</li>
                            <li>Términos y condiciones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
