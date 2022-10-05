import { React, useState } from 'react'
import { useParams } from 'react-router-dom';

// Data
import { proizvodi } from '../../data';

// Styling
import './SingleProduct.css';
import { IoCloseOutline } from 'react-icons/io5';
let iconStyle = {
  cursor: 'pointer',
  fontSize: '2.4rem',
};



const SingleProduct = () => {

  const [modal, setModal] = useState('');

  const closeModal = () => {
    setModal(!modal);
  };

  let { singleProduct } = useParams();


  return (
    <section >

      {
        proizvodi.map((proizvod, idx) => {


          if (singleProduct == proizvod.id) {

            // Preracunavanje cene u eur
            const cenaDin = proizvod.proizvod_cena;
            const cenaEur = cenaDin / 117.5;

            const zaokEur = Math.round(cenaEur) + ' eur';
            const zaokDin = cenaDin + ' din';

            return (

              <div className="item-container" key={idx}>

                {/*Popup prozor koji na klik otvara velike slike na celom ekranu*/}
                {/*<div className="popup" id="popup">
                  <span className='closeMobileMenu' onClick={closeModal}><IoCloseOutline style={iconStyle} /></span>
                  <div className="buttonsDiv" id="buttonsDiv"></div>
                </div>*/}

                <div className="item-container-images" id="gallery">
                  <div className="item-container-images-big" id="imageBig">
                    {/*<p className="imgOverlay" onMouseOver="dosoMis()" onMouseLeave="otisoMis()">Show</p>*/}
                    <img src={proizvod.slika_cela} alt={proizvod.proizvod_naziv_en} />
                  </div>

                  <div className="item-container-images-small" id="imageSmall">
                    <img src={proizvod.slika_detalj} alt={proizvod.proizvod_naziv_en} />
                    <img src={proizvod.slika_cela1} alt={proizvod.proizvod_naziv_en} />
                    <img src={proizvod.slika_cela2} alt={proizvod.proizvod_naziv_en} />
                  </div>
                </div>

                <div className="item-container-text">
                  <h1 data-en={proizvod.proizvod_naziv_en} data-sr={proizvod.proizvod_naziv_sr}>{proizvod.proizvod_naziv_en}</h1>

                  <div className="item-size">
                    <label htmlFor="">Size:</label>
                    <h2>{proizvod.velicina}</h2>
                    <p className="accent" data-en="Pišite nam da poručite svoju veličinu." data-sr="Text us to order your size.">Text us to order your size.</p>
                  </div>

                  <div className="item-description">
                    <label htmlFor="">Item description:</label>
                    <p data-en={proizvod.proizvod_opis_en} data-sr={proizvod.proizvod_opis_en}>{proizvod.proizvod_opis_en}</p>
                  </div>

                  <div className="item-price">
                    <label htmlFor="">Item price:</label>
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
            )
          }
        })
      }

    </section>
  )
}

export default SingleProduct