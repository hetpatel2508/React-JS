import React from 'react';
import './App.css';


function App() {

  const [User , setUser]=React.useState("");
  const [Password , setPassword]=React.useState("");
  const [Tac , setTac]=React.useState(false);
  
  const [UserPermission , setUserPermission]=React.useState(true);
  const [PasswordPermission , setPasswordPermission]=React.useState(true);
  const [TacPermission , setTacPermission]=React.useState(true);
  const [Permission, setPermission]=React.useState(false);


  function Validation(){

    let u=(User.length>=5 && User.length<=10);
    let p=(Password.length>=5 && Password.length<=10);
    let t=(Tac);

    setUserPermission(u);
    setPasswordPermission(p);
    setTacPermission(t);

    if( u && p && t ){
      setPermission(true);
    }
    else{
      setPermission(false);
    }
  }

  return <>
      <span>UserID : </span>
      <input type="text" onChange={(e)=>{setUser(e.target.value); setUserPermission(true)}}/>
      {UserPermission?"":<><span className='alert'>(Enter Valid UserID)</span></>}
      <br /><br />
      
      <span>Password : </span>
      <input type="text" onChange={(e)=>{setPassword(e.target.value); setPasswordPermission(true)}}/>
      {PasswordPermission?"":<><span className='alert'>(Enter Valid Password)</span></>}
      <br /><br />

      <input type="checkbox" onChange={()=>{setTac(!Tac); setTacPermission(true)}}/>
      <span>Accept Terms & Conditions</span>
      {TacPermission?"":<><span className='alert'>(Please Accept Our Terms)</span></>}
      <br /><br />

      <button onClick={ Validation }>Submit..!</button>
      <br /><br /><br />
      {Permission?<><h1>UserID = {User}</h1><h1>Password = {Password}</h1></>:""}
  </>
}

export default App;