import React from 'react';
import './Map_array.css';


function Map_array() {

  const myArray = ["Het", "Urvish", "Daksh", "Dev", "Sahil", "Deep", "Smit", "Sneh"]

  return (
    <div>
      <h1>Names : </h1>
      {
        myArray.map((item) => (
          <h3>{item}</h3>
        ))
      }
    </div>
  )
}

export default Map_array;