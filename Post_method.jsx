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
      body: JSON.stringify(data),     //it will convert const data = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }]
                                      //to =>    Output: [{"name":"John","age":30},{"name":"Alice","age":25}] like in json form
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();   //will get data converted above with stringify like [{"name":"John","age":30},{"name":"Alice","age":25}] like in json form
      })
      .then((result) => {
        console.log("successful");
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
