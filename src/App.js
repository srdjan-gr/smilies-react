import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Products from './pages/Products/Products';

import Header from './components/Header/Header';
import SubCategoryMenu from './components/SubCategoryMenu/SubCategoryMenu';



function App() {

  const [location, setLocation] = useState('/');


  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <SubCategoryMenu />

        <Routes>
          <Route path='/' element={<Home location={location} setLocation={setLocation} />} />
          <Route path='/Contact' element={<Contact location={location} setLocation={setLocation} />} />
          <Route path='/About' element={<About location={location} setLocation={setLocation} />} />
          <Route path='/Login' element={<Login location={location} setLocation={setLocation} />} />

          <Route path='/Products' element={<Products location={location} setLocation={setLocation} />} />




          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
