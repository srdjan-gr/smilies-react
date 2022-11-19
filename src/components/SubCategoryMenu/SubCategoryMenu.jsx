import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getSubCategories } from "../../redux/features/subcategories/subCategorySlice";

// styling
import './SubCategoryMenu.css'
import { IoCloseOutline } from 'react-icons/io5';
import submenuImg from '../../assets/img/home-sections/SmiliesEveryday-01.jpg'

let iconStyle = {
    cursor: 'pointer',
    fontSize: '2.2rem',
};


const SubCategoryMenu = ({ subCategoryMenu, setSubCategoryMenu, categoryId, setAccentColor }) => {

    const closeSubcategoryMenu = () => {
        setSubCategoryMenu(!subCategoryMenu);
    };

    // Redux
    const subCategoryList = useSelector((state) => state.subCategoryList)
    const { data, loading, message } = subCategoryList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

    return (
        <section className={`${subCategoryMenu ? 'submenuActive' : ''} submenu`}>

            <div className="container">
                <div className="submenu__container">
                    <span><IoCloseOutline style={iconStyle} 
                    onClick={() =>
                        [
                            closeSubcategoryMenu(), 
                            // setAccentColor()
                        ]
                    } /></span>

                    <div className="submenu__image">
                        <img src={submenuImg} alt="Smilies image" />
                    </div>

                    <div className="submenu__subcategories">



                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubCategoryMenu