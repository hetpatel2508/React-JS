import React, { useState } from 'react';
import axios from 'axios';

const PostExample = () => {
  const [postData, setPostData] = useState({ title: '', body: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
      console.log('Data posted:', response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <div>
      <h2>POST Request Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="body" placeholder="Body" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostExample;
