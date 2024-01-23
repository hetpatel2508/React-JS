import React from 'react';
import './useMemo_pure_functional_Component.css';


function useMemo_pure_functional_Component() {
  const [counter, setConter] = React.useState(0);
  const [item, setitem] = React.useState(0);

  React.useMemo(()=>{
    console.log("Component is Re-rendered")
  },[counter])

  //only after updation of counter our component will re-render

  return(
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>setConter(counter+1)}>+</button>

      <br />

      <h1>Item : {item}</h1>
      <button onClick={()=>setitem(item+1)}>+</button>
    </>
  )

}


export default useMemo_pure_functional_Component;