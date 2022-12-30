import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiArrowDownSLine, RiFileList2Line, RiUserLine, RiSunLine, RiMoonLine, RiAddLine, RiDeleteBinLine, RiEditBoxLine, RiTShirt2Line, RiUserAddLine, RiUserFollowLine, RiUserUnfollowLine, RiUserSettingsLine, RiLineChartLine, RiLoginCircleLine, FcLowPriority, RiShoppingCartLine, RiFolderSettingsLine, RiApps2Line, RiAppsLine, RiDashboardLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"

const Navbar = ({ asideMenu, setAsideMenu }) => {

    const [devider, setDevider] = useState(false);
    const [groupProducts, setGroupProducts] = useState(false);
    const [groupUsers, setGroupUsers] = useState(false);
    const [groupLog, setGroupLog] = useState(false);

    const ordersList = useSelector((state) => state.ordersList)
    const { ordersLoading, ordersData, ordersMessage } = ordersList;

    return (
        <aside className={`${asideMenu ? 'closeAside' : ''} aside__menu`}>

            <Link to="/" >
                <div className="aside__menu-top" >
                    <div className="aside__menu-top-left">
                    </div>
                </div>
            </Link>

            <div className="aside__menu-bottom" id="asideBottom">

                {/* <div className={`${devider ? 'closedDevider' : ''} devider__aside`}></div> */}
                <div className="aside__menu-bottom-content group-hover">
                    <div className="group">
                        <div className='group-header'>
                            <Link to="/orders" className='link-style-icon'><RiShoppingCartLine className="icon-main icon-dash-green ml-18 " /></Link>
                            <span className='link-style'><Link to="/orders" className='link-style'>Porudzbine</Link></span>
                            <span className='order__product-count '><h3>{ordersData.length}</h3></span>
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
                    <div className={`${groupProducts ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => [setGroupProducts(!groupProducts), setGroupLog(false), setGroupUsers(false)]} >
                            <RiTShirt2Line className="icon-main ml-18" />
                            <p ><RiArrowDownSLine className="icon-main icon-dash-submenu" />Proizvodi</p>
                        </div>
                        <div className="group-content" >
                            <ul>
                                <div className='group-header'>
                                    <Link to="/addproduct" className='link-style-icon'><RiAddLine className="icon-main" /></Link>
                                    <span className='link-style'><Link to="/dashcreateproduct" className='link-style-group'>Dodaj proizvod</Link></span>
                                </div>
                                <div className='group-header'>
                                    <Link to="/productlist" className='link-style-icon'><RiFileList2Line className="icon-main" /></Link>
                                    <span className='link-style'><Link to="/productlist" className='link-style-group'>Lista proizvoda</Link></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${groupUsers ? 'toggleHeader' : ''} group `}>
                        <div className='group-header' onClick={() => [setGroupUsers(!groupUsers), setGroupProducts(false), setGroupLog(false)]}>
                            <RiUserLine className="icon-main ml-18" />
                            <p ><RiArrowDownSLine className="icon-main icon-dash-submenu" />Korisnici</p>
                        </div>
                        <div className="group-content">
                            <div className='group-header'>
                                <Link to="/addproduct" className='link-style-icon'><RiUserAddLine className="icon-main" /></Link>
                                <span className='link-style'><Link to="/dashcreateuser" className='link-style-group'>Dodaj korisnika</Link></span>
                            </div>
                            <div className='group-header'>
                                <Link to="/productlist" className='link-style-icon'><RiUserSettingsLine className="icon-main" /></Link>
                                <span className='link-style'><Link to="/usertlist" className='link-style-group'>Lista korisnika</Link></span>
                            </div>
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

                <div className="aside__menu-bottom-content group-hover">
                    <div className={`${groupLog ? 'toggleHeader-xl' : ''} group `}>
                        <div className='group-header' onClick={() => [setGroupLog(!groupLog), setGroupProducts(false), setGroupUsers(false)]}>
                            <RiLoginCircleLine className="icon-main ml-18" />
                            <p ><RiArrowDownSLine className="icon-main icon-dash-submenu" />Log</p>
                        </div>
                        <div className="group-content">
                            <div className='group-header'>
                                <Link to="/dashCategoryLog" className='link-style-icon'><RiApps2Line className="icon-main" /></Link>
                                <span className='link-style'><Link to="/dashCategoryLog" className='link-style-group'>Log kategorije</Link></span>
                            </div>
                            <div className='group-header'>
                                <Link to="/dashSubcategoryLog" className='link-style-icon'><RiAppsLine className="icon-main" /></Link>
                                <span className='link-style'><Link to="/dashSubcategoryLog" className='link-style-group'>Log podkategorije</Link></span>
                            </div>
                            <div className='group-header'>
                                <Link to="/dashLogedUsersLog" className='link-style-icon'><RiUserFollowLine className="icon-main" /></Link>
                                <span className='link-style'><Link to="/dashLogedUsersLog" className='link-style-group'>Log Ulogovani</Link></span>
                            </div>
                            <div className='group-header'>
                                <Link to="/DashRegisteredUsersLog" className='link-style-icon'><RiUserAddLine className="icon-main" /></Link>
                                <span className='link-style'><Link to="/DashRegisteredUsersLog" className='link-style-group'>Log Registracija</Link></span>
                            </div>
                            <div className='group-header'>
                                <Link to="/dashProductsLog" className='link-style-icon'><RiTShirt2Line className="icon-main" /></Link>
                                <span className='link-style'><Link to="/dashProductsLog" className='link-style-group'>Log proizvodi</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="theme__switch" >
                <RiSunLine className="icon-main" />
                <div className="switcher" >
                    <span className="switcher__slider slider-move "></span>
                </div>
                <RiMoonLine className="icon-main" />
            </div>
        </aside>
    )
}

export default Navbar