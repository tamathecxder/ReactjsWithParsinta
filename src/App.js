import React from 'react';
import Navbar from './Components/Navbar';
import Router from './router';

function App(props) {
  return (
    <div>
      <Navbar />
      <div className="py-3">
        <Router />
      </div>
    </div>
  );
}

export default App;