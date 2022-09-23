import { React, useState } from 'react';
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../assets/img/logos/Logo100px.png';
import { kategorije } from '../../data';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';

const Header = () => {

    const [subCategoryMenu, setSubCategoryMenu] = useState(false);

    return (
        <>
            <header>
                <div className="nav__logo">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="menus">
                        <ul>
                            {kategorije.map((kategorija, idx) => {

                                return (
                                    <li key={idx} >
                                        <span  
                                            onClick={() => setSubCategoryMenu(!subCategoryMenu)}
                                            id={kategorija.id}>{kategorija.ime_kategorije}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </header>
            
            <SubCategoryMenu subCategoryMenu={subCategoryMenu} />
        </>
    )
}

export default Header