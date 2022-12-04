import React from 'react';
import { useLocation } from 'react-router-dom';



import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';
import Footer from '../../components/Footer/Footer';
import PaymentForm from '../../components/PaymentForm/PaymentForm';


const Payment = ({ location, setLocation }) => {

    return (
        <div>
            <Navbar />
            <Header />
            <Devider />
            <div className='container'>

                <PaymentForm />

            </div>
            <Footer />

        </div>
    )
}

export default Payment