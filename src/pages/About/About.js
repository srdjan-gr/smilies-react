import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';
import Footer from '../../components/Footer/Footer';

import './About.css';

const About = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
            <Navbar />
            <Header />
            <Devider />

            <section className="container">
                <div className="about__content">

                    <p>Kompinenta 1: Modni salon Smilies je počeo sa radom daleke 1997. godine u Boru kada su jedan hobi i pasija uobličeni u profesiju.</p>

                    <h3>Komponenta2: Componenta sa galerijom sa radovima i revijama.</h3>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About