// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-#007BFF text-white h-20 flex items-center justify-between px-8">
      <div className="flex items-center">
        <img src="/logo1.png" alt="Logo 1" className="h-12" />
        <div className="mx-4 text-xl">|</div>
        <div className="mx-4 text-xl">or</div>
        <div className="mx-4 text-xl">|</div>
        <img src="/logo2.png" alt="Logo 2" className="h-12" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <button className="text-lg">class 12+ | NEET</button>
          <button className="text-lg">study material</button>
          <button className="text-lg">result</button>
          <button className="text-lg">more</button>
        </div>
        <div className="mx-4 text-2xl">&#128222;</div>
        <div className="mx-4 text-2xl">&#9650;</div>
        <div className="mx-4 text-2xl">&#9660;</div>
        <div className="mx-4 text-2xl">&#x260E;</div>
        <div className="mx-4 text-2xl">&#x25B2;</div>
        <div className="mx-4 text-2xl">&#x25BC;</div>
        <div className="mx-4 text-2xl">Sign In</div>
      </div>
    </nav>
  );
};

export default Navbar;
