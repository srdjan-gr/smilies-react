import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

import slike from '../../api/images';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Devider from '../../components/Devider/Devider';


import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../redux/features/products/productsSlice"

const Product = ({ location, setLocation }) => {

    let curentLocation = useLocation()

    const productsList = useSelector((state) => state.productsList)
    const { loading, data, message } = productsList;
    const dispatch = useDispatch();

    useEffect(() => {
        setLocation(curentLocation.pathname);
        dispatch(getProducts());
    }, [dispatch]);

    let { singleProduct } = useParams();

    return (
        <div>
            <Navbar />
            <Header />
            <Devider />
            <div >
                {
                    data.map((proizvod, idx) => {

                        if (singleProduct == proizvod.proizvod_id) {
                            return (
                                <div idx={idx} className='container' key={idx}>
                                    <SingleProduct proizvod={proizvod} slike={slike} />
                                    <ProductDescription proizvod={proizvod} slike={slike} />

                                    <SimilarProducts proizvod={proizvod} slike={slike} />
                                </div>
                            )
                        }
                    })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Product