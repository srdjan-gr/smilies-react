import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import { toast } from 'react-toastify';
import Message from '../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from "../../redux/features/categories/categorySlice";

// Styling
import './Header.css'
import logo from '../../assets/img/logos/Logo100px.png';
import Loader from '../Loader/Loader';


const Header = () => {

    const [subCategoryMenu, setSubCategoryMenu] = useState(false);
    const [categoryId, setCategoryId] = useState('');

    // Redux
    const categoryList = useSelector((state) => state.categoryList)
    const { loading, data, message } = categoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    // Poruke
    const notifyError = (odgovor) => {
        toast.error(<Message error={odgovor} />)
    }

    // Funkcija koja otvara subMenu klikom na Kategoriju. 
    // Ako je submenu otvoren klikom na drugu kategoriju odmah ce da ucita podkategorije iz kliknute kategorije bez zatvaranja subMenu-ja. 
    // Ako se klikne drugi put na katefgoriju koja je otvorena funkcija ce da zatvori subMenu
    const loadSubMenu = (katId) => {
        if (!subCategoryMenu || katId === categoryId) {
            setSubCategoryMenu(!subCategoryMenu);
            // accentColorLink(!accentColor);
        }
    }


    // Funkcija koja treba da oboji akcent bojom meni ciji je subMenu aktivan(otvoren)
    const [accentColor, setAccentColor] = useState(false);
    // const accentColorLink = () => {   
    //     setAccentColor(accentColor => !accentColor);  
    // }


    return (
        <div>
            <header>
                <div className="nav__logo">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="menus">

                        {
                            loading ? <Loader /> : data.greska ? <h3>{notifyError(data.greska)}</h3> :
                                <ul>
                                    {
                                        data.map((kategorija, idx) => {
                                            return (
                                                <li key={idx} >
                                                    <span className={`${accentColor ? ' accent' : ''}`}
                                                        onClick={() =>
                                                            [
                                                                loadSubMenu(kategorija.kat_id),
                                                                setCategoryId(kategorija.kat_id),
                                                            ]
                                                        }

                                                        data-en={kategorija.kat_naziv_en}
                                                        data-sr={kategorija.kat_naziv_sr}
                                                        id={kategorija.kat_id}> {kategorija.kat_naziv_en}
                                                    </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                        }

                    </div>
                </div>
            </header>

            {/*<SubCategoryMenu subCategoryMenu={subCategoryMenu} setSubCategoryMenu={setSubCategoryMenu} categoryId={categoryId} accentColorLink={accentColor} setAccentColor={setAccentColor} />*/}
        </div>
    )
}

export default Header