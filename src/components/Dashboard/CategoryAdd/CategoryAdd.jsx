import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

const Categories = () => {

  const [data, setData] = useState({

    kategorija_sr: '',
    kategorija_en: '',

  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      kategorija_sr: data.kategorija_sr,
      kategorija_en: data.kategorija_en,
    }

    axios.post('http://localhost:8080/srdjan/sapi/api/categoryAdd.php', sendData).then((response) => {


      if (response.data.uspesno) {
        notifySuccess(response.data.uspesno);
        setData({ kategorija_sr: '', kategorija_en: '' })

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
        <h2>Dodaj Kategoriju</h2>
      </div>

      <div className="category__container-inputs p-2">

        <div className="category__container-inputs-content">

          <form onSubmit={handleSubmit}>

            <label htmlFor="">Ime Kategorije Srpski</label>
            <input type="text" placeholder='Unesite ime kategorije na Srpskom' name="kategorija_sr" value={data.kategorija_sr} onChange={handleChange} />

            <label htmlFor="">Ime Kategorije Engleski</label>
            <input type="text" placeholder='Unesite ime kategorije na Engleskom' name="kategorija_en" value={data.kategorija_en} onChange={handleChange} />

            <button className='btn__dash-regular icon-dash-green icon-dash-green-hover mt-2'>Dodaj Kategoriju</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Categories