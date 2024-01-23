import React from 'react';
import './ForwardRef_hook.css';

const Child=React.forwardRef((props, Parent_ref)=>{
  return(
    <>
    <div ref={Parent_ref} style={{ backgroundColor: "lightgray", width: "200px", height: "200px" }}>box</div>
    </>
  )
})

function ForwardRef_hook() {
  let temp=React.useRef(null);

  return(
    <>
      <Child ref={temp} /><br />
      <button onClick={()=>{temp.current.style.backgroundColor="Red"}}>Update Box</button>
    </>
  )
}

export default ForwardRef_hook;