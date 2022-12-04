import React from 'react'
import './ErrorPage.css';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/img/logos/Smilies-Black-2022.svg';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';

const ErrorPage = ({ error, nologin, notAdmin, empyBag }) => {

    if (error) {
        return (
            <div>
                <Navbar />
                <Header />
                <Devider />
                <div className="container">
                    <div className="error">


                        <h1>404</h1>
                        <h2>Stranica ne postoji.</h2>

                        <Link className='error-link' to='/'>Nazad na početnu stranicu</Link>
                    </div>
                </div>
            </div>
        )
    } else if (nologin) {
        return (
            <div>
                <Navbar />
                <Header />
                <Devider />

                <div className="container">
                    <div className="error">

                        {/*<img src={logo} alt="Smilies Logo" />*/}
                        <h2>Morate biti ulogovani da biste pristupili ovoj stranici!</h2>

                        <Link className='error-link' to='/Login'>Nazad na Login stranicu</Link>
                    </div>
                </div>
            </div>
        )
    } else if (notAdmin) {
        return (
            <div>
                <Navbar />
                <Header />
                <Devider />

                <div className="container">
                    <div className="error">

                        <h2>Pristup ovoj stranici imaju samo Admin ili Urednik!</h2>

                        <Link className='error-link' to='/'>Nazad na početnu stranicu</Link>
                    </div>
                </div>
            </div>
        )
    } else if (empyBag) {
        return (
            <div>
                <Navbar />
                <Header />
                <Devider />

                <div className="container">
                    <div className="error">

                        <h2>Vaša korpa je prazna!</h2>

                        <Link className='error-link' to='/'>Nazad na početnu stranicu</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default ErrorPage