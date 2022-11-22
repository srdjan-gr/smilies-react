import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from "../../redux/features/categories/categorySlice";
import { getSubCategories } from "../../redux/features/subcategories/subCategorySlice";


// Styling
import './MobileMenu.css';
import logo from '../../assets/img/logos/Logo100px.png';
import { IoChevronDownOutline, IoCloseOutline } from 'react-icons/io5';
import { current } from '@reduxjs/toolkit';

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {

    // Redux
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, data, message } = categoryList;

    const subCategoryList = useSelector((state) => state.subCategoryList)
    const { subData, subLoading, subMessage } = subCategoryList;

    const dispatch = useDispatch();

    const [openSubcategory, setOpenSubcategory] = useState(false);
    const [submenuId, setSubmenuId] = useState('');

    useEffect(() => {
        dispatch(getSubCategories());
        dispatch(getCategories());
    }, [dispatch]);


    const closeMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const openSubcategoryMenu = (id) => {
        // e.currentTarget.classList.toggle('subcategoryActive');

        if (id) {
            setOpenSubcategory(!openSubcategory)
        }
        console.log(id);
    };



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
            <div className="mobile-categories">
                {
                    data.map((kategorija, idx) => {

                        return (
                            <span className='mobile-categories-single' key={idx}>

                                <div className={`${openSubcategory ? 'subcategoryActive' : ''} mobile-categories-header`}>

                                
                                    <span className="menuLink"
                                        data-en={kategorija.kat_naziv_en} data-sr={kategorija.kat_naziv_sr}
                                        onClick={() => openSubcategoryMenu(kategorija.kat_id)}>{kategorija.kat_naziv_en}
                                    </span>

                                    <span span className="icon-main"><IoChevronDownOutline /></span>

                                    <div className='mobile-subcategories'>
                                        <ul>
                                            {
                                                subData.map((podKategorija, idx) => {

                                                    if (kategorija.kat_id == podKategorija.kategorija_kat_id) {
                                                        // Mala slova za slanje u URL
                                                        let imePodkategorijeMala = podKategorija.podkat_naziv_en;
                                                        let malaSlova = imePodkategorijeMala.toLowerCase();

                                                        // Podkategorija bez M i Z oznaka
                                                        let celoImeEn = podKategorija.podkat_naziv_en;
                                                        let skracenoImeEn = celoImeEn.split('.');
                                                        let celoImeSr = podKategorija.podkat_naziv_sr;
                                                        let skracenoImeSr = celoImeSr.split('.');

                                                        return (
                                                            <li key={idx}
                                                                id={podKategorija.podkat_id}
                                                                data-en={skracenoImeEn} data-sr={skracenoImeSr}>

                                                                <Link to={`/products/${podKategorija.podkat_id}`}>{skracenoImeSr[1]}</Link>
                                                            </li>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileMenu