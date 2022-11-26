import React from 'react'

//Styling
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';
import ContactForm from '../ContactForm/ContactForm';
import ContactPhone from '../ContactPhone/ContactPhone';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';

const Modal = ({ modal, setModal, modalId }) => {

    const closeModal = () => {
        setModal(!modal);
    }

    switch (modalId) {
        case 'mail':
            return (
                <div className={`${modal ? 'modalActive' : ''} modal`} >
                    <span><IoCloseOutline className='icon-xl' onClick={closeModal} /></span>

                    <ContactForm />
                </div>
            )
        case 'phone':
            return (
                <div className={`${modal ? 'modalActive' : ''} modal`} >
                    <span><IoCloseOutline className='icon-xl' onClick={closeModal} /></span>

                    <ContactPhone />
                </div>
            )
    }
}

export default Modal