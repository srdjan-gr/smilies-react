import React from 'react'
import './HomeSection.css'
// import ShowcaseImg1 from '../../assets/img/home-sections/SmiliesSumer-01.jpg'
import logo from '../../assets/img/logos/s.png'

import { showcases } from '../../data';

import Aos from 'aos';
import 'aos/dist/aos.css'

const HomeSection = () => {

    Aos.init({
    duration: 1200,
    once: false,
    delay: 600,
    // offset: 200,
    // throttleDelay: 1024,
  })


    return (
        <>
            <section className='container'>

                {showcases.map((showcase, idx) => {

                let podeljenTitle = showcase.title.split(' ');

                let showcaseClass = '';
                let dataAos = '';

                if(showcase.id%2 == 0){
                    showcaseClass = 'reverse  my-5';
                    dataAos = 'fade-right';
                }else {
                    showcaseClass = 'showcase my-5';
                    dataAos = 'fade-left';
                }

                return (
                    <div className={showcaseClass} key={idx}>

                        <div className="text__content" data-aos={dataAos} >
                            <div className="text__content-desc">
                                <h2> {podeljenTitle[0]} <br /> {podeljenTitle[1]} {podeljenTitle[2]}</h2>
                                <p>{showcase.text}</p>
                            </div>

                            <div className="logo-img">
                                <img src={logo} alt="" />
                            </div>
                        </div>

                        <div className="img" data-aos={dataAos} >
                            <img src={showcase.image} alt={showcase.image_description} />
                        </div>

                    </div>
                    )
                })}
            </section>
        </>
    )
}

export default HomeSection