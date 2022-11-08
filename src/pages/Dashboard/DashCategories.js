import React from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import CategoryAdd from '../../components/Dashboard/CategoryAdd/CategoryAdd'
import CategoryList from '../../components/Dashboard/CategoryList/CategoryList'


const Categories = () => {
    return (
        <div className='dashboard-container'>
            <Navbar />
            <div className="dashboard__main">
                <Header />

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