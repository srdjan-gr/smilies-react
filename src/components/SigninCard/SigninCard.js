import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader'
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from "../../redux/features/registerSlice/registerSlice";

// Styling
import '../LoginCard/LoginCard.css'
import { IoPersonAddOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';
import { useEffect } from 'react';


const SigninCard = ({ loginCard, setLoginCard }) => {

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    const logUserInfo = useSelector((state) => state.registerUser);
    const { data, loading } = logUserInfo;

    useEffect(() => {
        registerUser({});
    });


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const dispatch = useDispatch();

    const submitSignup = (e) => {
        e.preventDefault();

        dispatch(registerUser({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            repeat_password: repeatPassword,
            terms: terms

        }, [dispatch]));

        // setTimeout(() => {
        validacija();
        // }, 3000);
    }


    const validacija = () => {

        //     // Prikaz gresaka iz API - ja
        if (loading == true) {
            return <Loader />
        } else if (data.greska) {
            notifyError(data.greska)
        } else if (data.info) {
            notifyInfo(data.info)
        } else if (data.success) {
            notifySuccess(data.uspesno)
            setLoginCard(!loginCard);

            setFirstName({ first_name: '' });
            setLastName({ last_name: '' });
            setPassword({ password: '' });
            setRepeatPassword({ repeat_password: '' });
            setTerms({ terms: false });
        }
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


    return (

        <div className={`${loginCard ? 'sigupActive' : ''} login-card signupCard signup`} id="">



            <div className="login-card-header">
                <span><IoPersonAddOutline className='icon--big' /></span>
                <h1>Signup</h1>
            </div>

            <form autoComplete="off" onSubmit={submitSignup}>

                {
                    // loading ? <Loader /> : data.greska ? notifyError(data.greska) : data.info ? notifyError(data.info) :

                    <div className="form-imputs">


                        <div className="inputs">
                            <input type="txt" placeholder="Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="txt" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <input type="password" placeholder="Repeat password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>
                        <div className="inputs check">
                            <input type="checkbox" name="terms" className="remember" value={terms} onChange={(e) => setTerms(true)} />
                            <label htmlFor="remember">I agree with terms and conditions.</label>
                        </div>

                    </div>


                }

                <div className="inputs">
                    {/*<div className="inputs">
                                    <p>This site is protected by reCAPTCHA, the Google Privacy Policy <br /> and Terms of Service apply.</p>
                                    </div>*/}
                    {/*<Button text='Sign up' onClick={registerHandle}/> */}
                    <button type='submit' className="btn" >Sign up</button>
                </div>

            </form>

            <div className="switch">
                <span onClick={cardRotation} >Back to Login</span>
            </div>
        </div>
    )
}

export default SigninCard