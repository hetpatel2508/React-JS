import React, { useEffect, useRef, useState } from "react";


function Show_data(props){
  const prev_value = useRef();
  useEffect(()=>{
    prev_value.current=props.data
  })
  return(
    <>
      <h1>Previos value = {prev_value.current}</h1>
      <h1>Current value = {props.data}</h1>
    </>
  )
}


function App() {
  const [data, setData] = useState(0);

  return<>
  <center>
    <Show_data data={data}/>
    <button onClick={()=>{setData(data+1)}}>Click Me..!</button>
  </center>
  </>
}

export default App;
