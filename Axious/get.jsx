import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            headers:{
                'auth': 'sf68sc18ggsf.af5afaacaca68c4eefa.acac4ac98aecac6a'
            }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>GET Request Example</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetExample;
