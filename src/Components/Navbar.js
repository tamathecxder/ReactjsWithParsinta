import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserProvider } from '../views/context/User'
import AuthUser from './AuthUser';
import { authUser } from '../store'
import { useRecoilValue } from 'recoil';

function Navbar({ children }) {
  const { user } = useRecoilValue(authUser)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Container</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown07">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-3">
        {children}
      </div>
    </div>
  );
}

export default Navbar;