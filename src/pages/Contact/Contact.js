import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div className="container">
            Contact

        </div>
    )
}

export default Contact