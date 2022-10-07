import { React } from 'react'
import { useParams } from 'react-router-dom'

//Styling
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';
import ContactForm from '../ContactForm/ContactForm';
import ContactPhone from '../ContactPhone/ContactPhone';



const Modal = ({ modal, setModal, modalId }) => {

    let { mail } = useParams();

    const closeModal = () => {
        setModal(!modal);
    }

    switch (modalId) {
        case 'mail':
            return (
                <div className={`${modal ? 'modalActive' : ''} modal`} >
                    <span><IoCloseOutline className='icon--big' onClick={closeModal} /></span>

                    <ContactForm />
                </div>
            )
        case 'phone':
            return (
                <div className={`${modal ? 'modalActive' : ''} modal`} >
                    <span><IoCloseOutline className='icon--big' onClick={closeModal} /></span>

                    <ContactPhone />
                </div>
            )





    }

}

export default Modal