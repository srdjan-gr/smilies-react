import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// Data
import apiCategory from '../../api/category'
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';

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
                                        <li key={idx}>
                                            <span
                                                onClick={() =>
                                                    [
                                                        setSubCategoryMenu(!subCategoryMenu),
                                                        setCategoryId(kategorija.kat_id)
                                                    ]
                                                }

                                                data-en={kategorija.kat_naziv_en} data-sr={kategorija.kat_naziv_sr} id={kategorija.kat_id}> {kategorija.kat_naziv_en}
                                            </span>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                </div>
            </header>

            <SubCategoryMenu subCategoryMenu={subCategoryMenu} setSubCategoryMenu={setSubCategoryMenu} categoryId={categoryId} />
        </>
    )
}

export default Header