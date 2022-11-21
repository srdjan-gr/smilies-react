import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Data
// import apiSubCategory from '../../api/subCategory'
// import apiCategory from '../../api/category'

// Styling
import './MobileMenu.css';
import logo from '../../assets/img/logos/Logo100px.png';
import { IoChevronDownOutline, IoCloseOutline } from 'react-icons/io5';

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {

    const closeMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const [openSubcategory, setOpenSubcategory] = useState(false);
    const [submenuId, setSubmenuId] = useState('');

    const openSubcategoryMenu = (id) => {
        setOpenSubcategory(!openSubcategory)
    };

    // API category
    const [kategorije, setKategorije] = useState([]);

    useEffect(() => {
        getKategorije();
    }, []);


    const getKategorije = async () => {

        // try {
        //     const response = await apiCategory.get("/category");
        //     setKategorije(response.data);

        // } catch (err) {
        //     // Ako nije response sa statusom 200  
        //     if (err.response) {
        //         console.log(err.response.data);
        //         console.log(err.response.status);
        //         console.log(err.response.headers);
        //     } else {
        //         console.log(`Error: ${err.message}`)
        //     }
        // }
    }

    // API subcategory
    const [podKategorije, setPodKategorije] = useState([]);

    useEffect(() => {
        getPodKategorije();
    }, []);

    const getPodKategorije = async () => {

        // try {
        //     const response = await apiSubCategory.get("/subCategory");
        //     setPodKategorije(response.data);

        // } catch (err) {
        //     // Ako nije response sa statusom 200  
        //     if (err.response) {
        //         console.log(err.response.data);
        //         console.log(err.response.status);
        //         console.log(err.response.headers);
        //     } else {
        //         console.log(`Error: ${err.message}`)
        //     }
        // }
    }


    return (
        <div className={`${mobileMenu ? 'menuActive' : ''} mobile-menu`}>

            <span className='closeMobileMenu' onClick={closeMobileMenu}><IoCloseOutline className='icon-main' /></span>

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
                    {/*
                        kategorije.map((kategorija, idx) => {

                            return (
                                <li id={kategorija.kat_id} key={idx}>

                                    <div className="mobile-category-header" >
                                        <span className="menuLink"
                                            data-en={kategorija.kat_naziv_en} data-sr={kategorija.kat_naziv_sr}
                                            onClick={() => openSubcategoryMenu(kategorija.kat_id)}>{kategorija.kat_naziv_en}
                                        </span>

                                        <span className="menu-icon"><IoChevronDownOutline /></span>
                                    </div>

                                    <div className={`${openSubcategory ? 'subcategoryActive' : ''} mobile-subcategories`}>
                                        <ul>
                                            {podKategorije.map((podKategorija, idx) => {

                                                // {Provera da li je ID kategorije jednak KATEGORIJA_ID iz podkategorija}
                                                if (kategorija.kat_id == podKategorija.kategorija_kat_id) {

                                                    // Mala slova za slanje u URL
                                                    let imePodkategorijeMala = podKategorija.podkat_naziv_en;
                                                    // let malaSlova = imePodkategorijeMala.toLowerCase();

                                                    // Podkategorija bez M i Z oznaka
                                                    let celoIme = podKategorija.podkat_naziv_en;
                                                    let skracenoIme = celoIme.split('.');

                                                    return (
                                                        <li className="category-menu-item"
                                                            key={idx}
                                                            id={podKategorija.kategorija_id}
                                                            onClick={closeMobileMenu}
                                                            data-en={podKategorije.kat_naziv_en} data-sr={podKategorije.kat_naziv_sr}>
                                                            
                                                            <Link to={`/products/${podKategorija.podkat_id} `}>{skracenoIme[1]}</Link>
                                                        </li>
                                                    )
                                                }
                                            })}
                                        </ul>
                                    </div>

                                </li>
                            )
                        })
                    */}
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu