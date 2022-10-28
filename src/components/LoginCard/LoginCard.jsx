import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import apiSignup from '../../api/signup'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Button from '../Button/Button'

// Styling
import './LoginCard.css'
import { IoPersonOutline, IoPersonAddOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';


const LoginCard = () => {

    const [loginCard, setLoginCard] = useState(false);

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    // Slanje Sign up podataka 
    let redirection = useNavigate();
    // 1. kreiranje stanja sa praznim objektom
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        // repeat_password: '',
    })

    // 2. Hendlovanje submit eventa - spredujemo sve Data zapise i dodajemo nove Value iz Name atributa
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // 3. Slanje podataka iz forme na klik
    const submitSignup = (e) => {
        e.preventDefault();

        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password
        }

        axios.post('http://localhost:8080/srdjan/sapi/signup.php', sendData).then((response) => {

            if (response.data.uspesno) {
                setLoginCard(!loginCard);
                notifySuccess(response.data.uspesno);
                setData({ first_name: '', last_name: '', email: '', password: '' })

            } else if(response.data.greska){
                notifyError(response.data.greska);
                
            }else if(response.data.info){
                notifyInfo(response.data.info);
            }
        })
    }

    // 4. Poruke za prikaz 
    const notifyError = (odgovor) => {
        toast.error(<Message error={odgovor} />)
    }

    const notifySuccess = (odgovor) => {
        toast.success(<Message success={odgovor} />);
    }

    const notifyInfo = (odgovor) => {
        toast.info(<Message info={odgovor} />);
    }

    return (
        <section>
            <div className="login-container">

                <div className={`${loginCard ? 'loginActive' : ''} login-card loginCard `} id="">

                    <div className="login-card-header">
                        <span><IoPersonOutline className='icon--big' /></span>
                        <h1>Login</h1>
                    </div>

                    <form id="myForm" action="" method="POST" autoComplete="off">

                        <div className="form-imputs">
                            <div className="inputs">
                                <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" />
                            </div>
                            <div className="inputs">
                                <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password" />
                            </div>
                            <div className="inputs">
                                <input type="checkbox" id="remember" className="remember" />
                                <label htmlFor="remember">Remember me on these device</label>
                            </div>
                        </div>

                        <div className="login-button">
                            <Button />
                        </div>
                    </form>

                    <div className="switch">
                        <span id="signupLink" onClick={cardRotation}>Go to Signup</span>
                    </div>
                </div>


                <div className={`${loginCard ? 'sigupActive' : ''} login-card signupCard signup`} id="">

                    <div className="login-card-header">
                        <span><IoPersonAddOutline className='icon--big' /></span>
                        <h1>Signup</h1>
                    </div>

                    <form autoComplete="off" onSubmit={submitSignup}>

                        <div className="form-imputs">
                            <div className="inputs">
                                <input type="txt" name="first_name" placeholder="Name" onChange={handleChange} value={data.first_name} />
                            </div>
                            <div className="inputs">
                                <input type="txt" name="last_name" placeholder="Last Name" onChange={handleChange} value={data.last_name} />
                            </div>
                            <div className="inputs">
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
                            </div>
                            <div className="inputs">
                                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} />
                            </div>
                            <div className="inputs">
                                <input type="password" name="password" placeholder="Repeat password" />
                            </div>
                            <div className="inputs">
                                <input type="checkbox" id="remember" className="remember" />
                                <label htmlFor="remember">I agree with terms of use</label>
                            </div>
                        </div>

                        <div className="login-button">
                            {/*<div className="inputs">
                                <p>This site is protected by reCAPTCHA, the Google Privacy Policy <br /> and Terms of Service apply.</p>
                            </div>*/}
                            <Button />
                        </div>
                    </form>

                    <div className="switch">
                        <span id="loginLink" onClick={cardRotation} >Back to Login</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginCard 