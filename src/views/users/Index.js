import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Index(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {
          users.map((user, index) => {
            return (
              <div className="col-md-4 col-xl-4 mb-3" key={index}>
                <div className="card">
                  <div className="card-header bg-dark text-white">{user.name}</div>
                  <div className="card-body">
                    <div className='mb-3'>
                      <a className="text-decoration-none" href={`https://${user.website}`} target="_blank">{user.website}</a>
                    </div>
                    <NavLink className={'text-decoration-none badge bg-primary rounded py-2 my-3 text-white'} to={`/users/${user.id}`}>Go to detail...</NavLink>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Index;