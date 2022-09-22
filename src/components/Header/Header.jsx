import React from 'react'
import './Header.css'
import logo from '../../img/logos/Logo100px.png';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="nav__logo">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="" /></Link>

                </div>

                <div className="menus">
                    <ul>
                        <li><span id="Woman">Woman</span></li>
                        <li><span id="Man">Man</span></li>
                        <li className="active"><span id="New">New Collection</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header