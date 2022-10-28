import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';

import MobileMenu from '../MobileMenu/MobileMenu';
import Search from '../Search/Search';
import Bag from '../Bag/Bag';

import './Navbar.css'
import '../MobileMenu/MobileMenu.css'
import { IoSearchOutline, IoBagOutline, IoEllipseOutline, IoEllipsisVerticalOutline } from 'react-icons/io5'
let iconStyle = {
    cursor: 'pointer',
    // transition: 'all 0.2s ease',
    fontSize: '1.8rem',
    marginLeft: '2rem'
};

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [bag, setBag] = useState(false);

    const addMobileMenuCLass = () => {
        setMobileMenu(!mobileMenu);
    };

    const openSearch = () => {
        setSearch(!search);
    }

    const openBag = () => {
        setBag(!bag);
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
                                <li className="current"><Link to="/">Home</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/About">About Us</Link></li>
                            </div>

                        </div>
                        <div className="navbar__right">

                            <span><IoSearchOutline style={iconStyle} onClick={openSearch} /></span>
                            <span><IoBagOutline style={iconStyle} onClick={openBag}/></span>

                            <span className='bag__full'> <IoEllipseOutline style={iconStyle} /></span>

                            <li className="login"><Link to="/Login">Log in / Sign In</Link></li>

                            <span className="mobile__menu" >
                                <IoEllipsisVerticalOutline style={iconStyle} onClick={addMobileMenuCLass}/>
                            </span>

                        </div>
                    </div>
                </div>
            </nav>

           { <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}
            <Search search={search} setSearch={setSearch}/>

            <Bag bag={bag} setBag={setBag} />
        </div>
    )
}

export default Navbar