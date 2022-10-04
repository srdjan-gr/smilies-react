import { React, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct';

const Product = ({ location, setLocation }) => {

    let curentLocation = useLocation()

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);


    return (
        <div className='container'>
            <SingleProduct />

        </div>
    )
}

export default Product