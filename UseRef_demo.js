import React from 'react';
import './UseRef_demo.css';


function UseRef_demo() {

  const count = React.useRef(0);
  let colour_change = React.useRef(null);

  return (
    <>
      <h1> Counter : {count.current}</h1>
      <button onClick={() => { count.current = count.current + 1; console.log("count Re-rendered - " + count.current); }}>+</button>
      <br /><br />
      <div ref={colour_change} style={{ backgroundColor: "lightgray", width: "200px", height: "200px" }}>box</div>
      <button onClick={() => { colour_change.current.style.backgroundColor = "gray"; console.log("Re-render..!") }}>Update Box</button>
    </>
  )
}

export default UseRef_demo;