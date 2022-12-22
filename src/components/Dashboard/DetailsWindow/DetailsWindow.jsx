import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const DetailsWindow = ({ detailsWindow, setDetailsWindow }) => {

    const closeDetailsWindow = () => {
        setDetailsWindow(!detailsWindow);
    }

    return (
        <section className={`${detailsWindow ? 'detailsActive' : ''} details__window`} >
            <article className='details__window-inner'>
                <RiCloseLine className='icon-main icon-position' onClick={() => closeDetailsWindow()} />

                {/* Ovde ide detaljni pregled za svaku komponentu kojoj je potreban. Ovo je SAMO okvir u koji idu detalji*/}
            </article>
        </section>
    )
}

export default DetailsWindow