import React from 'react';
import { useState, useEffect } from 'react'
import Button from '../Button/Button';
import ProductGalery from '../ProductGalery/ProductGalery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, countTotal } from '../../redux/features/cart/cartSlice';

import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'

// Styling
import './SingleProduct.css';


const SingleProduct = ({ proizvod, slike }) => {

  const [productGalery, setProductGalery] = useState(false);
  const [proizvodiId, setProizvodId] = useState('');

  const [kolicina, setKolicina] = useState('')

  const dispatch = useDispatch();

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
    proizvod_cena,
    proizvod_velicina,
    proizvod_kolicina,
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

  const kolicinaProizvoda = () => {

    if (proizvod_kolicina == 1) {
      return (
        <div className="item-container-single ">
          <label className='mb-05' htmlFor="quantity" data-en="Quantity" data-sr="Količina:">Količina:</label>

          <input type="number" onKeyDown={(e) => {
            e.preventDefault();
          }} id="quantity" name="quantity" defaultValue='1' min="1" max={proizvod_kolicina}></input>
        </div>
      )
    } else if (proizvod_kolicina > 1) {
      return (
        <article>
          <div className="item-container-single ">
            <label className='mb-05' htmlFor="quantity" data-en="Quantity" data-sr="Količina:">Količina:</label>

            <input type="number" onKeyDown={(e) => {
              e.preventDefault();
            }} id="quantity" name="quantity" defaultValue='1' min="1" max={proizvod_kolicina}></input>
          </div>

          <div className='quantity__change'>
            <button className="plus">
              <IoAddOutline className='icon-main' onClick={addQuantity} />
            </button>
            <button className="minus">
              <IoRemoveOutline className='icon-main' onClick={removeQuantity} />
            </button>
          </div>

        </article>
      )
    } else if (proizvod_kolicina == 0) {
      return (
        <div className="item-container-single ">
          <p className="accent" data-en="Product is not avilable. Text us for ordering." data-sr="Artikal nije dostupan. Pišite nam za poručivanje.">Artikal nije dostupan. Pišite nam za poručivanje.</p>
        </div>
      )
    }

  }

  const addQuantity = () => {

  }

  const removeQuantity = () => {

  }

  // Adding product to shoping card
  const handleAddToCart = (proizvod) => {
    dispatch(addToCart(proizvod));
    dispatch(countTotal());
  }

  // Message je stilizovana komponenta Unutar Toast-a
  const notifyError = (odgovor) => {
    toast.error(<Message error={odgovor} />)
  }
  const notifySuccess = (odgovor) => {
    toast.success(<Message success={odgovor} />);
  }
  const notifyInfo = (odgovor) => {
    toast.info(<Message info={odgovor} />);
  }


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

          <div className="item-container-single">
            <label htmlFor="" >Veličina: </label>
            <h2 data-en="Size" data-sr="Veličina">{proizvod_velicina}</h2>
            <p className="accent" data-en="Text us to order your size." data-sr="Pišite nam da poručite svoju veličinu.">Pišite nam da poručite svoju veličinu.</p>
          </div>

          <div className="item-container-single">
            <label htmlFor="" data-en="Item description" data-sr="Opis proizvoda">Opis proizvoda:</label>
            <p data-en={proizvod_opis_en} data-sr={proizvod_opis_sr}>{proizvod_opis_sr}</p>
          </div>

          <div className="item-container-single">
            <label htmlFor="" data-en="Item price" data-sr="Cena proizvoda">Cena proizvoda:</label>
            <h2 data-sr={zaokDin} data-en={zaokEur}>{zaokDin}</h2>
          </div>


          {kolicinaProizvoda()}

          <div className="inputs ">
            <button type="button" name="addToBag" className="btn" onClick={() => handleAddToCart(proizvod, slike)}>Dodaj u korpu</button>
          </div>
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