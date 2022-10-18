import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Data
import { proizvodi } from '../../data';

// Styling
import './ProductCard.css';
import { IoBagAddOutline } from 'react-icons/io5';


const ProductCard = () => {

  let { singleid } = useParams();


  return (

    <div className="container">
      <div className="proizvodi__container">

        {
          proizvodi.map((proizvod, idx) => {

            // Preracunavanje cene u eur
            const cenaDin = proizvod.proizvod_cena;
            const cenaEur = cenaDin / 117.5;
            const zaokEur = Math.round(cenaEur) + ' eur.';
            const zaokDin = cenaDin + ' din.';

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
                        <h1 data-en={proizvod.proizvod_naziv_en} data-sr={proizvod.proizvod_naziv_sr}>{proizvod.proizvod_naziv_en}</h1>
                        <h2 data-en={zaokEur} data-sr={zaokDin}>{zaokEur} </h2>
                      </div>
                      <div className="proizvod__opis-bag">
                        <span><IoBagAddOutline className='icon--big'/></span>
                      </div>
                    </div>

                  </div>
                </div>
              )
            }
          })
        }

      </div>
    </div>

  )
}

export default ProductCard