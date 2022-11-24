import React from 'react';

import slike from '../../api/images';
import SizeChart from '../SizeChart/SizeChart';

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
        proizvod_tabela_mera
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

                <SizeChart tabela={proizvod_tabela_mera}/>
            </div>
        </div>
    )
}

export default ProductDescription