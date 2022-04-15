import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUser= async () => {
    try {
      setLoading(false);
      let response = await axios.get('http://jsonplaceholder.typicode.com/users/3');
      setUser(response.data);
      console.log(response.data);
    } catch(e) {
      setLoading(false);
      console.log(e.message);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
