/**
 * CreatePost.jsx
 * Users can create a post that will appear in the jobs page. 
 */
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
  const [error, setError] = useState(''); // State to store the error message

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!name || !title || !description || !location || !image) {
      setError('Please fill in all the fields.');
      return; // Stop the function if any field is empty
    }

    const formData = new FormData();
    formData.append('name', name);  
    formData.append('title', title); 
    formData.append('description', description); 
    formData.append('location', location); 
    formData.append('image', image); 

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      // Handle success, update state, show notifications, etc.
      console.log('Success:', data);
      setError(''); // Clear the error message on successful submission
      
    } catch (error) {
      // Handle errors, show error messages, etc.
      console.error('Error:', error);  
      setError('An error occurred while creating the post. Please try again.');
    }
  };

  return (
    <div className="create">
      <div className="create-image"></div>
      <h1>Create a Post!</h1>
      <p className="create-text">Please enter the following information. 
        <br/>Your posting will appear in the "Jobs" page.
      </p><br />
      {error && <p className="error">{error}</p>} {/* Display the error message if it exists */}
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
        <label htmlFor="upload-image" className="upload-image-label">Image: </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="upload-image"
          title=" "
        />
        <br />
        <button type="submit" className="create-button">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
