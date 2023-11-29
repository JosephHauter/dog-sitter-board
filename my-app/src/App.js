import React, { useState, useEffect } from 'react';
import Header from "./components/Header.jsx";
import './App.css';
import ViewListings from './components/ViewListings.jsx';
import CreatePost from './components/CreatePost.jsx';

function App() {
  return (
    // <><Header />
    //   <div className="home-wrapper"> 
    //     <img src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwd2Fsa2VyfGVufDB8fDB8fHww"
    //       className="home-image"></img>
    //     <div className="home-intro">Find a dog sitter or become one yourself!</div>
    //   </div>
    // </>
    <>
      <div className="App">
        <Header> </Header>
        <CreatePost></CreatePost>
        <ViewListings></ViewListings>
    </div></>
    
  );
}

export default App;
