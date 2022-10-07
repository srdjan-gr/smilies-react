import React from 'react'

//Style
import './ContactForm.css'
import { IoMailOutline } from 'react-icons/io5'

const ContactForm = () => {
    return (
        <div className="modal--content">
            <div className="modal--content-header">
                <IoMailOutline className='icon--big' />
                <h1>Enter your informations</h1>
            </div>

            <form id="myForm" action="" method="POST" autoComplete="off" >

                <div className="inputs">
                    <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="inputs">
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="inputs">
                    <input type="phone" name="phone" id="phone" placeholder="Phone No" />
                </div>
                <div className="inputs">
                    <textarea id="message" cols="30" rows="6" name="message" placeholder="Message"></textarea>
                </div>
                <div className="inputs">
                    <p>This site is protected by reCAPTCHA, the Google Privacy Policy <br /> and Terms of
                        Service apply.
                    </p>
                </div>

                <div className="inputs ">
                    <button type="button" className="btn" id="btnContactUs">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm