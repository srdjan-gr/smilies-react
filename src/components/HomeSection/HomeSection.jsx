import React from 'react'
import Aos from 'aos';

// Data
import { showcases } from '../../data';

// Styling
import './HomeSection.css'
import logo from '../../assets/img/logos/s.png'
import 'aos/dist/aos.css'


const HomeSection = () => {

    Aos.init({
        duration: 1200,
        once: false,
        delay: 0,
        // startEvent: 'DOMContentLoaded',
        // debounceDelay: 50,
        // offset: 200,
        // throttleDelay: 1024,
    })

    Aos.refresh();


    return (
        <section className='container'>

            {showcases.map((showcase, idx) => {

                let podeljenTitle = showcase.title.split(' ');

                let showcaseClass = '';
                let dataAos = '';

                if(showcase.id%2 == 0){
                    showcaseClass = 'reverse my-5';
                    // dataAos = 'fade-right';
                    dataAos = 'fade-up';
                    // dataAosAnchorPlacement = 'center-center';
                }else {
                    showcaseClass = 'showcase my-5';
                    dataAos = 'fade-up';
                    // dataAosAnchorPlacement = 'center-center';
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
    )
}

export default HomeSection