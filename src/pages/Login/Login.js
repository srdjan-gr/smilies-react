import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginCard from '../../components/LoginCard/LoginCard';


const LoginSignin = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div className="container">
            <LoginCard />
        </div>
    )
}

export default LoginSignin