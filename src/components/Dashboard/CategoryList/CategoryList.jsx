import React, {useEffect, useState} from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';


import { useSelector, useDispatch } from 'react-redux';
import { getDashCategories, getUpdateDashCategories, editCategory } from "../../../redux/features/categoriesDash/categoriesDashSlice";


const CategoryList = () => {

    // Inicijalno stanje za brisanje kategorije
    const [brisanjeKategorije, setBrisanjeKategorije] = useState({
        id_kat: '',
        ime_kat_sr: '',
        ime_kat_en: '',
    });

    // Stanje za Update kategorije
    const [idKat, setIdKat] = useState({ id_kat: '', })

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

            api({
                method: 'post',
                url: 'categoryDashDelete.php',
                data: sendData,
            })
                .then((response) => {

                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        setBrisanjeKategorije({ id_kat: '', })
                        dispatch(getDashCategories());

                    } else if (response.data.greska) {
                        notifyError(response.data.greska);

                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
        }
    }

    // Update kategorije
    const updateCategory = (category) => {
        dispatch(editCategory({
            category
        }, [dispatch]))
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
                    <table >
                        <thead>
                            <tr>
                                <th className='column-x-small'>Id</th>
                                <th className='column-medium'>Naziv Sr</th>
                                <th className='column-medium'>Naziv En</th>
                                <th className='column-large'>Kreirana</th>
                                <th className='column-large'>Kreirao</th>
                                <th className='column-small options'>Opcije</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                loading ? <p>Loading...</p> : data.greska ? <h3 className='color-danger'>{data.greska}</h3> :
                                data.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className='column-x-small'>{item.kat_id}</td>
                                            <td className='column-medium'>{item.kat_naziv_sr}</td>
                                            <td className='column-medium'>{item.kat_naziv_en}</td>
                                            <td className='column-large'>{item.kat_dkreiranja}</td>
                                            <td className='column-large'>{item.korisnik_ime} {item.korisnik_prezime}</td>
                                            {/*<td className='option '><RiEditBoxLine className='icon-dash-info icon-dash-info-hover icon-small ml-15' onClick={() => setIdKat(item.kat_id)} /></td>*/}


                                            <td className='column-small options'>
                                                <RiEditBoxLine onClick={() => updateCategory(item)} className='icon-dash-info icon-small' />
                                                <RiDeleteBinLine className='icon-dash-danger  icon-small'
                                                    onClick={() => deleteCategory(item.kat_id, item.kat_naziv_sr, item.kat_naziv_en)} />
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

export default CategoryList