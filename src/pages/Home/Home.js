import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import HomeSection from '../../components/HomeSection/HomeSection';
import SplideCarusel from '../../components/SplideCarusel/SplideCarusel';



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
            <SplideCarusel />
            <HomeSection />

        </div>
    )
}

export default Home