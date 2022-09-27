import { React, useState } from 'react'
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

    const [openSubcategory, setOpenSubcategory] = useState(true);
    const [submenuId, setSubmenuId] = useState('');

    const openSubcategoryMenu = (id) => {

        setOpenSubcategory(!openSubcategory)

    };

    return (
        <div className={`${mobileMenu ? 'menuActive' : ''} mobile-menu`}>

            <span className='closeMobileMenu' onClick={closeMobileMenu}><IoCloseOutline style={iconStyle} /></span>

            <div className="mobile-logo">
                <Link to='/'><img onClick={closeMobileMenu} src={logo} alt="Smilies logo" /></Link>
            </div>
            <div className="mobile-pages" id="mobilePages">
                <ul>
                    <li className="current"><Link onClick={closeMobileMenu} to="/">Home</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/Contact">Contact</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/About">About Us</Link></li>
                    <li><Link onClick={closeMobileMenu} to="/Login">Log in / Sign In</Link></li>
                </ul>
            </div>
            <div className="mobile-categories" id="mobileCategories">
                <ul>

                    {kategorije.map((kategorija, idx) => {

                        return (
                            <li id={kategorija.id}>

                                <div className="mobile-category-header" key={idx}>
                                    <span className="menuLink"
                                        onClick={() => openSubcategoryMenu(kategorija.id)}>{kategorija.ime_kategorije}
                                    </span>

                                    <span className="menu-icon"><IoChevronDownOutline /></span>
                                </div>

                                <div className={`${openSubcategory ? 'subcategoryActive' : ''} mobile-subcategories`}>
                                    <ul>
                                        {podKategorije.map((podKategorija, idx) => {

                                            // {Provera da li je ID kategorije jednak KATEGORIJA_ID iz podkategorija}
                                            if (kategorija.id == podKategorija.kategorija_id) {

                                                // Mala slova za slanje u URL
                                                let imePodkategorijeMala = podKategorija.ime_podkategorije;
                                                let malaSlova = imePodkategorijeMala.toLowerCase();

                                                // Podkategorija bez M i Z oznaka
                                                let celoIme = podKategorija.ime_podkategorije;
                                                let skracenoIme = celoIme.split('.');

                                                return (
                                                    <li className="category-menu-item"
                                                        key={idx}
                                                        id={podKategorija.kategorija_id}
                                                        onClick={closeMobileMenu}>

                                                        <Link to={`/products/${malaSlova} `}>{skracenoIme[1]}</Link>
                                                    </li>
                                                )
                                            }
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