import React from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Navbar from '../../components/Dashboard/Navbar/Navbar'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>

            <Navbar />

            <div className="dashbopard__main">
                <Header />

            </div>

        </div>
    )
}

export default Dashboard