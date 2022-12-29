import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

// Redux
import { useDispatch } from 'react-redux';
import { countTotal } from './redux/features/cart/cartSlice';

// Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Devider from './components/Devider/Devider';
import Message from './components/Message/Message';
import Totop from './components/ToTop/Totop';
import Button from './components/Button/Button';
import { ToastContainer } from 'react-toastify';

// Pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Cookies from './pages/Cookies/Cookies';
import Refund from './pages/Refund/Refund';
import Dashboard from './pages/Dashboard/Dashboard';
import DashCategories from './pages/Dashboard/DashCategories';
import DashSubCategories from './pages/Dashboard/DashSubCategories';
import DashCreateProduct from './pages/Dashboard/DashCreateProduct';
import DashProductList from './pages/Dashboard/DashProductList';
import ProductsLog from './pages/Dashboard/dashProductLog';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Dashboard/Orders';


function App() {

  const [location, setLocation] = useState('/');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countTotal());
  }, [dispatch]);


  let error = ''

  return (
    <Router>
      <div>

        <Totop />
        <ToastContainer autoClose={2500} />

        <Routes>
          <Route path='/' element={<Home location={location} setLocation={setLocation} />} />
          <Route path='/Contact' element={<Contact location={location} setLocation={setLocation} />} />
          <Route path='/About' element={<About location={location} setLocation={setLocation} />} />
          <Route path='/Login' element={<Login location={location} setLocation={setLocation} message={message} setMessage={setMessage} />} />
          <Route path='/Payment' element={<Payment location={location} setLocation={setLocation} />} />

          <Route path='/Terms' element={<Terms location={location} setLocation={setLocation} />} />
          <Route path='/Privacy' element={<Privacy location={location} setLocation={setLocation} />} />
          <Route path='/Cookies' element={<Cookies location={location} setLocation={setLocation} />} />
          <Route path='/Refund' element={<Refund location={location} setLocation={setLocation} />} />

          <Route path='/Products' element={<Products location={location} setLocation={setLocation} />} >
            <Route path=':singleid' element={<Products />} />
          </Route>

          <Route path='/Product' element={<Product location={location} setLocation={setLocation} />} >
            <Route path=':singleProduct' element={<Product />} />
          </Route>

          {/*   <Route path='/Dashboard' element={<Dashboard location={location} setLocation={setLocation} />} >
            <Route path=':page' element={<Dashboard />} />
          </Route>*/}

          <Route path='/Dashboard' element={<Dashboard location={location} setLocation={setLocation} />} />
          <Route path='/DashCategories' element={<DashCategories location={location} setLocation={setLocation} />} />
          <Route path='/DashSubCategories' element={<DashSubCategories location={location} setLocation={setLocation} />} />
          <Route path='/DashCreateProduct' element={<DashCreateProduct location={location} setLocation={setLocation} />} />
          <Route path='/productlist' element={<DashProductList location={location} setLocation={setLocation} />} />
          <Route path='/dashproductsLog' element={<ProductsLog location={location} setLocation={setLocation} />} />

          <Route path='/orders' element={<Orders location={location} setLocation={setLocation} />} />



          <Route path='*' element={<ErrorPage error />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
