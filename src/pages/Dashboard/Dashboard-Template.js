import React from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <Navbar />
            <div className="dashboard__main">
                <Header />

                <div className="main__section">
                    {/*Ovde idu komponente svake stranice. iznad divovi ostaju isti na svakoj stranici*/}




 
                </div>
            </div>
        </div>
    )
}

export default Dashboard