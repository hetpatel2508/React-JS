import React from 'react';
import './App.css';


function App() {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const [permission, setPermission] = React.useState(false);
  const [pass_permission, setpass_Permission] = React.useState(false);

  function updateEmail(val) {
    setEmail(val.target.value)
  }

  function updatePassword(val) {
    setPassword(val.target.value)
  }

  function showPassword() {
    setpass_Permission(!pass_permission);
  }

  function handleCopyPaste (event){
    event.preventDefault();
    alert("Copying and pasting is not allowed!");
  };

  function ShowDate(){
    if(!permission){return}
    return<>
        <h1>Email : {email}</h1>
        <h1>Password : {password}</h1>
    </>
  }

  return (<>
    <span>Email : </span>
    
    <input type="text" onChange={updateEmail} /> 
    <br />
    

    <span>Password : </span>
    <input type={pass_permission ? "text" : "password"} 
          onChange={updatePassword} 
          onCopy={handleCopyPaste} 
          onPaste={handleCopyPaste}
    /> 
    <br />

    <span>Show Password</span>
    <input type="checkbox" 
          checked={pass_permission}
          onChange={showPassword} 
    /> 
    <br />

    <button onClick={() => setPermission(true)}>Confirm..!</button>

    <ShowDate />
  </>);
}

export default App;