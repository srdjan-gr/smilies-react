import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import axios from "axios";
import { toast } from 'react-toastify';
import Button from '../Button/Button'
import api from '../../api/api';


// Styling
import './LoginCard.css'
import { IoPersonOutline, IoPersonAddOutline, IoEyeOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';


const LoginCard = ({ loginCard, setLoginCard }) => {

    const [showLoginPass, setShowLoginPass] = useState(false);

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/Dashboard');
    }

    // Slanje Sign up podataka 
    // let redirection = useNavigate(); - ako zelimo posle unetih podataka da radimo redirekciju na neku stranu
    // 1. kreiranje pocetnog stanja sa praznim objektom
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        // repeat_password: '',
        terms: false
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
            password: data.password,
            terms: data.terms
        }

        api({
            method: 'post',
            url: 'signup.php',
            data: sendData,
        }) 
            .then((response) => {

                if (response.data.uspesno) {
                    setLoginCard(!loginCard);
                    notifySuccess(response.data.uspesno);
                    setData({ first_name: '', last_name: '', email: '', password: '' })

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

    const handleShowPass = () => {
        setShowLoginPass(!showLoginPass)
    }


    return (

        <div className={`${loginCard ? 'loginActive' : ''} login-card loginCard `} id="">

            <div className="login-card-header">
                <span><IoPersonOutline className='icon-xl' /></span>
                <h1 data-en='Login' data-sr='Prijavljivanje'>Prijavljivanje</h1>
            </div>

            <form autoComplete="off" >

                <div className="form-imputs">
                    <div className="inputs">
                        <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" />
                    </div>
                    <div className="inputs">
                        <input type={showLoginPass ? 'text' : 'password'} name="passwordLogin" id="passwordLogin" placeholder="Lozinka" />
                        <IoEyeOutline className='visible__pass' onClick={handleShowPass}/>
                    </div>
                    <div className="inputs check">
                        <input type="checkbox" name="rememberme" id="remember" className="remember" />
                        <label htmlFor="remember" data-en='Remember me on these device.' data-sr='Zapamti me na ovom uređaju.'>Zapamti me na ovom uređaju.</label>
                    </div>
                </div>

                <div className="inputs">
                <button type='submit' className="btn" onClick={handleClick}>Login</button>
                </div>
            </form>

            <div className="switch">
                <span id="signupLink" onClick={cardRotation} data-en='Go to Signup' data-sr='Idi na registraciju'>Idi na registraciju</span>
            </div>
        </div>
 
    )
}

export default LoginCard 