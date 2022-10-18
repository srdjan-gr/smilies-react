import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './About.css';

const About = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
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