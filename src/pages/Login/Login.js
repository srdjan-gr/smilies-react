import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginCard from '../../components/LoginCard/LoginCard';
import SigninCard from '../../components/SigninCard/SigninCard';


const LoginSignin = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    const [loginCard, setLoginCard] = useState(false);

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };



    return (
        <div className="container">
            <div className="login-container">
                <LoginCard loginCard={loginCard} setLoginCard={setLoginCard} />
                <SigninCard loginCard={loginCard} setLoginCard={setLoginCard} />
            </div>
        </div>
    )
}

export default LoginSignin