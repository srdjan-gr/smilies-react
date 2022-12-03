import React, { useState, useEffect } from 'react'
import AddProduct from '../../components/Dashboard/AddProduct/AddProduct';
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import ErrorPage from '../ErrorPage/ErrorPage'
import jwt from 'jwt-decode'

const CreateProduct = () => {

    const [asideMenu, setAsideMenu] = useState(false);
    const [devider, setDevider] = useState(false);

    useEffect(() => {
        const asideMenuStorage = localStorage.getItem('sidebar');
        if (asideMenuStorage === 'closed') {
            setAsideMenu(true);
        }
    }, [asideMenu]);

    // Session
    const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");
    const sessionKill = () => {
        sessionStorage.removeItem("SmiliesOnlineLog");
    }
    const token = jwt(smiliesSession);

    if (smiliesSession) {
        if (token.data.status == 'Admin' || token.data.status == 'Urednik') {

            return (
                <div className='dashboard-container'>
                    <Navbar asideMenu={asideMenu} setAsideMenu={setAsideMenu} />
                    <div className="dashboard__main">
                        <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu} />

                        <div className="main__section ">
                            {/*Ovde idu komponente svake stranice. iznad divovi ostaju isti na svakoj stranici*/}
                            <AddProduct />


                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='dashboard-container'>
                    <ErrorPage notAdmin />
                </div>
            )
        }
    } else {
        return (
            <div className='dashboard-container'>
                <ErrorPage nologin />
            </div>
        )
    }
}

export default CreateProduct