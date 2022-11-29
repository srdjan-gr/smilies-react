import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashSubCategory, editSubCategory  } from "../../../redux/features/subcategoriesdash/subCategoriesDahsSlice";

const SubCategoryList = () => {

    const subCategoryList = useSelector((state) => state.subCategoryDashList)
    const { subLoading, subData, subMessage } = subCategoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashSubCategory());
    }, [dispatch]);

    
    // Stanje za Update kategorije
    const [idSubkat, setIdSubkat] = useState({ podkat_id: '', })
    
    const updateSubcategory = (subcategory) => {
        dispatch(editSubCategory({
            subcategory
        }, [dispatch]))
    }
    
    // Inicijalno stanje za brisanje podkategorije
    const [brisanjePodkategorije, setBrisanjePodkategorije] = useState({
        id_podkat: '',
        ime_podkat_sr: '',
        ime_podkat_en: '',
    });
    
    const deleteSubcategory = (id, ime_sr, ime_en) => {

        if (window.confirm(`Da li ste sigurni da želite da obrišete podkategoriju '${ime_sr}'?`)) {

            const sendData = {
                id_podkat: id,
                ime_podkat_sr: ime_sr,
                ime_podkat_en: ime_en,
            }

            api({
                method: 'post',
                url: 'subCategoryDashDelete.php',
                data: sendData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }

            })
                .then((response) => {

                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        // setBrisanjeKategorije({ id_kat: '', })
                        dispatch(getDashSubCategory());

                    } else if (response.data.greska) {
                        notifyError(response.data.greska);

                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
        }
    }

    const search = () => {

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
                <h2>Lista Podkategorija</h2>
            </div>

            <div className="category__container-inputs">

                <div className="list__search">
                    <div className="search-input">
                        <RiSearch2Line className='icon-small mr-1' />
                        <input type="text" onChange={search}/>
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
                                subData.map((item, idx) => {

                                    return (
                                        <tr key={idx}>
                                            <td className='column-x-small'>{item.podkat_id}</td>
                                            <td className='column-medium'>{item.podkat_naziv_sr}</td>
                                            <td className='column-medium'>{item.podkat_naziv_en}</td>
                                            <td className='column-medium info-cell'>{item.kat_naziv_sr}</td>
                                            <td className='column-large'>{item.podkat_dkreiranja}</td>
                                            <td className='column-medium'>{item.korisnik_ime} {item.korisnik_prezime}</td>
                                            {/*<td className='option '><RiEditBoxLine className='icon-dash-info icon-dash-info-hover icon-small ml-15' onClick={() => setIdKat(item.kat_id)} /></td>*/}


                                            <td className='column-small options'>
                                                <RiEditBoxLine onClick={() => updateSubcategory(item)} className='icon-dash-info icon-small' />
                                                <RiDeleteBinLine onClick={() => deleteSubcategory(item.podkat_id, item.podkat_naziv_sr, item.podkat_naziv_en)} className='icon-dash-danger icon-small'
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