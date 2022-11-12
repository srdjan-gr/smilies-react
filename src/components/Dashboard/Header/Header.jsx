import React, {useState, useEffect} from 'react'
import { RiMenuLine, RiMore2Line, RiCloseLine, RiAddLine, RiArrowLeftSLine } from 'react-icons/ri'


const Header = ({asideMenu, setAsideMenu}) => {

  const [devider, setDevider] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);

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



  return (
    <header id="header" className="header">

      <div className="header__left">
        <span ><RiMenuLine className="icon-main hamburger" /></span>
        <span ><RiCloseLine className="icon-main close-menu" /></span>
        <img className="logoMobile" src="" alt="" />
        <img className="logoDesktop" src="" alt="" />

        <div className="menu__button" onClick={clickHandler}>
            <RiArrowLeftSLine className={`${iconRotate ? 'iconRotate' : ''} icon-main`} />
        </div>

      </div>

      <div className="header__right" >
        <span><RiMore2Line className="icon-main " /></span>
      </div>

    </header>
  )
}

export default Header