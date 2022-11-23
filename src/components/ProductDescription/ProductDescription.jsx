import React from 'react';

import slike from '../../api/images';

// Styling
import './ProductDescription.css';


const ProductDescription = ({ proizvod }) => {

    const { 
        proizvod_opis_sr, 
        proizvod_opis_en, 
        proizvod_materijal_sr, 
        proizvod_materijal_en, 
        proizvod_boja_sr, 
        proizvod_boja_en, 
        odrzavanje_slike,
    } = proizvod;

    // Niz sa slikama
    let sveSlike = odrzavanje_slike;
    let splitSlike = sveSlike.split(',');

    let slika1 = splitSlike[0];
    let slika2 = splitSlike[1];
    let slika3 = splitSlike[2];
    let slika4 = splitSlike[3];
    let slika5 = splitSlike[4];

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
                            <p data-en={proizvod_materijal_en} data-sr={proizvod_materijal_sr}>{proizvod_materijal_sr}</p>
                            {/*<p>Non strech fabrick</p>*/}
                        </div>
                        <div className="items-description-cont-1-single">
                            <label htmlFor="itemColor" data-en='Color:' data-sr='Boja:'>Boja:</label>
                            <p id='itemColor' data-en={proizvod_boja_en} data-sr={proizvod_boja_sr}>{proizvod_boja_sr}</p>
                        </div>
                        <div className="items-description-cont-1-single">
                            <label htmlFor="wash" data-en='Wash symbols::' data-sr='Način održavanja:'>Način odrzavanja:</label>
                            <div className="wash" id="wash">
                                <img src={slike.putanjaOdrzavanje + slika1}  alt="" />
                                <img src={slike.putanjaOdrzavanje + slika2}  alt="" />
                                <img src={slike.putanjaOdrzavanje + slika3}  alt="" />
                                <img src={slike.putanjaOdrzavanje + slika4}  alt="" />
                                <img src={slike.putanjaOdrzavanje + slika5}  alt="" />
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