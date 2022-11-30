import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../../api/api';

// Styling
import '../LoginCard/LoginCard.css'
import { IoPersonAddOutline, IoEyeOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader'
import Message from '../Message/Message';


const SigninCard = ({ loginCard, setLoginCard }) => {

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const [showPass, setShowPass] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);


    const submitSignup = (e) => {
        e.preventDefault();

        const sendData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            terms: terms
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
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPassword('');
                    setRepeatPassword('');
                    setTerms(false);

                } else if (response.data.greska) {
                    notifyError(response.data.greska);
                } else if (response.data.info) {
                    notifyInfo(response.data.info);
                }
            })
    }

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
        setShowPass(!showPass)
    }

    const handleShowRepeatPass = () => {
        setShowRepeatPass(!showRepeatPass)
    }

    return (

        <div className={`${loginCard ? 'sigupActive' : ''} login-card signupCard signup`} id="">

            <div className="login-card-header">
                <span><IoPersonAddOutline className='icon-xl' /></span>
                <h1 data-en='Signup' data-sr='Prijava'>Registracija</h1>
            </div>

            <form autoComplete="off" onSubmit={submitSignup}>

                {
                    // loading ? <Loader /> : data.greska ? notifyError(data.greska) : data.info ? notifyError(data.info) :

                    <div className="form-imputs">
                        <div className="inputs">
                            <input type="txt" placeholder="Ime" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="txt" placeholder="Prezime" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type={showPass ? 'text' : 'password'} placeholder="Lozinka" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <IoEyeOutline className='visible__pass' onClick={handleShowPass} />
                        </div>
                        <div className="inputs">
                            <input type={showRepeatPass ? 'text' : 'password'} placeholder="Ponovite lozinku" name='repeatPassword' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                            <IoEyeOutline className='visible__pass' onClick={handleShowRepeatPass} />
                        </div>
                        <div className="inputs check">
                            <input type="checkbox" className="remember" name="terms" value={terms} onChange={(e) => setTerms(true)} />
                            <label htmlFor="remember" data-en='I agree with terms and conditions.' data-sr='Slažem se sa uslovima korišćenja.'>Slažem se sa uslovima korišćenja.</label>
                        </div>
                    </div>
                }

                <div className="inputs">
                    {/*<div className="inputs">
                                    <p>This site is protected by reCAPTCHA, the Google Privacy Policy <br /> and Terms of Service apply.</p>
                                    </div>*/}
                    {/*<Button text='Sign up' onClick={registerHandle}/> */}
                    <button type='submit' className="btn" data-en='Sign up' data-sr='Registracija'>Registracija</button>
                </div>

            </form>

            <div className="switch">
                <span onClick={cardRotation} data-en='Back to Login' data-sr='Nazad na prijavu'>Nazad na prijavu</span>
            </div>
        </div>
    )
}

export default SigninCard