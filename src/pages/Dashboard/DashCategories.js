import React, { useState, useEffect } from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import CategoryAdd from '../../components/Dashboard/CategoryAdd/CategoryAdd'
import CategoryList from '../../components/Dashboard/CategoryList/CategoryList'


const Categories = () => {

    const [asideMenu, setAsideMenu] = useState(false);
    const [devider, setDevider] = useState(false);

    useEffect(() => {
        const asideMenuStorage = localStorage.getItem('sidebar');
        if (asideMenuStorage === 'closed') {
            setAsideMenu(true);
        }
    }, [asideMenu]);



    return (
        <div className='dashboard-container'>
            <Navbar asideMenu={asideMenu} setAsideMenu={setAsideMenu} />
            <div className="dashboard__main">
                <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu} />

                <div className="main__section category__layout-grid">
                    {/*Ovde idu komponente svake stranice. iznad divovi ostaju isti na svakoj stranici*/}
                    <CategoryAdd />
                    <CategoryList />


                </div>
            </div>
        </div>
    )
}

export default Categories