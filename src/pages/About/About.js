import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
            <div className="container">
                About

            </div>
        </div>
    )
}

export default About