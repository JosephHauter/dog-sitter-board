import React, { useState } from 'react';
import "../styles/createpost.css";

const CreatePost = () => {
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name); 
    formData.append('description', description)
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Success:', data);
      // Handle success, update state, show notifications, etc.
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div className="create">
      <h1>Create a Post!</h1>
      <p>Enter a title, description, and upload an image.</p><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="create-name"
        />
        <br /> 
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          className="create-name"
        />
        <br />       
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
        <button type="submit" className="create-button">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;

