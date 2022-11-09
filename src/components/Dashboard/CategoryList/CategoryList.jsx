import React from 'react'
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import { useEffect } from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { getDashCategories } from "../../../redux/features/categoriesDash/categoriesDashSlice";

const CategoryList = () => {

    // Redux
    const categoryList = useSelector((state) => state.categoryDashList)
    const { loading, data, message } = categoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashCategories());
    }, [dispatch]);




    return (
        <div className='category__container category-list'>
            <div className="category__container-header">
                <h2>Lista Kategorija</h2>
            </div>

            <div className="category__container-inputs p-2">

                <div className="table">
                    <table>
                        <tr>
                            <th className='id'>Id</th>
                            <th className='name'>Naziv Sr</th>
                            <th className='name'>Naziv En</th>
                            <th className='date'>Kreirana</th>
                            <th className='user'>Kreirao</th>
                            <th className='option'>Izmeni</th>
                            <th className='option'>Obriši</th>
                        </tr>

                        {
                            data.map((item, idx) => {

                                return (
                                    <tr>
                                        <td className='id'>{item.kat_id}</td>
                                        <td className='name'>{item.kat_naziv_sr}</td>
                                        <td className='name'>{item.kat_naziv_en}</td>
                                        <td className='date'>{item.kat_dkreiranja}</td>
                                        <td className='user'>{item.korisnici_korisnik_id}</td>
                                        <td className='option '><RiEditBoxLine className='icon-dash-info icon-dash-info-hover icon-small ml-15' /></td>
                                        <td className='option'><RiDeleteBinLine className='icon-dash-danger icon-dash-danger-hover icon-small ml-15' /></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CategoryList