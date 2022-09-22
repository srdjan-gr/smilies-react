import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const LoginSignin = ({ setLocation }) => {

    let curentLocation = useLocation();
    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div className="container">
            Login

        </div>
    )
}

export default LoginSignin