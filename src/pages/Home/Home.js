import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HomeSection from '../../components/HomeSection/HomeSection';
import SplideCarusel from '../../components/SplideCarusel/SplideCarusel';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';
import Footer from '../../components/Footer/Footer';

const styleShowcase = {
    display: 'flex',
    flexDirection: 'row',
}

const Home = ({ location, setLocation }) => {

    let curentLocation = useLocation();
    // console.log(curentLocation)

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div>
            <Navbar />
            <Header />
            <Devider />

            <SplideCarusel />
            <HomeSection />
            <Footer />

        </div>
    )
}

export default Home