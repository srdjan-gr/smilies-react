import { React, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

import { proizvodi } from '../../data';


const Product = ({ location, setLocation }) => {

    let curentLocation = useLocation()

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);

    let { singleProduct } = useParams();

    return (
        <>
            {
                proizvodi.map((proizvod, idx) => {

                    if (singleProduct == proizvod.id) {
                        return (
                            <div className='container' key={idx}>
                                <SingleProduct proizvod={proizvod} />
                                <ProductDescription proizvod={proizvod} />

                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Product