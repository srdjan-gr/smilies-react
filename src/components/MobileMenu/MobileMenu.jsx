import React from 'react'
import './MobileMenu.css';

import { Link } from 'react-router-dom';
import { kategorije } from '../../data';
import { podKategorije } from '../../data';

import logo from '../../assets/img/logos/Logo100px.png';
import { IoChevronDownOutline, IoCloseOutline } from 'react-icons/io5';

let iconStyle = {
    cursor: 'pointer',
    fontSize: '2.4rem',
};

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {

    const closeMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div className={`${mobileMenu ? 'menuActive' : ''} mobile-menu`}>

            <span className='closeMobileMenu' onClick={closeMobileMenu}><IoCloseOutline style={iconStyle} /></span>

            <div className="mobile-logo">
                <Link to='/'><img src={logo} alt="Smilies logo" /></Link>
            </div>
            <div className="mobile-pages" id="mobilePages">
                <ul>
                    <li className="current"><Link onClick={closeMobileMenu} to="/">Home</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/contact">Contact</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/About">About Us</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/Login">Log in / Sign In</Link></li>
                </ul>
            </div>
            <div className="mobile-categories" id="mobileCategories">
                <ul>

                    {kategorije.map((kategorija, idx) => {

                        return (
                            <li id="Woman">
                                <div className="mobile-category-header" key={idx}>
                                    <span className="menuLink"
                                        id={kategorija.id}>{kategorija.ime_kategorije}
                                    </span>
                                    <span
                                        className="menu-icon"
                                    ><IoChevronDownOutline /></span>
                                </div>

                                <div className="mobile-subcategories">
                                    <ul>
                                        {podKategorije.map((podKategorija, idx) => {
                                            return (
                                                <li className="category-menu-item"
                                                    key={idx}
                                                    id={podKategorija.kategorija_id}>

                                                    <Link to={`/products/${podKategorija.id} `}>{podKategorija.ime_podkategorije}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default MobileMenu