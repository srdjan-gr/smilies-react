import { React, useState } from 'react'

// Styling
import './LoginCard.css'
import { IoPersonOutline, IoPersonAddOutline } from 'react-icons/io5'
import Button from '../Button/Button'
import Message from '../Message/Message';


const LoginCard = () => {

    const [loginCard, setLoginCard] = useState(false);

    const cardRotation = () => {
        setLoginCard(!loginCard);
    };

    return (
        <section>
            <div className="login-container">

                <div className={`${loginCard ? 'loginActive' : ''} login-card loginCard `} id="">

                    <div className="login-card-header">
                        <span><IoPersonOutline className='icon--big'/></span>
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


                <div className={`${loginCard ? 'sigupActive' : ''} login-card signupCard `} id="">

                    <div className="login-card-header">
                        <span><IoPersonAddOutline className='icon--big'/></span>
                        <h1>Signup</h1>
                    </div>

                    <form id="myForm" action="" method="POST" autoComplete="off">

                        <div className="form-imputs">
                            <div className="inputs">
                                <input type="email" name="email" id="emailSignup" placeholder="Email" />
                            </div>
                            <div className="inputs">
                                <input type="password" name="password" id="passwordSignup" placeholder="Password" />
                            </div>
                            <div className="inputs">
                                <input type="password" name="password" id="passwordRepeat" placeholder="Repeat password" />
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