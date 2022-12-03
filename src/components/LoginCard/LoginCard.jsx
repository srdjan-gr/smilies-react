import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import axios from "axios";
import { toast } from 'react-toastify';
import Button from '../Button/Button'
import api from '../../api/api';
import jwt from 'jwt-decode'


// Styling
import './LoginCard.css'
import { IoPersonOutline, IoPersonAddOutline, IoEyeOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';


const LoginCard = ({ loginCard, setLoginCard }) => {

    const [showLoginPass, setShowLoginPass] = useState(false);
    const navigate = useNavigate();

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    const handleShowPass = () => {
        setShowLoginPass(!showLoginPass)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = (e) => {
        e.preventDefault();

        const sendData = {
            email: email,
            password: password,
            // remember: data.terms
        }

        api({
            method: 'post',
            url: 'login.php',
            data: sendData,
        })
            .then((response) => {

                if (response.data.uspesno) {

                    setEmail('');
                    setPassword('');

                    const odgovor = response.data;

                    if (odgovor) {

                        const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");
                        if (smiliesSession) {
                            notifyInfo("Već ste ulogovani");
                            navigate('/')

                        } else if (!smiliesSession) {

                            sessionStorage.setItem("SmiliesOnlineLog", odgovor.token);
                            const token = jwt(response.data.token);

                            if (token.data.status == 'Admin' || token.data.status == 'Urednik') {

                                notifySuccess(response.data.uspesno);
                                navigate('/Dashboard')
                            } else if (token.data.status == 'Korisnik') {

                                navigate('/')
                                notifySuccess(response.data.uspesno);
                            } else {

                                notifySuccess("Greška prilikom logovanja");
                            }
                        }

                    } else {
                        notifyError("Login error.");
                    }

                } else if (response.data.greska) {
                    notifyError(response.data.greska);

                } else if (response.data.info) {
                    notifyInfo(response.data.info);
                }
            })

    }

    // Message je stilizovana komponenta Unutar Toast-a
    const notifyError = (odgovor) => {
        toast.error(<Message error={odgovor} />)
    }
    const notifySuccess = (odgovor) => {
        toast.success(<Message success={odgovor} />);
    }
    const notifyInfo = (odgovor) => {
        toast.info(<Message info={odgovor} />);
    }


    const resetPass = () => {

    }


    return (

        <div className={`${loginCard ? 'loginActive' : ''} login-card loginCard `} id="">

            <div className="login-card-header">
                <span><IoPersonOutline className='icon-xl' /></span>
                <h1 data-en='Login' data-sr='Prijavljivanje'>Prijavljivanje</h1>
            </div>

            <form autoComplete="off" onSubmit={submitLogin}>

                <div className="form-imputs">
                    <div className="inputs">
                        <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <input type={showLoginPass ? 'text' : 'password'} name="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <IoEyeOutline className='visible__pass' onClick={handleShowPass} />
                    </div>
                    {/*<div className="inputs check">
                        <input type="checkbox" name="rememberme" id="remember" className="remember" />
                        <label htmlFor="remember" data-en='Remember me on these device.' data-sr='Zapamti me na ovom uređaju.'>Zapamti me na ovom uređaju.</label>
                     </div>*/}
                    <div className="pass__reset">
                        <span onClick={resetPass} data-en='Forgotten password?' data-sr='Zaboravili ste lozinku?'>Zaboravili ste lozinku?</span>
                    </div>
                </div>

                <div className="inputs">
                    {/*<button type='submit' className="btn" onClick={handleClick} data-en='Login' data-sr='Prijava'>Prijava</button>*/}
                    <button className="btn" data-en='Login' data-sr='Prijava'>Prijava</button>
                </div>
            </form>

            <div className="switch">
                <span onClick={cardRotation} data-en='Go to Signup' data-sr='Idi na registraciju'>Idi na registraciju</span>
            </div>
        </div>

    )
}

export default LoginCard 