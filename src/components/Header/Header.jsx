import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';

// Data
import apiCategory from '../../api/category'

// Styling
import './Header.css'
import logo from '../../assets/img/logos/Logo100px.png';


const Header = () => {

    const [subCategoryMenu, setSubCategoryMenu] = useState(false);
    const [categoryId, setCategoryId] = useState('');

    // API
    const [kategorije, setKategorije] = useState([]);

    useEffect(() => {
        getKategorije();
    }, []);

    const getKategorije = async () => {

        try {
            const response = await apiCategory.get("/category");
            setKategorije(response.data);
            
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
    
    // Funkcija koja otvara subMenu klikom na Kategoriju. 
    // Ako je submenu otvoren klikom na drugu kkategoriju odmah ce da ucite podkategorije iz kliknute kategorije bez zatvaranja subMenu. 
    // Ako se klikne drugi put na katefgoriju koja je otvorena funkcija ce da zatvori subMenu

    const [accentColor, setAccentColor ] = useState(false);

    const accentColorLink = () => {   
        setAccentColor(accentColor => !accentColor);  
    }

    const loadSubMenu = (katId) => {
        if(!subCategoryMenu || katId === categoryId){

            setSubCategoryMenu(!subCategoryMenu);
            // accentColorLink(!accentColor);
        }
    }


    return (
        <>
            <header>
                <div className="nav__logo">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="menus">
                        <ul>
                            {
                                kategorije.map((kategorija, idx) => {
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
                    </div>
                </div>
            </header>

            <SubCategoryMenu subCategoryMenu={subCategoryMenu} setSubCategoryMenu={setSubCategoryMenu} categoryId={categoryId} accentColorLink={accentColor} setAccentColor={setAccentColor}/>
            
        </>
    )
}

export default Header