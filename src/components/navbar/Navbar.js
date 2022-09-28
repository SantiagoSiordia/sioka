import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <BrowserView>
                <div className={nav ? 'logo dark' : 'logo'}>
                    <h2>SIOKA.</h2>
                </div>
            </BrowserView>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Inicio</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinos</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>¡Viaja!</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Vistas</li></Link>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <MobileView>
                <div className={nav ? 'logo dark' : 'logo'}>
                    <h2>SIOKA.</h2>
                </div>
            </MobileView>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Inicio</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinos</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>¡Viaja!</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Vistas</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Contáctanos</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
