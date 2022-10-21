import React from 'react';
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

import { proizvodi } from '../../data';

const Product = ({ location, setLocation }) => {

    let curentLocation = useLocation()

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);

    let { singleProduct } = useParams();

    return (
        <div>
            <div >
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
            </div>

            <div className="container">
                <SimilarProducts />
            </div>
            <Footer />
        </div>
    )
}

export default Product