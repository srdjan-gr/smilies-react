import React, { useState, useEffect } from 'react'
import OrdersComponent from '../../components/Dashboard/Orders/Orders'
import DetailsWindow from '../../components/Dashboard/DetailsWindow/DetailsWindow'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import ErrorPage from '../ErrorPage/ErrorPage'
import jwt from 'jwt-decode'

const Orders = () => {
    document.title = 'Order';

    const [asideMenu, setAsideMenu] = useState(false);
    const [devider, setDevider] = useState(false);
    const [detailsWindow, setDetailsWindow] = useState(false);


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

    if (smiliesSession) {
        const token = jwt(smiliesSession);

        if (token.data.status == 'Admin' || token.data.status == 'Urednik') {

            return (
                <div className='dashboard-container'>
                    <Navbar asideMenu={asideMenu} setAsideMenu={setAsideMenu} />
                    <div className="dashboard__main">
                        <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu} />

                        <div className="main__section category__layout-grid">
                            <OrdersComponent detailsWindow={detailsWindow} setDetailsWindow={setDetailsWindow} />
                            <DetailsWindow detailsWindow={detailsWindow} setDetailsWindow={setDetailsWindow} />
                        </div>
                    </div>
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

export default Orders