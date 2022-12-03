import React, { useState, useEffect } from 'react'
import { RiMenuLine, RiMore2Line, RiCloseLine, RiAddLine, RiArrowLeftSLine } from 'react-icons/ri'
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import jwt from 'jwt-decode'

const Header = ({ asideMenu, setAsideMenu }) => {

  const [devider, setDevider] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);

  const clickHandler = () => {
    setAsideMenu(!asideMenu)

    if (!asideMenu) {
      localStorage.setItem('sidebar', 'closed')
    } else {
      localStorage.setItem('sidebar', null)
    }

    setIconRotate(!iconRotate)
    setDevider(!devider)
  }

  const handleHeaderOptions = () => {
    setHeaderMenu(!headerMenu);
  }

  // Session
  const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");

  const userName = () => {
    if (smiliesSession) {
      const token = jwt(smiliesSession);

      return (
        <div className='dash__user'>
          <span> {`${token.data.name} ${token.data.last_name}`}</span>
          <span className='ml-1'> {`( ${token.data.status} )`}</span>
        </div>
      )
    }
  }


  return (
    <div>
      <header className="header">

        <div className="header__left">
          <span ><RiMenuLine className="icon-main hamburger" /></span>
          <span ><RiCloseLine className="icon-main close-menu" /></span>
          <img className="logoMobile" src="" alt="" />
          <img className="logoDesktop" src="" alt="" />

          <div className="menu__button" onClick={clickHandler}>
            <RiArrowLeftSLine className={`${iconRotate ? 'iconRotate' : ''} icon - main`} />
          </div>

        </div>

        <div className="header__right" >
          {userName()}
          <span><RiMore2Line className="icon-main " onClick={handleHeaderOptions} /></span>
        </div>

      </header>
      <HeaderMenu headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
    </div>
  )
}

export default Header