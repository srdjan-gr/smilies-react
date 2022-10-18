import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactOptions from '../../components/ContactOptions/ContactOptions';

const Contact = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
            <ContactOptions />

        </div>
    )
}

export default Contact