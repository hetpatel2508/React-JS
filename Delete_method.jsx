import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function fetch_data(){
    fetch("http://localhost:1234/users")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setData(result);
    })
  }
  
  function delete_data(id){
    fetch(`http://localhost:1234/users/${id}`,{
      method:'DELETE'
    }).then((response)=>{
      return response.json()
    }).then((result)=>{
      fetch_data()
      console.log(result)
    })

  }

  useEffect(() => {
    fetch_data();
     }, []);

  return (
    <table border="2">
      <thead>
        <tr>
          <td>userId</td>
          <td>name</td>
          <td>email</td>
          <td>mobile</td>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile_no}</td>
              <td><button onClick={()=>{delete_data(data.id)}}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
