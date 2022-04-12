import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import NotFound from '../views/errors/NotFound';
import Login from '../views/auth/Login';
import Navbar from '../Components/Navbar';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element=
      {
        <>
          <Navbar>
            <Home/>
          </Navbar>
        </> 
      } />
      <Route path="/contact" element=
      {
        <>
          <Navbar>
            <Contact/>
          </Navbar>
        </>
      } />
      <Route path="/about" element=
      {
        <>
          <Navbar>
            <About/>
          </Navbar>
        </>
      } />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;