import React, { useState, useEffect } from 'react'
import { RiLogoutBoxRLine, RiSettings5Line } from 'react-icons/ri'
import { Navigate, useNavigate } from 'react-router-dom'

const HeaderMenu = ({ headerMenu, setHeaderMenu }) => {

    const navigate = useNavigate();


    // Session
    const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");
    const sessionKill = () => {
        sessionStorage.removeItem("SmiliesOnlineLog");
        navigate('/')
    }

    return (
        <article className={`${headerMenu ? 'headerMenuActive' : ''} header__menu`}>
            <div className='header__menu-options' >
                <RiSettings5Line className='icon-main' />
                <span>Podesavanja</span>
            </div>
            <div className='header__menu-options' onClick={sessionKill} >
                <RiLogoutBoxRLine className='icon-main color-danger-muted' />
                <span>Odjava</span>
            </div>
        </article>
    )
}

export default HeaderMenu