import React from 'react'
import './HomeSection.css'
// import ShowcaseImg1 from '../../assets/img/home-sections/SmiliesSumer-01.jpg'
import logo from '../../assets/img/logos/s.png'

import { showcases } from '../../data';

const HomeSection = () => {

    return (

        <>

            {showcases.map((showcase, idx) => {

                let podeljenTitle = showcase.title.split(' ');

                return (
                    <div className='my-5' >
                        <section className='container'>
                            <div className="showcase">

                                <div className="text__content" data-aos="fade-left">

                                    <div className="text__content-desc">
                                        <h2> {podeljenTitle[0]} <br /> {podeljenTitle[1]} {podeljenTitle[2]}</h2>
                                        <p>{showcase.text}</p>
                                    </div>

                                    <div className="logo-img">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>

                                <div className="img" data-aos="fade-right">
                                    <img src={showcase.image} alt="" />
                                </div>
                            </div>
                        </section>
                    </div>
                )
            })}

        </>
    )
}

export default HomeSection