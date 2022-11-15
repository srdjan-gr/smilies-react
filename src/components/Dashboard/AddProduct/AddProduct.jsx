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

  const [imageThumbnail, setImageThumbnail] = useState([]);

  const handleImages = (e) => {

    const slike = e.target.files;
    const selektovaneSlikeNiz = Array.from(slike);

    const sveSlike = selektovaneSlikeNiz.map((slika) => {
      return URL.createObjectURL(slika);
    });

    setImageThumbnail((prethodna) => prethodna.concat(sveSlike));
  };

  const imagesValidation = (images) => {
    if (images > 0 && images > 4) {
      return (
        <p className='color-danger-muted'>Odabrali ste više slika od maksimuma. Obrišite {images - 4}</p>
      )
    } else if (images == 4) {
      return (
        <RiCheckboxCircleLine className='color-info-success icon-main mt-1 color-success-muted' />
      )
    } else {
      return (
        <p className='color-info-muted'>Niste odabrali slike za proizvod.</p>
      )
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashSubCategory());
  }, [dispatch]);



  return (



    <div className='product'>
      <div className="category__container-header">
        <h2>Dodavanje proizvoda</h2>
      </div>

      <form className='product__container product__layout-grid'>


        <div className="product__container-inputs p-2">

          <label htmlFor="">Naziv proizvoda Sr</label>
          <input type="text" placeholder='Naziv proizvoda Sr' name="subcat_sr" />

          <label htmlFor="">Naziv proizvoda En</label>
          <input type="text" placeholder='Naziv proizvoda En' name="subcat_en" />

          <div className="select-input">
            <label htmlFor="selectInputs">Podkategorija kojoj pripada</label>
            <select id='selectInputs' name="category" >
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
          <input type="text" placeholder='Regularna cena proizvoda' name="subcat_en" />

          <label className='color-danger-muted' htmlFor="">Snižena cena proizvoda * cena bez ,00</label>
          <input type="text" placeholder='Snižena cena proizvoda' name="subcat_en" />

        </div>


        <div className="product__container-inputs p-2">
          <label htmlFor="">Opis proizvoda Sr</label>
          <textarea name="opis_en" id="" cols="50" rows="8"></textarea>

          <label htmlFor="">Opis proizvoda En</label>
          <textarea name="opis_en" id="" cols="50" rows="8"></textarea>
        </div>


        <div className="product__container-inputs p-2">

          <div>
            <label htmlFor="">Slike proizvoda</label>
            <label htmlFor='image' className='input-file-styling'>
              <RiCameraLine className='icon-xl' />
              <input id='image' type="file" accept="image/jpg" multiple name="slike" onChange={handleImages} />
            </label>
            <label className='color-info-muted' htmlFor="">Maksimalno 4 slike.</label>
          </div>

          <div className='image-preview'>
            <label htmlFor="">Pregled selektovanih slika</label>
            <div className="image__thumbnail">
              {
                imageThumbnail.map((image, idx) => {
                  return (
                    <div>
                      <RiDeleteBinLine className='icon-dash-danger icon-small' onClick={() => setImageThumbnail(imageThumbnail.filter((e) => e != image))} />
                      <img key={idx} src={image} />

                      <p>{idx + 1}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="image__thumbnails-names">
            {imagesValidation(imageThumbnail.length)}
          </div>


        </div>

        <button className='btn__dash-regular dash-button-success'>Dodaj Proizvod</button>

      </form>
    </div>
  )
}

export default AddProduct