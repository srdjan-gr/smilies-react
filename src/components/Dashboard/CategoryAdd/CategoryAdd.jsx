import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashCategories, getUpdateDashCategories } from "../../../redux/features/categoriesDash/categoriesDashSlice";


const Categories = () => {

  const categoryList = useSelector((state) => state.categoryDashList)
  // Redux Get category data
  // Redux Get Update category from state - datat send from CategoryList Component
  const { loading, data, message, loadingUpdate, dataUpdate, messageUpdate } = categoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashCategories());
  }, [dispatch]);


  const [dataK, setDataK] = useState({
    kategorija_sr: '',
    kategorija_en: '',
  });

  // Update category initial state
  const [katIdUpdate, setKatIdUpdate] = useState('');
  const [katSrUpdate, setKatSrUpdate] = useState('');
  const [katEnUpdate, setKatEnUpdate] = useState('');

  const [card, setCard] = useState(false);


  const handleChange = (e) => {
    setDataK({ ...dataK, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      kategorija_sr: dataK.kategorija_sr,
      kategorija_en: dataK.kategorija_en,
    }

    axios.post('http://localhost:8080/srdjan/sapi/api/categoryAdd.php', sendData).then((response) => {


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

  const handleUpdate = (e) => {
    e.preventDefault();

    const sendData = {
      kat_id: katIdUpdate,
      kat_sr: katSrUpdate,
      kat_en: katEnUpdate,
    }

    axios.post('http://localhost:8080/srdjan/sapi/api/categoryDashUpdate.php', sendData).then((response) => {


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


  // Update kategorije
  // const handleUpdate = (e) => {
  //   e.preventDefault();

  //   dispatch(putUpdateDashCategories({
  //     kat_id: katIdUpdate,
  //     kat_sr: katSrUpdate,
  //     kat_en: katEnUpdate,

  //   }, [dispatch]))

  //   // if (dataUpdated.greska) {
  //   //   notifyError(dataUpdated.greska)

  //   // } else if (dataUpdated.uspesno) {

  //   //   notifySuccess(dataUpdated.uspesno)

  //   //   setKatIdUpdate({ kat_id: '' });
  //   //   setKatSrUpdate({ kat_sr: '' });
  //   //   setKatEnUpdate({ kat_en: '' });
  //   // }
  //   dispatch(getDashCategories());


  // }

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
          dataUpdate ? <h2>Izmeni Kategoriju</h2> : <h2>Dodaj Kategoriju</h2>
        }
      </div>

      <div className="category__container-inputs p-2">

        {
          dataUpdate ?

            dataUpdate.map((item, idx) => {
              return (
                <form onSubmit={handleUpdate} key={idx}>

                  <label htmlFor="">Novo Ime Kategorije Srpski</label>
                  <input type="text" placeholder={item.kat_naziv_sr} name="kat_sr" value={katSrUpdate} onChange={(e) => setKatSrUpdate(e.target.value)} />

                  <label htmlFor="">Novo Ime Kategorije Engleski</label>
                  <input type="text" placeholder={item.kat_naziv_en} name="kat_en" value={katEnUpdate} onChange={(e) => setKatEnUpdate(e.target.value)} />

                  <div className="category__container-inputs-content-buttons">
                    <button className='btn__dash-regular dash-button-info  mt-2' onClick={() => setKatIdUpdate(item.kat_id)}>Izmeni Kategoriju</button>
                  </div>

                </form>
              )
            })

            :

            <form form form form onSubmit={handleSubmit} >
              <label htmlFor="">Ime Kategorije Srpski</label>
              <input type="text" placeholder='Ime kategorije na Srpskom' name="kategorija_sr" value={dataK.kategorija_sr} onChange={handleChange} />

              <label htmlFor="">Ime Kategorije Engleski</label>
              <input type="text" placeholder='Ime kategorije na Engleskom' name="kategorija_en" value={dataK.kategorija_en} onChange={handleChange} />

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