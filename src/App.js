import React from 'react'
import Card from './Components/Card';

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card content={{
              imageUrl: "https://placekitten.com/g/300/200",
              title: "The first post",
              published: "12 April 2022",
            }}  
            />
          </div>
          <div className="col-md-4">
            <Card content={{
              imageUrl: "https://placekitten.com/300/200",
              title: "The second post",
              published: "11 April 2022",
            }} 
            />
          </div>
          <div className="col-md-4">
            <Card content={{
              imageUrl: "https://placekitten.com/g/300/200",
              title: "The third post",
              published: "08 April 2022",   
            }} 
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;