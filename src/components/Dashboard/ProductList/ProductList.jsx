import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line, RiEyeLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../../redux/features/products/productsSlice"

const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const ProductList = () => {

  const productsList = useSelector((state) => state.productsList)
  const { loading, data, message } = productsList;


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Inicijalno stanje za brisanje proizvoda
  const [productDelete, setproductDelete] = useState({
    id_pr: '',
    ime_pr_sr: '',
    ime_pr_en: '',
  });

  const deleteProduct = (id, ime_sr, ime_en) => {
      if (window.confirm(`Da li ste sigurni da želite da obrišete proizvod '${ime_sr}'?`)) {

        const sendData = {
            id_pr: id,
            ime_pr_sr: ime_sr,
            ime_pr_en: ime_en,
        }

        api({
            method: 'post',
            url: 'productDelete.php',
            data: sendData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((response) => {

                if (response.data.uspesno) {
                    notifySuccess(response.data.uspesno);
                    setproductDelete({ id_kat: '', })
                    dispatch(getProducts());

                } else if (response.data.greska) {
                    notifyError(response.data.greska);

                } else if (response.data.info) {
                    notifyInfo(response.data.info);
                }
            })
      }
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

    <div className='category__container category-list'>
      <div className="category__container-header">
        <h2>Lista Podkategorija</h2>
      </div>

      <div className="category__container-inputs">

        <div className="list__search">
          <div className="search-input">
            <RiSearch2Line className='icon-small mr-1' />
            <input type="text" />
          </div>
        </div>

        <div className="table">
          <table >
            <thead>
              <tr>
                <th className='column-x-small'>Id</th>
                <th className='column-large'>Naziv Sr</th>
                <th className='column-large'>Naziv En</th>
                <th className='column-medium'>Kreirao</th>
                <th className='column-large'>Kreirano</th>
                <th className='column-large'>Izmenjeno</th>
                <th className='column-small'>Cena</th>
                <th className='column-small'>Slika</th>
                <th className='column-small options'>Opcije</th>
              </tr>
            </thead>

            <tbody>
              {
                loading ? <p>Loading...</p> : data.greska ? <h3 className='color-danger'>{data.greska}</h3> :

                data.map((product, idx) => {

                  let sveSlike = product.slika_ime;
                  let splitSlike = sveSlike.split(',');

                  return (
                    <tr key={idx}>
                      <td className='column-x-small'>{product.proizvod_id}</td>
                      <td className='column-large'>{product.proizvod_naziv_sr}</td>
                      <td className='column-large'>{product.proizvod_naziv_en}</td>
                      <td className='column-medium'>{product.korisnik_ime}</td>
                      <td className='column-large'>{product.proizvod_vreme_dodat}</td>
                      <td className='column-large'>{product.proizvod_vreme_izmene}</td>
                      <td className='column-small'>{product.proizvod_cena}</td>
                      <td className='column-small'><img src={slike + splitSlike[0]} alt={product.proizvod_naziv_sr} /></td>

                      <td className='column-small options'>
                        <RiEyeLine className='icon-dash-success icon-small' />
                        <RiEditBoxLine className='icon-dash-info icon-small' />
                        <RiDeleteBinLine className='icon-dash-danger  icon-small'
                          onClick={() => deleteProduct(product.proizvod_id, product.proizvod_naziv_sr, product.proizvod_naziv_en)} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ProductList