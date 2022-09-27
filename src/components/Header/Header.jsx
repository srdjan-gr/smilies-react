import { React, useState } from 'react';
import { Link } from 'react-router-dom'

import { kategorije } from '../../data';

import './Header.css'
import logo from '../../assets/img/logos/Logo100px.png';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';


const Header = () => {

    const [subCategoryMenu, setSubCategoryMenu] = useState(false);
    const [categoryId, setCategoryId] = useState('');
    const [subKategorijaId, setKategorijaId] = useState('');

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
                                            onClick={() => 
                                                [
                                                    setSubCategoryMenu(!subCategoryMenu), 
                                                    setCategoryId(kategorija.id)
                                                ] 
                                            }
  
                                            id={kategorija.id}>{kategorija.ime_kategorije}</span>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </header>
            
            <SubCategoryMenu subCategoryMenu={subCategoryMenu} setSubCategoryMenu={setSubCategoryMenu} categoryId={categoryId}/>
        </>
    )
}

export default Header