import React from 'react';
import { useRecoilState } from 'recoil';
import AuthUser from '../Components/AuthUser';
import { theme } from '../store';
import { UserProvider } from './context/User';

function Home(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4">
          <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
      You're selecting the {currentTheme} theme.
      <UserProvider>
        <div className="d-flex">
          <span>My name is &nbsp;</span><AuthUser />
        </div>
      </UserProvider>
    </div>
  );
}

export default Home;