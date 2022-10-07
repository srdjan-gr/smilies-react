import React from 'react'

// Styling
import { IoCallOutline, IoMailOutline } from 'react-icons/io5'
import './ContactOptions.css'


const ContactOptions = () => {
    return (
        <div className='container'>
            <section>
                <div class="card__container">
                    <div class="card">
                        <div class="contact__card--header">
                            <span><IoCallOutline className='icon--big' /></span>
                            <h2>Phone</h2>
                        </div>
                        <p>Our Cosutumer Care team is available for any assistance you may need.</p>

                        <button id="modalBtnPhone" class="btn">Contact Us</button>
                    </div>

                    <div class="card">
                        <div class="contact__card--header">
                            <span><IoMailOutline className='icon--big' /></span>
                            <h2>Email</h2>
                        </div>
                        <p>Contact us by filling out our simple contact form.</p>

                        <button id="modalBtnMail" class="btn">Contact Us</button>
                    </div>

                    {/*Third card with Appointments*/}
                    {/* <div class="contact__card">
                    <div class="contact__card--header">
                        <ion-icon name="calendar-clear-outline" class="icon"></ion-icon>
                        <h2>Appointments</h2>
                    </div>
                    <p>Book a virtual or an in-store appointment with one of our skilled advisors.</p>
                    <a href="/pages/contact-aapoint-pg.html">
                        <button class="btn btn--s">Book Now</button>
                    </a>
                </div>*/}
                </div>
            </section>
        </div>
    )
}

export default ContactOptions