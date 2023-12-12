// App.jsx
import React from 'react';
import Navbar from "./components/Navbar.jsx";  
import Home from "./components/Home.jsx";
import ViewListings from "./components/ViewListings.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import CreatePost from './components/CreatePost.jsx';
import Dashboard from './components/Dashboard.jsx'; // Import the Dashboard component
import withAuth from './components/withAuth'; // Import the HOC
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewlistings" element={withAuth(<ViewListings />)} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/createpost" element={withAuth(<CreatePost />)} />
        <Route path="/dashboard" element={withAuth(<Dashboard />)} /> {/* Add the Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;
