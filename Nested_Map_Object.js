import React from 'react';
import './Nested_Map_Object.css';

function Nested_Map_Object() {

  const students = [
    {
      name: "Het", email: `Het1234@gmail.com`, contact: 1234,
      address: [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
      { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
      { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Urvish", email: `Urvish1234@gmail.com`, contact: 5678,
      address: [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
      { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
      { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Daksh", email: `Daksh1234@gmail.com`, contact: 9101,
      address: [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
      { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
      { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Dev", email: `Dev1234@gmail.com`, contact: 1213,
      address:
        [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
        { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
        { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Sahil", email: `Sahil1234@gmail.com`, contact: 1415,
      address: [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
      { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
      { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
      { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Deep", email: `Deep1234@gmail.com`, contact: 1617,
      address:
        [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
        { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
        { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Smit", email: `Smit1234@gmail.com`, contact: 1617,
      address:
        [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
        { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
        { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
    {
      name: "Sneh", email: `Sneh1234@gmail.com`, contact: 1617,
      address:
        [{ pincode: 382475, city: "Ahmedabad", state_name: "Gujarat", country: "India" },
        { pincode: 482475, city: "Surat", state_name: "Gujarat", country: "India" },
        { pincode: 382001, city: "Rajkot", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Ghandhinagar", state_name: "Gujarat", country: "India" },
        { pincode: 382475, city: "Morbi", state_name: "Gujarat", country: "India" }]
    },
  ]

  return (
    <div>
      <table border={1} width={800}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {
            students.map((info, index) => (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.contact}</td>
                <td>
                  <table border={1}>
                    <tbody>
                      {
                        info.address.map((data, i) => (
                          <tr key={i}>
                            <td>{data.city}</td>
                            <td>{data.pincode}</td>
                            <td>{data.state_name}</td>
                            <td>{data.country}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default Nested_Map_Object;