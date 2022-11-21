import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from "../../redux/features/subcategories/subCategorySlice";

// styling
import './SubCategoryMenu.css'
import { IoCloseOutline } from 'react-icons/io5';
import submenuImg from '../../assets/img/home-sections/SmiliesEveryday-01.jpg'


const SubCategoryMenu = ({ subCategoryMenu, setSubCategoryMenu, categoryId, setAccentColor }) => {

    const closeSubcategoryMenu = () => {
        setSubCategoryMenu(!subCategoryMenu);
    };

    // Redux
    const subCategoryList = useSelector((state) => state.subCategoryList)
    const { data, loading, message } = subCategoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

    return (
        <section className={`${subCategoryMenu ? 'submenuActive' : ''} submenu`}>

            <div className="container">
                <div className="submenu__container">
                    <span><IoCloseOutline className='icon-main'
                        onClick={() =>
                            [
                                closeSubcategoryMenu(),
                                // setAccentColor()
                            ]
                        } /></span>

                    <div className="submenu__image">
                        <img src={submenuImg} alt="Smilies image" />
                    </div>

                    <div className="submenu__subcategories">
                        <ul>
                            {
                                data.map((podKategorija, idx) => {

                                    if (categoryId == podKategorija.kategorija_kat_id) {

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


                                                onClick={closeSubcategoryMenu}
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
            </div>
        </section>
    )
}

export default SubCategoryMenu