import React,{useState} from 'react';
import './App.css';

function App(){
  const [temp,setNewTemp]=useState(0);
  
  function plus(){
    setNewTemp(temp+1);
  }

  function minus(){
    if(temp==0){return;}
    setNewTemp(temp-1);
  }

    return <>
      <h2>items={temp}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
}

export default App;