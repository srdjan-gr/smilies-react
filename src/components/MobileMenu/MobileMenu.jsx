import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from "../../redux/features/categories/categorySlice";
import { getSubCategories } from "../../redux/features/subcategories/subCategorySlice";


// Styling
import logo from '../../assets/img/logos/Smilies-Black-2022.svg';
import { IoChevronDownOutline, IoCloseOutline } from 'react-icons/io5';

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {

    // Redux
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, data, message } = categoryList;
    const subCategoryList = useSelector((state) => state.subCategoryList)
    const { subData, subLoading, subMessage } = subCategoryList;

    const dispatch = useDispatch();

    const [openSubcategory, setOpenSubcategory] = useState(false);
    const [clickedMenu, setClickedMenu] = useState('');

    useEffect(() => {
        dispatch(getSubCategories());
        dispatch(getCategories());
    }, [dispatch]);


    const closeMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const openSubcategoryMenu = () => {

        setOpenSubcategory(!openSubcategory)

    };



    return (
        <aside className={`${mobileMenu ? 'menuActive' : ''} mobile-menu`}>

            <span className='closeMobileMenu' onClick={closeMobileMenu}><IoCloseOutline className='icon-xl' /></span>
            <div className="mobile-logo">
                <img src={logo} alt="Smilies logo" />
            </div>

            <div className="mobile-pages">
                <ul>
                    <li><Link onClick={closeMobileMenu} data-en='Home' data-sr='Početna' to="/">Početna</Link></li>
                    <li><Link onClick={closeMobileMenu} data-en='Contact' data-sr='Kontakt' to="/Contact">Kontakt</Link></li>
                    <li><Link onClick={closeMobileMenu} data-en='About Us' data-sr='O nama' to="/About">O nama</Link></li>
                    <li><Link onClick={closeMobileMenu} data-en='Log in / Sign In' data-sr='Prijava / Registracija' to="/Login">Prijava / Registracija</Link></li>
                </ul>
            </div>

            {
                loading ? <p>Loading...</p> : data.greska ? <h3 className='color-danger'>{data.greska}</h3> :
                data.map((kategorija, idx) => {
                    if (kategorija.kat_id == clickedMenu) {

                        return (
                            <article key={idx} className={`${openSubcategory ? 'subcategoryActive' : ''} mobile__categories`} >
                                <div className='category__title' onClick={() => [openSubcategoryMenu(), setClickedMenu(kategorija.kat_id)]}>
                                    <span data-en={kategorija.kat_naziv_en} data-sr={kategorija.kat_naziv_sr}>{kategorija.kat_naziv_sr}</span>
                                    <IoChevronDownOutline className="icon-small icon-rotate" />
                                </div>

                                <div className='subcategories'>
                                    <ul>
                                        {
                                            subData.map((podKat, idx) => {

                                                if (kategorija.kat_id == podKat.kategorija_kat_id) {
                                                    // Mala slova za slanje u URL
                                                    let imePodkategorijeMala = podKat.podkat_naziv_en;
                                                    let malaSlova = imePodkategorijeMala.toLowerCase();

                                                    // Podkategorija bez M i Z oznaka
                                                    let celoImeEn = podKat.podkat_naziv_en;
                                                    let skracenoImeEn = celoImeEn.split('.');
                                                    let celoImeSr = podKat.podkat_naziv_sr;
                                                    let skracenoImeSr = celoImeSr.split('.');
                                                    return (
                                                        <li key={idx}
                                                            id={podKat.podkat_id}
                                                            data-en={skracenoImeEn} data-sr={skracenoImeSr}
                                                            onClick={closeMobileMenu}>

                                                            <Link to={`/products/${podKat.podkat_id}`}>{skracenoImeSr[1]}</Link>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>
                                </div>
                            </article>
                        )
                    } else {
                        return (
                            <article key={idx} className={`${openSubcategory ? 'subcategoryActive' : ''} mobile__categories`} >
                                <div className='category__title' onClick={() => [openSubcategoryMenu(), setClickedMenu(kategorija.kat_id)]}>
                                    <span data-en={kategorija.kat_naziv_en} data-sr={kategorija.kat_naziv_sr}>{kategorija.kat_naziv_sr}</span>
                                    <IoChevronDownOutline className="icon-small" />
                                </div>
                            </article>
                        )
                    }


                })
            }

        </aside>
    )
}

export default MobileMenu