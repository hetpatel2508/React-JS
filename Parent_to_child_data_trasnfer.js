import React from 'react';
import './Parent_to_child_data_trasnfer.css';

function ShowData(data) {
  alert(`${data} is calling.....!`);
}

function Binding(props) {
    const Fname = props.item.fname + " " + props.item.lname;
  return (
    <>
        <span>Name : {Fname}  </span>
        <button onClick={()=>props.Myfun(Fname)}>Click Me..!</button>
        <br />
      </>
    )
}

function Parent_to_child_data_trasnfer() {

  const items = [
    { fname: "Patel", lname: "Het" },
    { fname: "Joshi", lname: "Shubh" },
    { fname: "Patel", lname: "Urvish" },
    { fname: "Rathod", lname: "Yuvraj" },
    { fname: "Patel", lname: "Dev" },
  ]

  return (
    <>
      <center>
        <h1>Data Of Student's : </h1>
        {
          items.map((data, index) => (
            <Binding key={index}  item={data} Myfun={ShowData}/>
          ))
        }
      </center>
    </>
  )

}

export default Parent_to_child_data_trasnfer;