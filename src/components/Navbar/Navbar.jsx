import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

import MobileMenu from '../MobileMenu/MobileMenu';
import Search from '../Search/Search';
import Bag from '../Bag/Bag';

import './Navbar.css'
import { IoSearchOutline, IoBagOutline, IoEllipseOutline, IoEllipsisVerticalOutline, IoEllipse } from 'react-icons/io5'

import { useSelector } from 'react-redux';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [bag, setBag] = useState(false);
    const [bagModal, setBagModal] = useState(false);

    const cart = useSelector((state) => state.cartList);

    const addMobileMenuCLass = () => {
        setMobileMenu(!mobileMenu);
    };

    const openSearch = () => {
        setSearch(!search);
    }

    const openBag = () => {
        setBagModal(!bagModal);
        setBag(!bag);
    }

    const bagFull = () => {
        if (cart.cartTotalQuantity === 0) {
            return (
                <span className='bag__full'></span>
            )
        } else {
            return (
                <span className='bag__full'>
                    <label htmlFor="" className='icon-bag' onClick={openBag}>{cart.cartData.length}</label>
                </span>
            )
        }
    }

    return (
        <div>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar__left" id="navbar__left">

                            <div className="lang-menu">
                                <li className="lang-active">EN</li>
                                <li>SR</li>
                            </div>

                            <div className='pages-menu'>
                                <li className="current"><Link to="/" data-en='Home' data-sr='Početna'>Početna</Link></li>
                                <li><Link to="/Contact" data-en='Contact' data-sr='Kontakt'>Kontakt</Link></li>
                                <li><Link to="/About" data-en='About Us' data-sr='O nama'>O nama</Link></li>
                            </div>

                        </div>
                        <div className="navbar__right">

                            <span><IoSearchOutline className='icon-small ml-2' onClick={openSearch} /></span>
                            <span className='bag__icons-container'>
                                <IoBagOutline className='icon-small ml-2' onClick={openBag} />
                                {bagFull()}
                            </span>


                            <span className="mobile__menu" >
                                <IoEllipsisVerticalOutline className='icon-small ml-2' onClick={addMobileMenuCLass} />
                            </span>

                            <li className="login"><Link to="/Login" data-en='Log in / Sign In' data-sr='Prijava / Registracija'>Prijava / Registracija</Link></li>
                        </div>
                    </div>
                </div>
            </nav>

            <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <Search search={search} setSearch={setSearch} />

            <Bag bag={bag} setBag={setBag} bagModal={bagModal} setBagModal={setBagModal} />
        </div>
    )
}

export default Navbar