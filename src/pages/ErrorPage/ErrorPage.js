import React from 'react'
import './ErrorPage.css';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';

const ErrorPage = ({ error, nologin }) => {

    if (error) {
        return (
            <div className="container">
                <div className="error">
                    {/*<h2 >Error!!! These page does not exists.</h2>*/}
                    <h1>404</h1>
                    <h2>Stranica ne postoji.</h2>

                    <Link className='error-link' to='/'>Nazad na početnu stranicu</Link>
                </div>
            </div>
        )
    } else if (nologin) {
        return (
            <div className="container">
                <div className="error">
                    {/*<h2 >Error!!! These page does not exists.</h2>*/}
                    <h2>Morate biti ulogovani da biste pristupili ovoj stranici!</h2>
                    <Link className='error-link' to='/Login'>Nazad na Login stranicu</Link>
                </div>
            </div>
        )
    }





}

export default ErrorPage