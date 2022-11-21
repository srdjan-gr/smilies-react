import React, { useEffect, useState }  from 'react';
import { useParams, Link } from 'react-router-dom';

// Data
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../redux/features/products/productsSlice"
import slike from '../../api/images';

// Styling
import './ProductCard.css';
import { IoBagAddOutline } from 'react-icons/io5';


const ProductCard = () => {

  let { singleid } = useParams();

  const productsList = useSelector((state) => state.productsList)
  const { loading, data, message } = productsList;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch]);


  return (

    <div className="container">
      <div className="proizvodi__container">

        {
          data.map((proizvod, idx) => {

            // Niz sa slikama
            let sveSlike = proizvod.slika_ime;
            let splitSlike = sveSlike.split(',');

            // Preracunavanje cene u eur
            const cenaDin = proizvod.proizvod_cena;
            const cenaEur = cenaDin / 117.5;
            const zaokEur = Math.round(cenaEur) + ' eur.';
            const zaokDin = cenaDin + ',00 din.';

            // Ako je ID iz usl(singleID) jednak ID-ju podkategorije onda renderovati podatke za sve proizvode iz te podtategorije ID-ja koji je poslat
            if (singleid == proizvod.podkategorija_podkat_id) {

              return (
                <div className="proizvodi__container-item" id="proizvodi" key={idx}>
                  <div className="proizvod">

                    <div className="proizvod__image">
                      <img src={slike.putanjaSlika + splitSlike[1]} alt={proizvod.proizvod_opis_sr} />
                      <Link to={`/product/${proizvod.proizvod_id}`}> <img src={slike.putanjaSlika + splitSlike[0]} alt={proizvod.proizvod_opis_sr} singleid={singleid}/>  </Link>
                    </div>

                    <div className="proizvod__opis">
                      <div className="proizvod__opis-txt">
                        <h1 data-en={proizvod.proizvod_naziv_en} data-sr={proizvod.proizvod_naziv_sr}>{proizvod.proizvod_naziv_sr}</h1>
                        <h2 data-en={zaokEur} data-sr={zaokDin}>{zaokDin}</h2>
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