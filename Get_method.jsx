import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/assets/temp.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);

  //or

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try
  //     {
  //     const response = await fetch("src/assets/temp.json");

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const result = await response.json();
  //     setData(result);
  //   }
  //   catch(e){
  //     console.log("Error = "+e);
  //   }
  //   };

  //   fetchData();
  // }, []);

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
              <td>{data.userId}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
