import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import Button from '../Button/Button'


// Styling
import './LoginCard.css'
import { IoPersonOutline, IoPersonAddOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';


const LoginCard = ({ loginCard, setLoginCard }) => {

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/Dashboard');
    }


    return (

        <div className={`${loginCard ? 'loginActive' : ''} login-card loginCard `} id="">

            <div className="login-card-header">
                <span><IoPersonOutline className='icon--big' /></span>
                <h1>Login</h1>
            </div>

            <form autoComplete="off" >

                <div className="form-imputs">
                    <div className="inputs">
                        <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" />
                    </div>
                    <div className="inputs">
                        <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password" />
                    </div>
                    <div className="inputs check">
                        <input type="checkbox" name="rememberme" id="remember" className="remember" />
                        <label htmlFor="remember">Remember me on these device</label>
                    </div>
                </div>

                <div className="inputs">
                <button type='submit' className="btn" onClick={handleClick}>Login</button>
                </div>
            </form>

            <div className="switch">
                <span id="signupLink" onClick={cardRotation}>Go to Signup</span>
            </div>
        </div>
 
    )
}

export default LoginCard 