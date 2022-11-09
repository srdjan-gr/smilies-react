import React from 'react'
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line } from 'react-icons/ri'
import { useEffect } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';


import { useSelector, useDispatch } from 'react-redux';
import { getDashCategories } from "../../../redux/features/categoriesDash/categoriesDashSlice";
import { useState } from 'react';
import { configure } from '@testing-library/react';

const CategoryList = () => {

    const [brisanjeKategorije, setBrisanjeKategorije] = useState({
        id_kat: '',
        ime_kat_sr: '',
        ime_kat_en: '',
    });

    // Redux
    const categoryList = useSelector((state) => state.categoryDashList)
    const { loading, data, message } = categoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashCategories());
    }, [dispatch]);


    // Brisanje kategorije
    const deleteCategory = (id, ime_sr, ime_en) => {

        if (window.confirm(`Da li ste sigurni da želite da obrišete kategoriju '${ime_sr}'?`)) {

            const sendData = {
                id_kat: id,
                ime_kat_sr: ime_sr,
                ime_kat_en: ime_en,
            }

            axios({
                method: 'post',
                url: 'http://localhost:8080/srdjan/sapi/api/categoryDashDelete.php',
                data: sendData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }

            })
                .then((response) => {

                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        setBrisanjeKategorije({ id_kat: '', })

                    } else if (response.data.greska) {
                        notifyError(response.data.greska);

                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
        }
    }

    // Uppdate kategorije
    const updateCategory = (id) => {

        const sendData = {
            id_kat: id,
        }

        axios({
            method: 'post',
            url: 'http://localhost:8080/srdjan/sapi/api/categoryDash.php',
            data: sendData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } },


        })
            .then((response) => {
                console.log(sendData);

                if (response.data.uspesno) {
                    notifySuccess(response.data.uspesno);
                    setBrisanjeKategorije({ id_kat: '', })

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
        <div className='category__container category-list'>
            <div className="category__container-header">
                <h2>Lista Kategorija</h2>
            </div>

            <div className="category__container-inputs">

                <div className="list__search">
                    <div className="search-input">
                        <RiSearch2Line className='icon-small mr-1' />
                        <input type="text" />
                    </div>
                </div>


                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className='id'>Id</th>
                                <th className='name'>Naziv Sr</th>
                                <th className='name'>Naziv En</th>
                                <th className='date'>Kreirana</th>
                                <th className='user'>Kreirao</th>
                                <th className='option'>Izmeni</th>
                                <th className='option'>Obriši</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className='id'>{item.kat_id}</td>
                                            <td className='name'>{item.kat_naziv_sr}</td>
                                            <td className='name'>{item.kat_naziv_en}</td>
                                            <td className='date'>{item.kat_dkreiranja}</td>
                                            <td className='user'>{item.korisnici_korisnik_id}</td>
                                            <td className='option '><RiEditBoxLine className='icon-dash-info icon-dash-info-hover icon-small ml-15' onClick={() => updateCategory(item.kat_id)} /></td>
                                            <td className='option'><RiDeleteBinLine className='icon-dash-danger icon-dash-danger-hover icon-small ml-15' onClick={() => deleteCategory(item.kat_id, item.kat_naziv_sr, item.kat_naziv_en)} /></td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        </div >
    )
}

export default CategoryList