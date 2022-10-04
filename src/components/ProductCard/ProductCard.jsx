import React from 'react';
import { useParams } from 'react-router-dom';

// Data
import { proizvodi } from '../../data';

// Styling
import './ProductCard.css';
import { IoBagAddOutline } from 'react-icons/io5';

let iconStyle = {
  cursor: 'pointer',
  fontSize: '3.4rem',
};

const otvoriProizvod = () => {

};

const ProductCard = () => {

  let { singleid } = useParams();

  return (

    <div className="proizvodi__container">

      {
        proizvodi.map((proizvod, idx) => {

          if (singleid == proizvod.podk_id) {

            return (
              <div className="proizvodi__container-item" id="proizvodi" key={idx}>
                <div className="proizvod">

                  <div className="proizvod__image" onClick={otvoriProizvod}>

                    <img src={proizvod.slika_detalj} alt={proizvod.slika_opis} />
                    <img src={proizvod.slika_cela} alt="" />
                  </div>

                  <div className="proizvod__opis">
                    <div className="proizvod__opis-txt">
                      <h1>{proizvod.proizvod_naziv}</h1>
                      <h2>din. {proizvod.cena}</h2>
                    </div>
                    <div className="proizvod__opis-bag">
                      <span>
                        <IoBagAddOutline style={iconStyle} />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            )
          }
        })
      }

    </div>

  )
}

export default ProductCard