import React from 'react'
import Card from './Components/Card';

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;