import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div class="loader-container">
            <div class="loader">
                <div></div>
                <p data-en="Loading" data-sr="Ucitavanje">Loading...</p>
            </div>
        </div>
    )
}

export default Loader