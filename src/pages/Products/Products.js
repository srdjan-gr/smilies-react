import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';


const Products = ({ location, setLocation }) => {

    let curentLocation = useLocation();

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);

    return (
        <div>
            <Navbar />
            <Header />
            <Devider />

            <ProductCard />
            <Footer />

        </div>

    )
}

export default Products