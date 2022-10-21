import React, { useState } from 'react'
import './SimilarProducts.css'

// Data
import { proizvodi } from '../../data';

const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};

const SimilarProducts = () => {

    // const { id, proizvod_naziv_en, proizvod_naziv_sr, slika_cela } = proizvod;

    const [randomData, setRandomData] = useState(() => getRandomObject(proizvodi));

    console.log(randomData)

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