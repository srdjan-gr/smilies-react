import React from 'react'
import api from '../../../api/api';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashCategories, getUpdateDashCategories } from "../../../redux/features/categoriesDash/categoriesDashSlice";

const Categories = () => {

  const [card, setCard] = useState(false);

  // Initial state for creating category
    const [dataK, setDataK] = useState({
      kategorija_sr: '',
      kategorija_en: '',
    });


    // Redux Get category data
    // Redux Get Update category from state - datat send from CategoryList Component
  const categoryList = useSelector((state) => state.categoryDashList)
  const { loading, data, message, dataUpdate} = categoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashCategories());
  }, [dispatch]);



  const handleChange = (e) => {
    setDataK({ ...dataK, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      kategorija_sr: dataK.kategorija_sr,
      kategorija_en: dataK.kategorija_en,
    }

    api({ 
        method: 'post',
        url: "category.php?fun=add",
        data: sendData,
      })
    
    .then((response) => {

      if (response.data.uspesno) {
        notifySuccess(response.data.uspesno);
        setDataK({ kategorija_sr: '', kategorija_en: '' })
        dispatch(getDashCategories());
      } else if (response.data.greska) {
        notifyError(response.data.greska);

      } else if (response.data.info) {
        notifyInfo(response.data.info);
      }
    })
  }

  
  // Update category initial state
  const [katIdUpdate, setKatIdUpdate] = useState('');
  const [katSrUpdate, setKatSrUpdate] = useState('');
  const [katEnUpdate, setKatEnUpdate] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    const sendData = {
      kat_id: katIdUpdate,
      kat_sr: katSrUpdate,
      kat_en: katEnUpdate,
    }

    api({
      method: 'post',
      url: 'category.php?fun=update',
      data: sendData,
    })
      .then((response) => {

      if (response.data.uspesno) {
        notifySuccess(response.data.uspesno);
        setKatSrUpdate('');
        setKatEnUpdate('');
        dispatch(getDashCategories());

        setCard(false);
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
    <div className='category__container'>
      <div className="category__container-header">
        {
          dataUpdate.category ? <h2>Izmeni Kategoriju</h2> : <h2>Dodaj Kategoriju</h2>
        }
      </div>

      <div className="category__container-inputs p-2">

        {
          dataUpdate.category ?

              <form onSubmit={handleUpdate}>

                <label htmlFor="">Novo Ime Kategorije Srpski</label>
                <input type="text" placeholder={dataUpdate.category.kat_naziv_sr} name="kat_sr" value={katSrUpdate} onChange={(e) => setKatSrUpdate(e.target.value)} />

                <label htmlFor="">Novo Ime Kategorije Engleski</label>
                <input type="text" placeholder={dataUpdate.category.kat_naziv_en} name="kat_en" value={katEnUpdate} onChange={(e) => setKatEnUpdate(e.target.value)} />

                <div className="category__container-inputs-content-buttons">
                  <button className='btn__dash-regular dash-button-info  mt-2' onClick={() => setKatIdUpdate(dataUpdate.category.kat_id)}>Izmeni Kategoriju</button>
                </div>

              </form>

            :

              <form onSubmit={handleSubmit} >
                <label htmlFor="">Ime Kategorije Srpski</label>
                <input type="text" placeholder='Kategorija Sr' name="kategorija_sr" value={dataK.kategorija_sr} onChange={handleChange} />

                <label htmlFor="">Ime Kategorije Engleski</label>
                <input type="text" placeholder='Kategorija En' name="kategorija_en" value={dataK.kategorija_en} onChange={handleChange} />

                <div className="category__container-inputs-content-buttons">
                  <button className='btn__dash-regular dash-button-success  mt-2 mr-1'>Dodaj Kategoriju</button>
                </div>
              </form>
        }
      </div>
    </div>
  )

}

export default Categories