import React from 'react'
import Footer from '../../components/Footer/Footer'

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';

const Privacy = () => {
    return (
        <div>

            <Navbar />
            <Header />
            <Devider />

            <section className="container">
                <div className="about__content">

                    <p>Privacy</p>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Privacy