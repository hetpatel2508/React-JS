import React from 'react';
import './Map_Object.css';

function Map_Object() {

  const students = [
    { name: "Het", email: `Het1234@gmail.com`, contact: 1234 },
    { name: "Urvish", email: `Urvish1234@gmail.com`, contact: 5678 },
    { name: "Daksh", email: `Daksh1234@gmail.com`, contact: 9101 },
    { name: "Dev", email: `Dev1234@gmail.com`, contact: 1213 },
    { name: "Sahil", email: `Sahil1234@gmail.com`, contact: 1415 },
    { name: "Deep", email: `Deep1234@gmail.com`, contact: 1617 },
    { name: "Smit", email: `Smit1234@gmail.com`, contact: 1617 },
    { name: "Sneh", email: `Sneh1234@gmail.com`, contact: 1617 },
  ]

  return (
    <div>
      <center>
        <h1>Student's Details</h1>
        <br />
        <table border={1} width={500}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email_id</td>
              <td>Contact</td>
            </tr>
          </thead>
          <tbody>
            {
              students.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  )

}

export default Map_Object;