import React from 'react'
import './ErrorPage.css';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';

const ErrorPage = () => {
    return (

        <div>

            <Navbar />
            <Header />
            <Devider />

            <div className="container">
                <div className="error">
                    {/*<h2 >Error!!! These page does not exists.</h2>*/}
                    <h2>404 Stranica ne postoji.</h2>
                </div>
            </div>

        </div>


    )
}

export default ErrorPage