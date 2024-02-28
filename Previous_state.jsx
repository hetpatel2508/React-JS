import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);

  function handleEvent(){
      setData((previous)=>{
          console.warn(previous)
          return data+1
      })
  }
  
  return<>
  <center>
    <h1>{data}</h1>
    <button onClick={handleEvent}>Click Me..!</button>
  </center>
  </>
}

export default App;
