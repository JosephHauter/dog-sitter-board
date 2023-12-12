// App.jsx
import React from 'react';
import Navbar from "./components/Navbar.jsx";  
import Home from "./components/Home.jsx";
import ViewListings from "./components/ViewListings.jsx";
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import CreatePost from './components/CreatePost.jsx';
import Dashboard from './components/Dashboard.jsx';
import withAuth from './components/withAuth';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';

// App.jsx
// ... (other imports and code)

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewlistings" element={withAuth(ViewListings)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/createpost" element={withAuth(CreatePost)} />
        <Route path="/dashboard" element={withAuth(Dashboard)} />
      </Routes>
    </Router>
  );
}

export default App;

