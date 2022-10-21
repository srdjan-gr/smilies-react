import React from 'react';
import { useState, useEffect } from 'react'
import ProductGalery from '../ProductGalery/ProductGalery';

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
    id, 
    proizvod_naziv_en, 
    proizvod_naziv_sr, 
    proizvod_opis_en, 
    proizvod_opis_sr, 
    proizvod_velicina, 
    proizvod_cena, 
    slika_cela, 
    slika_detalj, 
    slika_cela1, 
    slika_cela2 } = proizvod;
      
    // Menjanje velike slike
    const [trenutnaSlika, setTrenutnaSlika] = useState(slika_cela);
    const promeniVelikuSliku = (slika) => {
      setTrenutnaSlika(slika);
    }

    // Preracunavanje cene u eur
    const cenaDin = proizvod_cena;
    const cenaEur = cenaDin / 117.5;
    const zaokEur = Math.round(cenaEur) + ' eur.';
    const zaokDin = cenaDin + ' din.';


  return (
    <section >

      <div className="item-container">

        <div className="item-container-images" id="gallery">
          <div className="item-container-images-big" id="imageBig">
            <span data-en="Show" data-sr="Pogledaj" onClick={() => openGalery(id)} >Show</span>
            <img src={trenutnaSlika} alt={proizvod_naziv_en} />
          </div>

          <div className="item-container-images-small" id="imageSmall">
            <img src={slika_detalj} alt={proizvod_naziv_en} onClick={() => promeniVelikuSliku(slika_detalj)}/>
            <img src={slika_cela1} alt={proizvod_naziv_en} onClick={() => promeniVelikuSliku(slika_cela1)}/>
            <img src={slika_cela2} alt={proizvod_naziv_en} onClick={() => promeniVelikuSliku(slika_cela2)}/>
          </div>
        </div>

        <div className="item-container-text">
          <h1 data-en={proizvod_naziv_en} data-sr={proizvod_naziv_sr}>{proizvod_naziv_en}</h1>

          <div className="item-size mt-1">
            <label htmlFor="" data-en="Size" data-sr="Veličina">Size:</label>
            <h2>{proizvod_velicina}</h2>
            <p className="accent" data-en="Pišite nam da poručite svoju veličinu." data-sr="Text us to order your size.">Text us to order your size.</p>
          </div>

          <div className="item-description mt-1">
            <label htmlFor="" data-en="Item description" data-sr="Opis proizvoda">Item description:</label>
            <p data-en={proizvod_opis_en} data-sr={proizvod_opis_sr}>{proizvod_opis_en}</p>
          </div>

          <div className="item-price ">
            <label htmlFor="" data-en="Item price" data-sr="Cena proizvoda">Item price:</label>
            <h2 data-sr={zaokDin} data-en={zaokEur}>{zaokEur}</h2>
          </div>

          <select name="Quantity" id="quantity">
            <option defaultValue={"1"}>1</option>
            <option defaultValue={"2"}>2</option>
            <option defaultValue={"3"}>3</option>
          </select>

          <button className="btn" type="button">Add to cart</button>
        </div>

      </div>

      <ProductGalery
        productGalery={productGalery} 
        setProductGalery={setProductGalery} 

        slika_cela={trenutnaSlika}
        slika_detalj={slika_detalj}
        slika_cela1={slika_cela1}
        slika_cela2={slika_cela2} />
        
    </section>
  )
}

export default SingleProduct