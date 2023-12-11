import React from 'react';
import Navbar from "./components/Navbar.jsx";  
// import Login from './components/Login.jsx';
// import Register from "./components/Register.jsx"
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from "./components/Home.jsx";
import ViewListings from "./components/ViewListings.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import CreatePost from './components/CreatePost.jsx';
import withAuth from './components/withAuth'; // Import the HOC

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewlistings" element={withAuth(<ViewListings />)} /> {/* Protect the route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/createpost" element={withAuth(<CreatePost />)} /> {/* Protect the route */}
      </Routes>
    </Router>
  );
}

export default App;