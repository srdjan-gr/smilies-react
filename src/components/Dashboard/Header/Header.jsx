import React from 'react'
import { RiMenuLine, RiMore2Line, RiCloseLine, RiAddLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header id="header" className="header">

      <div className="header__left">
        <span ><RiMenuLine className="icon-main hamburger" /></span>
        <span ><RiCloseLine className="icon-main close-menu" /></span>
        <img className="logoMobile" src="" alt="" />
        <img className="logoDesktop" src="" alt="" />
      </div>

      <div className="header__right" >
        <span><RiMore2Line className="icon-main " /></span>
      </div>

    </header>
  )
}

export default Header