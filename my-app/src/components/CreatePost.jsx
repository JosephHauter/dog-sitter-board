import React, { useState, useEffect } from 'react';

const CreatePost = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:5000/users')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, about })
      })
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
    };
  
    return (
      <div className="create">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Name" />
          <br></br>
          <textarea onChange={(event) => setAbout(event.target.value)} placeholder="About me" />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CreatePost;