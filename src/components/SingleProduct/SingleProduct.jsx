import { React, useState } from 'react'
import Modal from '../Modal/Modal';

// Styling
import './SingleProduct.css';
import { IoCloseOutline } from 'react-icons/io5';
let iconStyle = {
  cursor: 'pointer',
  fontSize: '2.4rem',
};


const SingleProduct = ({ proizvod }) => {

  const [modal, setModal] = useState('');

  const openModal = () => {
    setModal(!modal);
  }

  const closeModal = () => {
    setModal(!modal);
  };

  const { proizvod_naziv_en, proizvod_naziv_sr, proizvod_opis_en, proizvod_opis_sr, proizvod_velicina, proizvod_cena, slika_cela, slika_detalj, slika_cela1, slika_cela2 } = proizvod;


  // Preracunavanje cene u eur
  const cenaDin = proizvod_cena;
  const cenaEur = cenaDin / 117.5;
  const zaokEur = Math.round(cenaEur) + ' eur.';
  const zaokDin = cenaDin + ' din.';


  return (
    <section >

      <div className="item-container">

        {/*Popup prozor koji na klik otvara velike slike na celom ekranu*/}
        {/*<div className="popup" id="popup">
                  <span className='closeMobileMenu' onClick={closeModal}><IoCloseOutline style={iconStyle} /></span>
                  <div className="buttonsDiv" id="buttonsDiv"></div>
                </div>*/}

        <div className="item-container-images" id="gallery">
          <div className="item-container-images-big" id="imageBig">
            <span data-en="Show" data-sr="Pogledaj" onClick={openModal}>Show</span>
            <img src={slika_cela} alt={proizvod_naziv_en} />
          </div>

          <div className="item-container-images-small" id="imageSmall">
            <img src={slika_detalj} alt={proizvod_naziv_en} />
            <img src={slika_cela1} alt={proizvod_naziv_en} />
            <img src={slika_cela2} alt={proizvod_naziv_en} />
          </div>
        </div>

        <div className="item-container-text">
          <h1 data-en={proizvod_naziv_en} data-sr={proizvod_naziv_sr}>{proizvod_naziv_en}</h1>

          <div className="item-size">
            <label htmlFor="" data-en="Size" data-sr="Veličina">Size:</label>
            <h2>{proizvod_velicina}</h2>
            <p className="accent" data-en="Pišite nam da poručite svoju veličinu." data-sr="Text us to order your size.">Text us to order your size.</p>
          </div>

          <div className="item-description">
            <label htmlFor="" data-en="Item description" data-sr="Opis proizvoda">Item description:</label>
            <p data-en={proizvod_opis_en} data-sr={proizvod_opis_sr}>{proizvod_opis_en}</p>
          </div>

          <div className="item-price">
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

      <Modal modal={modal} setModal={setModal} />

    </section>
  )
}

export default SingleProduct