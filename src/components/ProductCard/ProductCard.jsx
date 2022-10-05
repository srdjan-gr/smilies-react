import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Data
import { proizvodi } from '../../data';

// Styling
import './ProductCard.css';
import { IoBagAddOutline } from 'react-icons/io5';

let iconStyle = {
  cursor: 'pointer',
  fontSize: '3.4rem',
};



const ProductCard = () => {

  let { singleid } = useParams();

  return (

    <div className="proizvodi__container">

      {
        proizvodi.map((proizvod, idx) => {

          // Ako je ID iz usl(singleID) jednak ID-ju podkategorije onda renderovati podatke za sve proizvode iz te podtategorije ID-ja koji je poslat
          if (singleid == proizvod.podk_id) {

            return (
              <div className="proizvodi__container-item" id="proizvodi" key={idx}>
                <div className="proizvod">

                  <div className="proizvod__image">

                    <img src={proizvod.slika_detalj} alt={proizvod.proizvod_naziv_en} />
                    <Link to={`/product/${proizvod.id}`}> <img src={proizvod.slika_cela} alt={proizvod.proizvod_naziv_en} />  </Link>
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