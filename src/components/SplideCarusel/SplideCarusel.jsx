import React from 'react'
import './SplideCarusel.css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import img1 from '../../assets/img/splide/C1-1600x1100.jpg'
import img2 from '../../assets/img/splide/C2-1600x1100.jpg';
import img3 from '../../assets/img/splide/C3-1600x1100.jpg';


const SplideCarusel = () => {
    return (
        <div>
            <Splide
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 4000,
                    speed: 1100,
                    height: 'auto',
                    width: '100%',
                    arrows: true,
                    pagination: false,
                    lazyLoad: true,
                    mouseDrag: true,
                    // easing: 'ease',
                    pauseOnHover: false,

                    breakpoints: {
                        1920: {
                            height: '88rem'
                        },

                        768: {
                            height: '44rem',
                        },
                    }
                }}

                hasTrack={false} aria-label="Smilies slide images">

                <SplideTrack>
                    <SplideSlide>
                        <img src={img1} alt="Image 1" />
                    </SplideSlide>

                    <SplideSlide>
                        <img src={img2} alt="Image 2" />
                    </SplideSlide>

                    <SplideSlide>
                        <img src={img3} alt="Image 2" />
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>

            </Splide>
        </div>
    )
}

export default SplideCarusel