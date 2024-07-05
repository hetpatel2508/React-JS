import React, { useState } from 'react';
import axios from 'axios';

const PutExample = () => {
  const [putData, setPutData] = useState({ id: '', title: '', body: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${putData.id}`, putData);
      console.log('Data updated:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPutData({ ...putData, [name]: value });
  };

  return (
    <div>
      <h2>PUT Request Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" onChange={handleChange} />
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="body" placeholder="Body" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PutExample;
