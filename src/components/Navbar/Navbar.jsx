import React from 'react'
import './Navbar.css'
import { IoSearchOutline, IoBagOutline, IoEllipseOutline, IoEllipsisVerticalOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom';

let iconsStyle = {
    cursor: 'pointer',
    // transition: 'all 0.2s ease',
    fontSize: '1.8rem',
    marginLeft: '2rem'
};

const Navbar = () => {
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

                            <span><IoSearchOutline style={iconsStyle} /></span>
                            <span><IoBagOutline style={iconsStyle} /></span>

                            <span className='bag__full'> <IoEllipseOutline style={iconsStyle} /></span>

                            <li className="login"><Link to="/LoginSignein">Log in / Sign In</Link></li>

                            <span className="mobile__menu" ><IoEllipsisVerticalOutline style={iconsStyle} /></span>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar