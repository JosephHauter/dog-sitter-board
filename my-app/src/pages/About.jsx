import React, { useState, useEffect } from 'react';
import Header from "./components/Header.jsx";
import './about.css';

function About() {
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
        <><Header />
            <div className="App">
                <div className="about-header">Edit About Me</div>
                <img src="https://slatercreekgoldenretrievers.com/wp-content/uploads/2023/05/golden-retriever.jpeg" className="pfp"></img>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Name" />
                    <br></br>
                    <textarea onChange={(event) => setAbout(event.target.value)} placeholder="Bio" />
                    <br></br>
                    <button className="submit" type="submit">Submit</button>
                </form>
                {users.map(user => (
                    <div key={user._id}>
                        <h2>{user.name}</h2>
                        <p>{user.about}</p>
                    </div>
                ))}
            </div></>
    );
}

export default About;
