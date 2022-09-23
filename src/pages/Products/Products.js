import { React, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard';



const Products = ({ location, setLocation }) => {

    let curentLocation = useLocation();


    // console.log(params)

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);



    return (
        <div className='container'>
            <ProductCard />

        </div>
    )
}

export default Products