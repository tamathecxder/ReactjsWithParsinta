import React from 'react';
import AuthUser from '../Components/AuthUser';
import { UserProvider } from './context/User';

function Home(props) {
  return (
    <div className="container">
      <UserProvider>
        <div className="d-flex">
          <span>My name is &nbsp;</span><AuthUser/>
        </div>
      </UserProvider>
    </div>
  );
}

export default Home;