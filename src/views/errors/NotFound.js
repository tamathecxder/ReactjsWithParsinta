import React from 'react';

function NotFound(props) {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="display-4 text-muted">
          <span className='d-block text-center fw-bold'>404</span>
          Page Not Found
        </div>
      </div>
    </div>
  );
}

export default NotFound;