import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import "../styles/createpost.css";

const CreatePost = () => {
  const auth = useSelector((state) => state.auth);
  console.log('Auth state in CreatePost:', auth);
  const [name, setName] = useState(''); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [location, setLocation] = useState(''); 
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
      <div className="create-image"></div>
      <h1>Create a Post!</h1>
      <p className="create-text">Please enter the following information. <br/>Your posting will appear in the "Jobs" page.</p><br />
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
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
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
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="City"
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

