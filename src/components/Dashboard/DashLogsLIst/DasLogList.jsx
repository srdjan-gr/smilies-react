import React from 'react'
import ProductLog from '../ProductLog/ProductLog'

const DasLogList = () => {
    return (
        <section className='logList_container'>

            <div className='logList_container-date'>
                <label className='' htmlFor="logDate">Vrsta Log fajla</label>
                <select id='logDate' name="velicina" className='mb-1' >
                    <option value="36">-- Tip Log Fajla --</option>
                    <option defaultValue="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>

                </select>
                <label className='' htmlFor="logDate">Log proizvoda za Datum</label>
                <select id='logDate' name="velicina"  >
                    <option value="36">-- Datum Log fajla --</option>
                    <option defaultValue="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>

                </select>
            </div>

            <article>
                <ProductLog />
            </article>
        </section>
    )
}

export default DasLogList