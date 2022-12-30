import React, { useEffect, useState } from 'react'
import { RiLoginCircleLine } from 'react-icons/ri'
import api from '../../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

const DasLogList = () => {

    const [date, setDate] = useState('');
    const [category, setcategpry] = useState('kategorije');
    const [type, setType] = useState('');
    const [logData, setLogData] = useState([]);

    console.log(logData);

    const handleSubmit = (e) => {
        e.preventDefault();

        // JSON data for sending
        const data = {
            date: date,
            category: category,
            type: type
        }

        api({
            method: 'post',
            url: 'logs.php?fun=read&lokacija=kategorije',
            data: data,
        })
            .then((response) => {

                if (response.data.uspesno) {
                    setLogData(response.data);
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
        <section className='logList_container'>

            <form onSubmit={handleSubmit}>
                <div className='logList_container-options'>
                    <div className="option--container">
                        <label className='' htmlFor="logType">Vrsta Log fajla</label>
                        <select id='logType' name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="0">-- Tip Log Fajla --</option>
                            <option value="success">Uspesno</option>
                            <option value="error">Greske</option>
                            <option value="update">Izmena</option>
                            <option value="danger">Danger</option>
                        </select>
                    </div>
                    <div className="option--container">
                        <label className='' htmlFor="logDate">Datum Log-a</label>
                        <input type="date" id="logDate" name="date" value={date} onChange={(e) => setDate(e.target.value)}
                            min="2022-01-01" max="2050-12-31"></input>
                    </div>

                    <button className='logButton'><RiLoginCircleLine className='icon-xl icon-dash-success custom-margin' /></button>
                </div>
            </form>

            <article>
                {logData.uspesno}
            </article>
        </section>
    )
}

export default DasLogList