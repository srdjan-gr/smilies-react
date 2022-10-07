import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Devider from './components/Devider/Devider';
import Message from './components/Message/Message';

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


function App() {

  const [location, setLocation] = useState('/');

  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Devider />
        <Message />


        <Routes>
          <Route path='/' element={<Home location={location} setLocation={setLocation} />} />
          <Route path='/Contact' element={<Contact location={location} setLocation={setLocation} />} />
          <Route path='/About' element={<About location={location} setLocation={setLocation} />} />
          <Route path='/Login' element={<Login location={location} setLocation={setLocation} />} />


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





          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </Router >
  );
}

export default App;
