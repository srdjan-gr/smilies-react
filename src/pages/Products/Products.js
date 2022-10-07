import { React, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import ProductCard from '../../components/ProductCard/ProductCard';



const Products = ({ location, setLocation }) => {

    let curentLocation = useLocation();

    useEffect(() => {
        setLocation(curentLocation.pathname);
    }, []);

    return (
        <div>
            <ProductCard />
            <Footer />

        </div>

    )
}

export default Products