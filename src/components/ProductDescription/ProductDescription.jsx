import React from 'react';

// Styling
import './ProductDescription.css';


const ProductDescription = ({ proizvod }) => {

    const { proizvod_opis_sr, proizvod_opis_en } = proizvod;

    return (

        <div className="items-description" >
            <h1 data-en='Description' data-sr='Opis:'>Opis</h1>

            <div className="items-description-cont">

                <div className="items-description-cont-1">

                    <div className="items-description-cont-1-content">
                        <div className="items-description-cont-1-single">
                            <label htmlFor="" data-en='Item description:' data-sr='Opis proizvoda:'>Opis proizvoda:</label>
                            <p data-en={proizvod_opis_en} data-sr={proizvod_opis_en}>{proizvod_opis_sr}</p>
                        </div>
                        <div className="items-description-cont-1-single">
                            <label htmlFor="" data-en='Fabrick:' data-sr='Materijal:'>Materijal:</label>
                            <p>100% Cotton </p>
                            <p>Non strech fabrick</p>
                        </div>
                        <div className="items-description-cont-1-single">
                            <label htmlFor="itemColor" data-en='Color:' data-sr='Boja:'>Boja:</label>
                            <p id='itemColor'>Lorem, ipsum.</p>
                        </div>
                        <div className="items-description-cont-1-single">
                            <label htmlFor="wash" data-en='Wash symbols::' data-sr='Način održavanja:'>Način odrzavanja:</label>
                            <div className="wash" id="wash">
                                <img src="../img/wash/4.png" alt="" />
                                <img src="../img/wash/7.png" alt="" />
                                <img src="../img/wash/N.png" alt="" />
                                <img src="../img/wash/Q.png" alt="" />
                                <img src="../img/wash/V.png" alt="" />
                            </div>
                        </div>
                        <div className="items-description-cont-1-single">
                            <p className="accent" data-en='Made in Serbia' data-sr='Proizvedeno u Srbiji:'>Proizvedeno u Srbiji</p>
                        </div>
                    </div>
                </div>

                <div className="items-description-cont-1">
                    <div className="items-description-cont-1-heading">
                        <label htmlFor="sizeChart" data-en='Size chart' data-sr='Tabela mera:'>Tabela mera</label>
                        <p className="openPicto" id="openPicto" data-en='How to measure' data-sr='Kako meriti'>Kako meriti</p>
                    </div>
                    <div className="items-description-cont-1-content" id='sizeChart'>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>36</td>
                                    <td>38</td>
                                    <td>40</td>
                                    <td>42</td>
                                    <td>44</td>
                                    <td>46</td>
                                    <td>48</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Chest</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Waist</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hip</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Shoulder width</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Sleve lenght</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Crotch</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription