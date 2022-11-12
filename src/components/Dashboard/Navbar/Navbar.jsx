import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiArrowDownSLine, RiUserLine, RiSunLine, RiMoonLine, RiAddLine, RiDeleteBinLine, RiEditBoxLine, RiTShirt2Line, RiUserAddLine, RiUserUnfollowLine, RiUserSettingsLine, RiLineChartLine, RiLoginCircleLine, FcLowPriority, RiShoppingCartLine, RiFolderSettingsLine, RiApps2Line, RiAppsLine, RiDashboardLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Navbar = ({asideMenu, setAsideMenu }) => {

    const [devider, setDevider] = useState(false);    
    const [group, setGroup] = useState(false);

    const toggleGroup = (id) => {
        setGroup(!group);
    }


    return (
        <aside className={`${asideMenu ? 'closeAside' : ''} aside__menu`}>

            <div className="aside__menu-top" >
                <div className="aside__menu-top-left">

                </div>
            </div>

            <div className="aside__menu-bottom" id="asideBottom">

                {/* <div className={`${devider ? 'closedDevider' : ''} devider__aside`}></div> */}
                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiShoppingCartLine className="icon-main icon-dash-green ml-18 " />
                            <p >Porudzbine</p>
                        </div>
                    </div>
                </div>

                <div className={`${devider ? 'closedDevider' : ''} devider__aside`}></div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <Link to="/dashboard" className='link-style-icon'><RiDashboardLine className="icon-main ml-18" /></Link>
                            <span className='link-style'><Link to="/dashboard" className='link-style'>Dashboard</Link></span>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <Link to="/dashcategories" className='link-style-icon'><RiApps2Line className="icon-main ml-18" /></Link>
                            <span className='link-style'><Link to="/dashcategories" className='link-style'>Kategorije</Link></span>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <Link to="/dashsubcategories" className='link-style-icon'><RiAppsLine className="icon-main ml-18" /></Link>
                            <span className='link-style'><Link to="/dashsubcategories" className='link-style'>Podkategorije</Link></span>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${group ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => toggleGroup()} id='pro'>
                            <RiTShirt2Line className="icon-main ml-18" />
                            <p ><RiArrowDownSLine className="icon-main icon-dash-apsoluth" />Proizvodi</p>
                        </div>
                        <div className="group-content">
                            <ul>
                                <li ><RiAddLine className="icon-small mr-1" /> <span>Dodaj proizvod</span></li>
                                <li ><RiEditBoxLine className="icon-small mr-1" /> <span>Izmeni proizvod</span></li>
                                <li ><RiDeleteBinLine className="icon-small mr-1" /> <span>Obrisi proizvod</span></li>
                                <li ><RiLoginCircleLine className="icon-small mr-1" /> <span>Log proizvodi</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${group ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => toggleGroup()} id='kor'>
                            <RiUserLine className="icon-main ml-18" />
                            <p ><RiArrowDownSLine className="icon-main icon-dash-apsoluth" />Korisnici</p>
                        </div>
                        <div className="group-content">
                            <ul>
                                <li ><RiUserAddLine className="icon-small mr-1" /> <span>Dodaj korisnika</span></li>
                                <li ><RiUserSettingsLine className="icon-small mr-1" /> <span>Lista korisnika</span></li>
                                <li ><RiLoginCircleLine className="icon-small mr-1" /> <span>Log кorisnici</span></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiLineChartLine className="icon-main ml-18" />
                            <p >Statistika</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="theme__switch" >
                <RiSunLine className="icon-dash-custom" />
                <div className="switcher" >
                    <span className="switcher__slider slider-move "></span>
                </div>
                <RiMoonLine className="icon-main" />
            </div>
        </aside>
    )
}

export default Navbar