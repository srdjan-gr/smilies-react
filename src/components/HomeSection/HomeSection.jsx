import React from 'react'
import './HomeSection.css'
import ShowcaseImg1 from '../../img/home-sections/SmiliesSumer-01.jpg'
import logo from '../../img/logos/s.png'

const HomeSection = () => {
    return (
        <div className='my-5'>
            <section className='container'>
                <div className="showcase">

                    <div className="text__content" data-aos="fade-left">

                        <div className="text__content-desc">
                            <h2>Smilies <br />Summer</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Error vero odio ab mollitia modi
                                delectus iste possimus, ipsa sequi veniam!
                            </p>
                        </div>

                        <div className="logo-img">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className="img" data-aos="fade-right">
                        <img src={ShowcaseImg1} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection