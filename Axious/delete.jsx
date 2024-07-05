import React, { useState } from 'react';
import axios from 'axios';

const DeleteExample = () => {
  const [deleteId, setDeleteId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`);
      console.log('Data deleted:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error deleting data:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleChange = (event) => {
    setDeleteId(event.target.value);
  };

  return (
    <div>
      <h2>DELETE Request Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID to delete" onChange={handleChange} />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteExample;
