import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
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
    .then(data => {
      console.log(data);
      setUsers(prevUsers => [...prevUsers, data]);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Name" />
        <br></br>
        <textarea onChange={(event) => setAbout(event.target.value)} placeholder="About me" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
      {users.map(user => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.about}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
