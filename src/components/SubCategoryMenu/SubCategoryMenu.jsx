import { React } from 'react'
import './SubCategoryMenu.css'
import { Link } from 'react-router-dom';

import { podKategorije, kategorije } from '../../data';
import { IoCloseOutline } from 'react-icons/io5';
import submenuImg from '../../assets/img/home-sections/SmiliesEveryday-01.jpg'

let iconStyle = {
    cursor: 'pointer',
    fontSize: '2.2rem',
};

const SubCategoryMenu = ({ subCategoryMenu, setSubCategoryMenu, categoryId }) => {

    const closeSubcategoryMenu = () => {
        setSubCategoryMenu(!subCategoryMenu);
    };

    // console.log(categoryId)

    return (
        <section className={`${subCategoryMenu ? 'submenuActive' : ''} submenu`}>

            <div className="container">
                <div className="submenu__container">
                    <span><IoCloseOutline style={iconStyle} onClick={closeSubcategoryMenu} /></span>

                    <div className="submenu__image">
                        <img src={submenuImg} alt="Smilies image" />
                    </div>

                    <div className="submenu__subcategories">
                        <ul>

                            {podKategorije.map((podKategorija, idx) => {

                                if (categoryId == podKategorija.kategorija_id) {

                                    // Mala slova za slanje u URL
                                    let imePodkategorijeMala = podKategorija.ime_podkategorije;
                                    let malaSlova = imePodkategorijeMala.toLowerCase();

                                    // Podkategorija bez M i Z oznaka
                                    let celoIme = podKategorija.ime_podkategorije;
                                    let skracenoIme = celoIme.split('.');

                                    return (
                                        <li key={idx}
                                            id={podKategorija.kategorija_id}
                                            onClick={closeSubcategoryMenu}>

                                            <Link to={`/products/${malaSlova}`} >{skracenoIme[1]}</Link>
                                        </li>
                                    )
                                }

                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SubCategoryMenu