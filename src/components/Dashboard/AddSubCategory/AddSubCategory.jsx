import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import api from '../../../api/api';

import { useSelector, useDispatch } from 'react-redux';
import { getDashSubCategory } from "../../../redux/features/subcategoriesdash/subCategoriesDahsSlice";
import { getDashCategories } from "../../../redux/features/categoriesDash/categoriesDashSlice";

const AddSubCategory = () => {

    // Initial data for create subcategory
    const [subcategorySr, setSubcategorySr] = useState('');
    const [subcategoryEn, setSubcategoryEn] = useState('');
    const [category, setCategory] = useState('');

    const subCategoryList = useSelector((state) => state.subCategoryDashList)
    const { dataUpdate } = subCategoryList;

    const categoryList = useSelector((state) => state.categoryDashList)
    const { loading, data, message } = categoryList;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashCategories());
    }, [dispatch]);

    // Create subcategory
    const handleSubmit = (e) => {
        e.preventDefault();

        const sendCreateData = {
            subcat_sr: subcategorySr,
            subcat_en: subcategoryEn,
            category: category,
        }

        api.post('subCategoryDashAdd.php', sendCreateData).then((response) => {

            if (response.data.uspesno) {
                notifySuccess(response.data.uspesno);
                setSubcategorySr('');
                setSubcategoryEn('');
                setCategory('');
                dispatch(getDashSubCategory());

            } else if (response.data.greska) {
                notifyError(response.data.greska);

            } else if (response.data.info) {
                notifyInfo(response.data.info);
            }
        })
    }

    // Update subcategories
    const [subkatIdUpdate, setsubkatIdUpdate] = useState('');
    const [subkatSrUpdate, setsubkatSrUpdate] = useState('');
    const [subkatEnUpdate, setsubkatEnUpdate] = useState('');
    const [categoryUpdate, setCategoryUpdate] = useState('');
    const handleUpdate = (e) => {
        e.preventDefault();

        const sendUpdateData = {
            subkat_id: subkatIdUpdate,
            subkat_sr: subkatSrUpdate,
            subkat_en: subkatEnUpdate,
            category_update: categoryUpdate,
        }

        api.post('subcategoryDashUpdate.php', sendUpdateData).then((response) => {

            if (response.data.uspesno) {
                notifySuccess(response.data.uspesno);
                setsubkatSrUpdate('');
                setsubkatEnUpdate('');
                setCategoryUpdate('');
                dispatch(getDashSubCategory());

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
        <div className='category__container container-height'>
            <div className="category__container-header">
                {
                    dataUpdate.subcategory ? <h2>Izmeni Podkategoriju</h2> : <h2>Dodaj Podkategoriju</h2>
                }
            </div>

            <div className="category__container-inputs p-2">
                {
                    dataUpdate.subcategory ?

                        <form onSubmit={handleUpdate}>
                            <label htmlFor="">Ime Podkategorije Srpski</label>
                            <input type="text" placeholder={dataUpdate.subcategory.podkat_naziv_sr} name="subkat_sr" value={subkatSrUpdate} onChange={(e) => setsubkatSrUpdate(e.target.value)} />

                            <label htmlFor="">Ime Podkategorije Engleski</label>
                            <input type="text" placeholder={dataUpdate.subcategory.podkat_naziv_en} name="subkat_en" value={subkatEnUpdate} onChange={(e) => setsubkatEnUpdate(e.target.value)} />

                            <div className="select-input">
                                <label htmlFor="selectInputs">Kategorija kojoj pripada</label>
                                <select id='selectInputs' name="categoryUpdate" onChange={(e) => setCategoryUpdate(e.target.value)} >
                                    <option value=''>-- Odaberite kategoriju --</option>
                                    {
                                        data.map((item, idx) => {
                                            return (
                                                <option key={idx} value={dataUpdate.subcategory.kat_id}>{item.kat_naziv_sr}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="category__container-inputs-content-buttons">
                                <button className='btn__dash-regular dash-button-info mt-2 mr-1' onClick={() => setsubkatIdUpdate(dataUpdate.subcategory.podkat_id)}>Izmeni Podkategoriju</button>
                            </div>
                        </form>

                        :

                        <form onSubmit={handleSubmit} >
                            <label htmlFor="">Ime Podkategorije Srpski</label>
                            <input type="text" placeholder='Ime Podkategorije na Srpskom' name="subcat_sr" value={subcategorySr} onChange={(e) => setSubcategorySr(e.target.value)} />

                            <label htmlFor="">Ime Podkategorije Engleski</label>
                            <input type="text" placeholder='Ime Podkategorije na Engleskom' name="subcat_en" value={subcategoryEn} onChange={(e) => setSubcategoryEn(e.target.value)} />

                            <div className="select-input">
                                <label htmlFor="selectInputs">Kategorija kojoj pripada</label>
                                <select id='selectInputs' name="category" onChange={(e) => setCategory(e.target.value)} >
                                    <option value=''>-- Odaberite kategoriju --</option>
                                    {
                                        data.map((item, idx) => {
                                            return (
                                                <option key={idx} value={item.kat_id}>{item.kat_naziv_sr}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="category__container-inputs-content-buttons">
                                <button className='btn__dash-regular dash-button-success  mt-2 mr-1'>Dodaj Podkategoriju</button>
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}

export default AddSubCategory