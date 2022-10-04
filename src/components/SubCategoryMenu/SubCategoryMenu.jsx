import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Data
// import { podKategorije, kategorije } from '../../data';
import apiSubCategory from '../../api/subCategory'

// styling
import './SubCategoryMenu.css'
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

    // API 
    const [podKategorije, setPodKategorije] = useState([]);

    useEffect(() => {
        getPodKategorije();
    }, []);

    const getPodKategorije = async () => {

        try {
            const response = await apiSubCategory.get("/subCategory");
            setPodKategorije(response.data);

        } catch (err) {
            // Ako nije response sa statusom 200  
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`)
            }
        }
    }


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
                            {
                                podKategorije.map((podKategorija, idx) => {

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

                                                <Link to={`/products/${podKategorija.podkat_id}`} >{skracenoIme[1]}</Link>
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