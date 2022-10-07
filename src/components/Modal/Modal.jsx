import { React } from 'react'

//Styling
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';



const Modal = ({ modal, setModal }) => {

    const closeModal = () => {
        setModal(!modal);
    }

    return (
        <div className={`${modal ? 'modalActive' : ''} modal`} onClick={closeModal}>
            <span><IoCloseOutline className='icon--big' onClick={closeModal} /></span>


        </div>
    )
}

export default Modal