import React, { useState, useEffect } from 'react';
import './App.css';  
import Header from './components/Header' 
import Footer from './components/Footer'  
import CreatePost from './components/CreatePost.jsx';
import ViewListings from './components/ViewListings.jsx';

function App() {
  return (
    <div className="App"> 
      <Header />
      <CreatePost />
      <ViewListings /> 
      <Footer />
    </div>
  );
}

export default App;
