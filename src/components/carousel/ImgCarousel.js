import React from 'react';
import './ImgCarouselStyles.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Cancun from '../../assets/cancun.jpeg';
import Chiapas from '../../assets/chiapas.webp';
import IslaMujeres from '../../assets/isla-mujeres.png';

const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const defStyle = { marginLeft: "1rem",borderRadius: 50, height: "1rem", width: "1rem", cursor: "pointer" };
    const style = isSelected
    ? { ...defStyle, backgroundColor: "#709dff" }
    : { ...defStyle, backgroundColor: "#555" };

    return (
        <div
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
        />
    );
}

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel renderIndicator={renderIndicator} className='carousel' showArrows={false} infiniteLoop swipeable >
                <div>
                    <img src={Chiapas} alt='/' />
                    {/* <p className="legend">Chiapas</p> */}
                </div>
                <div>
                    <img src={IslaMujeres} alt='/' />
                    {/* <p className="legend">IslaMujeres</p> */}
                </div>
                <div>
                    <img src={Cancun} alt='/' />
                    {/* <p className="legend">Cancun</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default ImgCarousel
