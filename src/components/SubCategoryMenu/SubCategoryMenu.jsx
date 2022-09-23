import React from 'react'
import './SubCategoryMenu.css'
import { Link } from 'react-router-dom';

import { podKategorije } from '../../data';
import { IoCloseOutline } from 'react-icons/io5';
import submenuImg from '../../assets/img/home-sections/SmiliesEveryday-01.jpg'

let iconStyle = {
    cursor: 'pointer',
    fontSize: '2.2rem',
};

const SubCategoryMenu = () => {
    return (
        <section className='submenu'>
            <div className="container">
                <div className="submenu__container">
                    <span><IoCloseOutline style={iconStyle} /></span>

                    <div className="submenu__image">
                        <img src={submenuImg} alt="Smilies image" />
                    </div>

                    <div className="submenu__subcategories">
                        <ul>
                            {podKategorije.map((podKategorija, idx) => {
                                return (
                                    <li key={idx} id={podKategorija.kategorija_id}><Link to={`/products/${idx}`}>{podKategorija.ime_podkategorije}</Link></li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SubCategoryMenu