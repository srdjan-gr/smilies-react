import React, { useState, useEffect } from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import ProductList from '../../components/Dashboard/ProductList/ProductList'
import ErrorPage from '../ErrorPage/ErrorPage'
import jwt from 'jwt-decode'

import { useDispatch } from 'react-redux';
import { getDashOrders } from "../../redux/features/orders/ordersSlice"

const DashProductList = () => {
    const [asideMenu, setAsideMenu] = useState(false);
    const [devider, setDevider] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const asideMenuStorage = localStorage.getItem('sidebar');
        if (asideMenuStorage === 'closed') {
            setAsideMenu(true);
        }
        dispatch(getDashOrders());
    }, [asideMenu, dispatch]);

    // Session
    const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");
    const sessionKill = () => {
        sessionStorage.removeItem("SmiliesOnlineLog");
    }

    if (smiliesSession) {
        const token = jwt(smiliesSession);

        if (token.data.status == 'Admin' || token.data.status == 'Urednik') {

            return (
                <div className='dashboard-container'>
                    <Navbar asideMenu={asideMenu} setAsideMenu={setAsideMenu} />
                    <div className="dashboard__main">
                        <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu} />

                        <div className="main__section ">
                            {/*Ovde idu komponente svake stranice. iznad divovi ostaju isti na svakoj stranici*/}
                            <ProductList />
                        </div>
                    </div>
                    <img src="../../" alt="" />
                </div>
            )
        } else {
            return (
                <ErrorPage notAdmin />
            )
        }
    } else {
        return (
            <ErrorPage nologin />
        )
    }
}

export default DashProductList