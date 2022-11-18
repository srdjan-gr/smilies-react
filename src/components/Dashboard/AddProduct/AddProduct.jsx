import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';
import { RiCameraLine, RiDeleteBinLine, RiCheckboxCircleLine } from 'react-icons/ri'

import { useSelector, useDispatch } from 'react-redux';
import { getDashSubCategory } from "../../../redux/features/subcategoriesdash/subCategoriesDahsSlice";



const AddProduct = () => {
  // Subcategory state
  const subCategoryList = useSelector((state) => state.subCategoryDashList)
  const { subLoading, subData, subMessage } = subCategoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashSubCategory());
  }, [dispatch]);



  const [slike, setSlike] = useState('');
  const [imeSr, setImeSr] = useState('');
  const [imeEn, setImeEn] = useState('');
  const [podkatpr, setPodkatpr] = useState('');
  const [cenapr, setCenapr] = useState('');
  const [snizenaCena, setSnizenaCena] = useState('');
  const [opisSr, setOpisSr] = useState('');
  const [opisEn, setOpisEn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < slike.length; i++) {
      formData.append('slike[]', slike[i]);
    }

    const sendData = {
      imeSr: imeSr,
      imeEn: imeEn,
      podkatpr: podkatpr,
      cenapr: cenapr,
      snizenaCena: snizenaCena,
      opisSr: opisSr,
      opisEn: opisEn,
    }

    for (let kljuc in sendData) {
      formData.append(kljuc, sendData[kljuc]);
    }

    axios({
      method: 'post',
      url: 'http://localhost:8080/srdjan/sapi/api/addproduct.php',
      data: formData,
    })
      .then((response) => {

        if (response.data.uspesno) {
          notifySuccess(response.data.uspesno);
        } else if (response.data.greska) {
          notifyError(response.data.greska);
        } else if (response.data.info) {
          notifyInfo(response.data.info);
        }

      })
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

    <div className='product'>
      <div className="category__container-header">
        <h2>Dodavanje proizvoda</h2>
      </div>

      <form className='product__container product__layout-grid' onSubmit={handleSubmit} encType="multipart/form-data">


        <div className="product__container-inputs p-2">

          <label htmlFor="">Naziv proizvoda Sr</label>
          <input type="text" placeholder='Naziv proizvoda Sr' name="imeSr" value={imeSr} onChange={(e) => setImeSr(e.target.value)} />

          <label htmlFor="">Naziv proizvoda En</label>
          <input type="text" placeholder='Naziv proizvoda En' name="imeEn" value={imeEn} onChange={(e) => setImeEn(e.target.value)} />

          <div className="select-input">
            <label htmlFor="selectInputs">Podkategorija kojoj pripada</label>
            <select id='selectInputs' name="podkatpr" value={podkatpr} onChange={(e) => setPodkatpr(e.target.value)} >
              <option value=''>-- Odaberite podkategoriju --</option>
              {
                subData.map((item, idx) => {
                  return (
                    <option key={idx} value={item.podkat_id}>{item.podkat_naziv_sr}</option>
                  )
                })
              }
            </select>
          </div>

          <label className='color-success-muted' htmlFor="">Regularna cena proizvoda * cena bez ,00</label>
          <input type="text" placeholder='Regularna cena proizvoda' name="cenapr" value={cenapr} onChange={(e) => setCenapr(e.target.value)} />

          <label className='color-danger-muted' htmlFor="">Snižena cena proizvoda * cena bez ,00</label>
          <input type="text" placeholder='Snižena cena proizvoda' name="snizenaCena" value={snizenaCena} onChange={(e) => setSnizenaCena(e.target.value)} />

        </div>


        <div className="product__container-inputs p-2">
          <label htmlFor="">Opis proizvoda Sr</label>
          <textarea name="opis_en" id="" cols="50" rows="8" name="opisSr" value={opisSr} onChange={(e) => setOpisSr(e.target.value)} ></textarea>

          <label htmlFor="">Opis proizvoda En</label>
          <textarea name="opis_en" id="" cols="50" rows="8" name="opisEn" value={opisEn} onChange={(e) => setOpisEn(e.target.value)}></textarea>
        </div>


        <div className="product__container-inputs p-2">

          <div>
            <label htmlFor="">Slike proizvoda</label>
            <label htmlFor='image' className='input-file-styling'>
              <RiCameraLine className='icon-xl' />
              <input id='image' type="file" accept="image/jpg" multiple name="slike" onChange={(e) => setSlike(e.target.files)} />
            </label>
            <label className='color-info-muted' htmlFor="">Maksimalno 4 slike.</label>
          </div>

          <div className='image-preview'>
            <label htmlFor="">Pregled selektovanih slika</label>
            <div className="image__thumbnail">

            </div>
          </div>

          <div className="image__thumbnails-names">


          </div>

        </div>

        <button className='btn__dash-regular dash-button-success'>Dodaj Proizvod</button>

      </form>
    </div>





  )
}

export default AddProduct