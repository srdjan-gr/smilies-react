import React from 'react';
import './ProductCard.css';

import { useParams } from 'react-router-dom';

import { IoBagAddOutline } from 'react-icons/io5';
import { proizvodi } from '../../data';

let iconStyle = {
  cursor: 'pointer',
  fontSize: '3.4rem',
};

const ProductCard = () => {

  let params = useParams();

  return (

    <div>

      <div className="devider"></div>
      
      <div className="proizvodi__container">

        {proizvodi.map((proizvod, idx) => {

          return (

            <div className="proizvodi__container-item" id="proizvodi" key={idx}>
              <div className="proizvod">

                <div className="proizvod__image">
                  <img src={proizvod.slika_detalj} alt="Smilies Slika proizvoda detalj" />
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

        })}

      </div>
    </div>
  )
}

export default ProductCard