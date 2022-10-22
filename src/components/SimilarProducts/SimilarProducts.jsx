import React, { useState, useEffect } from 'react'
import './SimilarProducts.css'

// Data iz baze koji moraju ovde da se ucitaju zbog opcije Slicni Proizvodi
import { proizvodi } from '../../data';

const SimilarProducts = ({ proizvod }) => {

    const { podk_id, id } = proizvod;

    const getRandomObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
    };

    const [randomData, setRandomData] = useState([]);

    useEffect(() => {
        setRandomData(() => getRandomObject(proizvodi));
        // setRandomData(proizvodi);
    })


    return (
        <section>
            <div className="similar-items">
                <h1>Similar products</h1>
                <div className="similar-items-category">
                    <div className="similar-items-category-cont" >
                        <h2 data-en={randomData.proizvod_naziv_en} data-sr={randomData.proizvod_naziv_sr}>{randomData.proizvod_naziv_en}</h2>
                        <img src={randomData.slika_cela} alt={randomData.proizvod_naziv_en} />
                        <button className="btn" type="button">Check</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimilarProducts