import React, { useEffect, useState } from 'react'
import axios from "axios";
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashSubCategory } from "../../../redux/features/subcategoriesdash/subCategoriesDahsSlice";

const SubCategoryList = () => {

    const subCategoryList = useSelector((state) => state.subCategoryDashList)
    const { loading, data, message } = subCategoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashSubCategory());
    }, [dispatch]);


    const updateSubcategory = () => {

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
                    <table >
                        <thead>
                            <tr>
                                <th className='column-x-small'>Id</th>
                                <th className='column-medium'>Naziv Sr</th>
                                <th className='column-medium'>Naziv En</th>
                                <th className='column-medium'>Kategorija</th>
                                <th className='column-large'>Kreirana</th>
                                <th className='column-medium'>Kreirao</th>
                                <th className='column-small options'>Opcije</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((item, idx) => {

                                    return (
                                        <tr key={idx}>
                                            <td className='column-x-small'>{item.podkat_id}</td>
                                            <td className='column-medium'>{item.podkat_naziv_sr}</td>
                                            <td className='column-medium'>{item.podkat_naziv_en}</td>
                                            <td className='column-medium'>{item.kat_naziv_sr}</td>
                                            <td className='column-large'>{item.podkat_dkreiranja}</td>
                                            <td className='column-medium'>{item.korisnik_ime} {item.korisnik_prezime}</td>
                                            {/*<td className='option '><RiEditBoxLine className='icon-dash-info icon-dash-info-hover icon-small ml-15' onClick={() => setIdKat(item.kat_id)} /></td>*/}


                                            <td className='column-small options'>
                                                <RiEditBoxLine onClick={() => updateSubcategory(item.podkat_id)} className='icon-dash-info icon-dash-info-hover icon-small' />
                                                <RiDeleteBinLine className='icon-dash-danger icon-dash-danger-hover icon-small'
                                                />
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

export default SubCategoryList