import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [Prefilled, setPrefilled] = useState([]);

  function fetch_data(){
    fetch("http://localhost:1234/users")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setData(result);
      setPrefilled(result[0]);
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

  function set_new_Prefill(id){
    setPrefilled(data[id-1])
  }

  function update_data(){
    fetch(`http://localhost:1234/users/${Prefilled.id}`,{
      method:'PUT',
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(Prefilled), 
    }).then((response)=>{
      return response.json()
    }).then((result)=>{
      fetch_data();
      console.log(result);
    })
  }

  useEffect(() => {
    fetch_data();
     }, []);

  return<>
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
              <td><button onClick={()=>{set_new_Prefill(data.id)}}>Update</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <br /><br />
    Id = <input  value={Prefilled.id}/><br /><br />
    Name = <input type="text" value={Prefilled.name} onChange={(e)=>{  setPrefilled({ ...Prefilled, name: e.target.value }); }}/><br /><br />
    E-mail = <input type="text" value={Prefilled.email} onChange={(e)=>{  setPrefilled({ ...Prefilled, email: e.target.value }); }}/><br /><br />
    Mobile_No = <input type="text" value={Prefilled.mobile_no} onChange={(e)=>{  setPrefilled({ ...Prefilled, mobile_no: e.target.value }); }}/><br /><br />
    <button onClick={update_data}>Update Data</button>
  </>
}

export default App;
