import { React, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';


import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header/Header';



function App() {

  const [location, setLocation] = useState('/');


  return (
    <Router>
      <div>
        <Navbar />
        <Header />

        <Routes>
          <Route path='/' element={<Home location={location} setLocation={setLocation} />} />
          <Route path='/Contact' element={<Contact location={location} setLocation={setLocation} />} />
          <Route path='/About' element={<About location={location} setLocation={setLocation} />} />
          <Route path='/Login' element={<Login location={location} setLocation={setLocation} />} />




          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
