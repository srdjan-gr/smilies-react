import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiCopyleftLine, RiArrowLeftSLine, RiArrowDownSLine, RiUserLine, RiSunLine, RiMoonLine, RiAddLine, RiDeleteBinLine, RiEditBoxLine, RiTShirt2Line, RiUserAddLine, RiUserUnfollowLine, RiUserSettingsLine, RiLineChartLine, RiLoginCircleLine, FcLowPriority, RiShoppingCartLine, RiFolderSettingsLine, RiApps2Line, RiAppsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [asideMenu, setAsideMenu] = useState(false);
    const [iconRotate, setIconRotate] = useState(false);
    const [spanText, setSpanText] = useState(false);
    const [group, setGroup] = useState(false);
    const [devider, setDevider] = useState(false);

    const clickHandler = () => {
        setAsideMenu(!asideMenu)
        if (!asideMenu) {
            localStorage.setItem('sidebar', 'closed')
        } else {
            localStorage.setItem('sidebar', null)
        }

        setIconRotate(!iconRotate)
        setSpanText(!spanText)
        setDevider(!devider)
    }


    const toggleGroup = (id) => {
        setGroup(!group);
        console.log(id)
    }

    useEffect(() => {
        const asideMenuStorage = localStorage.getItem('sidebar');
        if (asideMenuStorage === 'closed') {
            setAsideMenu(true);
        }
    }, [asideMenu])


    console.log(asideMenu);

    return (
        <aside className={`${asideMenu ? 'closeAside' : ''} aside__menu`}>
            <div className="aside__menu-top" id="asideTop">
                <div className="aside__menu-top-left">

                </div>
                <div className="menu__button" id="menuSwitch" onClick={clickHandler}>
                    <RiArrowLeftSLine className={`${iconRotate ? 'iconRotate' : ''} icon-main`} />
                </div>
            </div>

            <div className="aside__menu-bottom" id="asideBottom">

                {/* <div className={`${devider ? 'closedDevider' : ''} devider__aside`}></div> */}
                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiShoppingCartLine className="icon-dash-custom icon-dash-green ml-2 " />
                            <p >Porudzbine</p>
                        </div>
                    </div>
                </div>

                {<div className={`${devider ? 'closedDevider' : ''} devider__aside`}></div>}

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${group ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => toggleGroup()} id='pro'>
                            <RiTShirt2Line className="icon-dash-custom ml-2" />
                            <p ><RiArrowDownSLine className="icon-dash-custom icon-dash-apsoluth" />Proizvodi</p>
                        </div>
                        <div className="group-content">
                            <ul>
                                <li ><RiAddLine className="icon-dash-custom mr-1" /> <span>Dodaj proizvod</span></li>
                                <li ><RiEditBoxLine className="icon-dash-custom mr-1" /> <span>Izmeni proizvod</span></li>
                                <li ><RiDeleteBinLine className="icon-dash-custom mr-1" /> <span>Obrisi proizvod</span></li>
                                <li ><RiLoginCircleLine className="icon-dash-custom mr-1" /> <span>Log proizvodi</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiApps2Line className="icon-dash-custom ml-2" />
                            <p >Kategorije</p>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiAppsLine className="icon-dash-custom ml-2" />
                            <p >Podkategorije</p>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${group ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => toggleGroup()} id='kor'>
                            <RiUserLine className="icon-dash-custom ml-2" />
                            <p ><RiArrowDownSLine className="icon-dash-custom icon-dash-apsoluth" />Korisnici</p>
                        </div>
                        <div className="group-content">
                            <ul>
                                <li ><RiUserAddLine className="icon-dash-custom mr-1" /> <span>Dodaj korisnika</span></li>
                                <li ><RiUserSettingsLine className="icon-dash-custom mr-1" /> <span>Lista korisnika</span></li>
                                <li ><RiLoginCircleLine className="icon-dash-custom mr-1" /> <span>Log кorisnici</span></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <RiLineChartLine className="icon-dash-custom ml-2" />
                            <p >Statistika</p>
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
            </div>
        </aside>
    )
}

export default Navbar