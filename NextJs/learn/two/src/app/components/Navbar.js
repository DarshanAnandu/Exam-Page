import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-#007BFF text-white h-20 flex items-center">
      <div className="w-1/4">
        {/* Logo 1 */}
        <img src="/logo1.png" alt="Logo 1" />
      </div>
      <div className="w-1/4 text-center">
        {/* Separator */}
        <span className="text-2xl">|</span>
      </div>
      <div className="w-1/4 text-center">
        {/* "or" text */}
        <span className="text-2xl">or</span>
      </div>
      <div className="w-1/4 flex justify-end items-center pr-4">
        {/* Separator */}
        <span className="text-2xl">|</span>
        {/* Logo 2 */}
        <img src="/logo2.png" alt="Logo 2" />
      </div>
    </nav>
  );
};

export default Navbar;
