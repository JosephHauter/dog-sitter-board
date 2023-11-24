import React from 'react'; 

const Header = () => {
  return ( 
    <div>
        <div>
          <h1>Name</h1>
            <div>
                <input type="text" placeholder='Search'/>
                <button>Search</button>
            </div>
            <div>
                <h3>Home</h3> 
                <h3>Create Post</h3>
            </div>   
          </div> 
    </div>
  )
}

export default Header;