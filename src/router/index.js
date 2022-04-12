import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import UsersIndex from '../views/users/Index';
import UsersDetail from '../views/users/Detail';
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
      <Route path="/users" element=
      {
        <>
          <Navbar>
            <UsersIndex/>
          </Navbar>
        </>
      } />
      <Route path="/users/:identifier" element=
      {
        <>
          <Navbar>
            <UsersDetail/>
          </Navbar>
        </>
      } />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;