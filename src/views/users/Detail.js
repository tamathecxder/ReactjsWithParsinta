import React from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const id = useParams();
  console.log(id);
  return (
    <div>
      Users Detail
    </div>
  );
}

export default Detail;