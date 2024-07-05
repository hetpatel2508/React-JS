import React, { useState } from 'react';
import axios from 'axios';

const PatchExample = () => {
  const [patchData, setPatchData] = useState({ id: '', title: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${patchData.id}`, patchData);
      console.log('Data patched:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error patching data:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatchData({ ...patchData, [name]: value });
  };

  return (
    <div>
      <h2>PATCH Request Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" onChange={handleChange} />
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatchExample;
