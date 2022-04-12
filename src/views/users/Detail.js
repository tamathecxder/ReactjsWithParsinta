import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Views.css';

function Detail(props) {
  const [user, setUser] = useState([]);
  
  const { identifier } = useParams();
  console.log(identifier);

  const getUser = async () => {
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
      console.log(response.data);
      setUser(response.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getUser()
  }, [identifier]);

  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-xl-3 col-md-12 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">{user.name}</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 mt-3 d-flex justify-content-start flex-column">
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.website}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;