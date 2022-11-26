import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactOptions from '../../components/ContactOptions/ContactOptions';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';

const Contact = ({ setLocation, modal, setModal, modalId, setModalId }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
            <Navbar />
            <Header />
            <Devider />

            <ContactOptions />

        </div>
    )
}

export default Contact