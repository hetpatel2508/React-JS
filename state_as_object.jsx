import React, { useEffect, useRef, useState } from "react";

function App() {
  const [data, setData] = useState({name:'het',age:21});

  return<>
  <center>
    <h1>Name = {data.name}</h1>
    <h1>Age = {data.age}</h1>
    <input type="text" value={data.name} onChange={ (e)=>{ setData({ ...data, name:e.target.value }) } }/> <br /><br />
    <input type="text" value={data.age} onChange={ (e)=>{ setData({ ...data, age:e.target.value }) } }/>
  </center>
  </>
}

export default App;
