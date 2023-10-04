// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="navbar">
        {/* Navigation bar content */}
        <p>Logo</p>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Main content of the page */}
      <div className="w-screen h-screen">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Home;
