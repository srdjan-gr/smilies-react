import React from 'react'
import './ToTop.css'
import BackToTop from "react-back-to-top-button";

import { IoChevronUpCircleOutline } from 'react-icons/io5'

const Totop = () => {
    return (

        <BackToTop
            showOnScrollDown
            showAt={100}
            speed={1500}
            easing="easeInOutQuint"
        >
            <span><IoChevronUpCircleOutline className='toTop' /></span>
        </BackToTop>

    )
}

export default Totop