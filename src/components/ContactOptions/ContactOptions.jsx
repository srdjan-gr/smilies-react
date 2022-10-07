import { React, useState } from 'react'

// Styling
import { IoCallOutline, IoMailOutline } from 'react-icons/io5'
import Modal from '../Modal/Modal'
import './ContactOptions.css'


const ContactOptions = () => {

    const [modal, setModal] = useState(false);
    const [modalId, setModalId] = useState('');

    const openModal = (id) => {
        setModal(!modal);
        console.log(id);
    }



    return (
        <div className='container'>
            <section>
                <div className="card__container">
                    <div className="card">
                        <div className="contact__card--header">
                            <span><IoCallOutline className='icon--big' /></span>
                            <h2>Phone</h2>
                        </div>
                        <p>Our Cosutumer Care team is available for any assistance you may need.</p>

                        <button id="modalBtnPhone" className="btn"
                            onClick={() =>
                                [
                                    openModal('phone'),
                                    setModalId('phone')
                                ]
                            }
                        >Contact Us
                        </button>
                    </div>

                    <div className="card">
                        <div className="contact__card--header" >
                            <span><IoMailOutline className='icon--big' /></span>
                            <h2>Email</h2>
                        </div>
                        <p>Contact us by filling out our simple contact form.</p>

                        <button id="modalBtnMail" className="btn"
                            onClick={() =>
                                [
                                    openModal('mail'),
                                    setModalId('mail')
                                ]
                            }

                        >Contact Us</button>
                    </div>

                    {/*Third card with Appointments*/}
                    {/* <div className="contact__card">
                    <div className="contact__card--header">
                        <ion-icon name="calendar-clear-outline" className="icon"></ion-icon>
                        <h2>Appointments</h2>
                    </div>
                    <p>Book a virtual or an in-store appointment with one of our skilled advisors.</p>
                      <button id="modalBtnMail" className="btn"
                            onClick={() =>
                                [
                                    openModal('apointment'),
                                    setModalId('apointment')
                                ]
                            }

                        >Contact Us</button>

                </div>*/}
                </div>
            </section>

            <Modal modal={modal} setModal={setModal} modalId={modalId} />
        </div>
    )
}

export default ContactOptions