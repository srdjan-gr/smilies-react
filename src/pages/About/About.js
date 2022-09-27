import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './About.css';

const About = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <section className="container">

            <div className="about__content">

                <p>Modni salon Smilies je počeo sa radom daleke 1997 godine u Boru kada su jedan hobi i pasija uobličeni u profesiju.</p>

            </div>
        </section>
    )
}

export default About