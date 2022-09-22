import React from 'react'
import './HomeSection.css'
// import ShowcaseImg1 from '../../assets/img/home-sections/SmiliesSumer-01.jpg'
import logo from '../../assets/img/logos/s.png'

import { showcase } from '../../data';

const HomeSection = () => {

    const { id, title, text, image } = showcase;


    return (
        <div className='my-5'>
            <section className='container'>
                <div className="showcase">

                    <div className="text__content" data-aos="fade-left">

                        <div className="text__content-desc">
                            <h2> {title} <br /></h2>
                            <p>{text}</p>
                        </div>

                        <div className="logo-img">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className="img" data-aos="fade-right">
                        <img src={image} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection