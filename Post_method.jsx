import React, { useEffect, useState } from "react";

function App() {
  const [Name, setName] = useState("");
  const [mobile_no, setMobile_no] = useState("");

  function submitData() {
    let data = { Name, mobile_no }; //object is created as {Name: 'het', mobile_no: '123'}

    fetch("http://localhost:1234/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response)=>{
      return response.json();
    }).then((result)=>{
      console.log("successful")
      console.log(result)
    })
  }

  return (
    <center>
      <h1>form</h1>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={mobile_no}
        onChange={(e) => setMobile_no(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={submitData}>Submit</button>
    </center>
  );
}

export default App;
