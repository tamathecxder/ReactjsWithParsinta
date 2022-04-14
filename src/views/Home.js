import React, { useContext } from 'react';
import { UserContext, UserProvider } from './context/User';

const User = () => { 
  const {user} = useContext(UserContext);
  return (
    <div>
      My name is {user.name}
    </div>
  ) 
}

function Home(props) {
  return (
    <div className="container">
      <UserProvider>
        <User/>
      </UserProvider>
    </div>
  );
}

export default Home;