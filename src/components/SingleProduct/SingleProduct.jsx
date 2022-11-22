import React from 'react';
import { useState, useEffect } from 'react'
import Button from '../Button/Button';
import ProductGalery from '../ProductGalery/ProductGalery';

import slike from '../../api/images';

// Styling
import './SingleProduct.css';

const SingleProduct = ({ proizvod }) => {

  const [productGalery, setProductGalery] = useState(false);
  const [proizvodiId, setProizvodId] = useState('');

  const openGalery = (id) => {
    setProductGalery(!productGalery);
    setProizvodId(id);
  }
    
  const { 
    proizvod_id, 
    proizvod_naziv_en, 
    proizvod_naziv_sr, 
    proizvod_opis_en, 
    proizvod_opis_sr, 
    // proizvod_velicina, 
    proizvod_cena,
    proizvod_cena_snizena,
    slika_ime,
    podkategorija_podkat_id } = proizvod;
    

    // Preracunavanje cene u eur
    const cenaDin = proizvod_cena;
    const cenaEur = cenaDin / 117.5;
    const zaokEur = Math.round(cenaEur) + ' eur.';
    const zaokDin = cenaDin + ',00 din.';

    // Niz sa slikama
    let sveSlike = slika_ime;
    let splitSlike = sveSlike.split(',');

    let slika_cela = splitSlike[0];
    let slika_detalj = splitSlike[1];
    let slika_cela1 = splitSlike[2];
    let slika_cela2 = splitSlike[3];


  return (

    <section >

      <div className="item-container">

        <div className="item-container-images" id="gallery">
          <div className="item-container-images-big" id="imageBig">
            <span data-en="Show" data-sr="Pogledaj" onClick={() => openGalery(proizvod_id)} >Show</span>
            <img src={slike.putanjaSlika + slika_cela} alt={proizvod_opis_sr} />
          </div>

          <div className="item-container-images-small" id="imageSmall">
            <img src={slike.putanjaSlika + slika_detalj} alt={proizvod_opis_sr} />
            <img src={slike.putanjaSlika + slika_cela1} alt={proizvod_opis_sr} />
            <img src={slike.putanjaSlika + slika_cela2} alt={proizvod_opis_sr} />
          </div>
        </div>

        <div className="item-container-text">
          <h1 data-en={proizvod_naziv_en} data-sr={proizvod_naziv_sr}>{proizvod_naziv_sr}</h1>

          <div className="item-size mt-1">
            <label htmlFor="" data-en="Size" data-sr="Veličina">Veličina:</label>
            <h2></h2>
            <p className="accent" data-en="Text us to order your size." data-sr="Pišite nam da poručite svoju veličinu.">Pišite nam da poručite svoju veličinu.</p>
          </div>

          <div className="item-description mt-1">
            <label htmlFor="" data-en="Item description" data-sr="Opis proizvoda">Opis proizvoda:</label>
            <p data-en={proizvod_opis_en} data-sr={proizvod_opis_sr}>{proizvod_opis_sr}</p>
          </div>

          <div className="item-price ">
            <label htmlFor="" data-en="Item price" data-sr="Cena proizvoda">Cena proizvoda:</label>
            <h2 data-sr={zaokDin} data-en={zaokEur}>{zaokDin}</h2>
          </div>

          <select name="Quantity" id="quantity">
            <option defaultValue={"1"}>1</option>
            <option defaultValue={"2"}>2</option>
            <option defaultValue={"3"}>3</option>
          </select>

          <Button text='Dodaj u korpu'/>
        </div>

      </div>

      <ProductGalery
        productGalery={productGalery} 
        setProductGalery={setProductGalery} 

        slika_cela={slike.putanjaSlika + slika_cela}
        slika_detalj={slike.putanjaSlika + slika_detalj}
        slika_cela1={slike.putanjaSlika + slika_cela1}
        slika_cela2={slike.putanjaSlika + slika_cela2} />
        
    </section>
  )
}

export default SingleProduct