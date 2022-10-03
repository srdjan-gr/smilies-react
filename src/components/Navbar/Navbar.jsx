import {React, useState} from 'react'
import './Navbar.css'
import '../MobileMenu/MobileMenu.css'
import { IoSearchOutline, IoBagOutline, IoEllipseOutline, IoEllipsisVerticalOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';


let iconStyle = {
    cursor: 'pointer',
    // transition: 'all 0.2s ease',
    fontSize: '1.8rem',
    marginLeft: '2rem'
};

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const addMobileMenuCLass = () => {
        setMobileMenu(!mobileMenu);
    };

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

                            <span><IoSearchOutline style={iconStyle} /></span>
                            <span><IoBagOutline style={iconStyle} /></span>

                            <span className='bag__full'> <IoEllipseOutline style={iconStyle} /></span>

                            <li className="login"><Link to="/Login">Log in / Sign In</Link></li>

                            <span className="mobile__menu" >
                                <IoEllipsisVerticalOutline style={iconStyle} onClick={addMobileMenuCLass}/>
                            </span>

                        </div>
                    </div>
                </div>
            </nav>

        <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
        </div>
    )
}

export default Navbar