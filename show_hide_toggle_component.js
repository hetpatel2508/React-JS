import React from 'react';
import './App.css';


function App() {

  const[permission , setPermission]=React.useState(false);

  function ShowData(){
    if(!permission){return}
    return <>
    <h1>hello world..!</h1>
    <h2>welcome to my webpage  :) </h2>
    </>
  }

  return <>
      <span>Want show data?</span>
      <input type="checkbox" checked={permission} onChange={()=>setPermission(!permission)}/>
      <br />
      <input type="button" onClick={()=>{setPermission(true)}} value={"click me..!"}/>
      <br />
      <ShowData />
  </>
}

export default App;