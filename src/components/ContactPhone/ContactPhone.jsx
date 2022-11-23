import React from 'react'
import './ContactPhone.css'
import { IoCallOutline } from 'react-icons/io5'

const ContactPhone = () => {
    return (

        <div class="modalP--content">

            <div class="modalP--content-card">
                <IoCallOutline className='icon-xl' />
                <h2>Phone</h2>
                <p class="clickCall">Click on the phone number for <br /> Direct Call</p>
            </div>

            <a href="tel:+381638327451">+38163 8 327 451</a>

            <p>Mon - Fri <br /> 9AM - 17PM</p>
        </div>

    )
}

export default ContactPhone