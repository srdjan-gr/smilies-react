import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Message from '../Message/Message';


// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from "../../redux/features/subcategories/subCategorySlice";
// Data
// import { podKategorije, kategorije } from '../../data';
// import apiSubCategory from '../../api/subCategory'

// styling
import './SubCategoryMenu.css'
import { IoCloseOutline } from 'react-icons/io5';
import submenuImg from '../../assets/img/home-sections/SmiliesEveryday-01.jpg'

let iconStyle = {
    cursor: 'pointer',
    fontSize: '2.2rem',
};



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

    // Poruke
    const notifyError = (odgovor) => {
        toast.error(<Message error={odgovor} />)
    }

    return (
        <section className={`${subCategoryMenu ? 'submenuActive' : ''} submenu`}>

            <div className="container">
                <div className="submenu__container">
                    <span><IoCloseOutline style={iconStyle} 
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

                    {
                        loading ? <p>Loading...</p> : data.greska ? <h3>Greška prilikom učitavanja!</h3> :

                        <ul>
                            {
                                data.map((podKategorija, idx) => {
    
                                    if (categoryId == podKategorija.kategorija_kat_id) {
    
                                        // Mala slova za slanje u URL
                                        let imePodkategorijeMala = podKategorija.podkat_naziv_en;
                                        let malaSlova = imePodkategorijeMala.toLowerCase();
    
                                        // Podkategorija bez M i Z oznaka
                                        let celoIme = podKategorija.podkat_naziv_en;
                                        let skracenoIme = celoIme.split('.');
    
                                        return (
                                            <li key={idx}
                                                id={podKategorija.podkat_id}
    
    
                                                onClick={closeSubcategoryMenu}
                                                data-en={podKategorija.podkat_naziv_en} data-sr={podKategorija.podkat_naziv_sr}>
    
                                                <Link to={`/products/${podKategorija.podkat_id}`}>{skracenoIme[1]}</Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubCategoryMenu