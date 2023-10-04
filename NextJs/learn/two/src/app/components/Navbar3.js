import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-#007BFF h-20 flex items-center justify-between px-6">
      {/* Logo 1 */}
      <div className="text-white">Logo 1</div>

      {/* Divider */}
      <div className="text-white mx-4">|</div>

      {/* "or" text */}
      <div className="text-white">or</div>

      {/* Divider */}
      <div className="text-white mx-4">|</div>

      {/* Logo 2 */}
      <div className="text-white">Logo 2</div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-white">class 12+ | NEET</button>
        <button className="text-white">study material</button>
        <button className="text-white">result</button>
        <button className="text-white">more</button>
      </div>

      {/* Telephone Symbol */}
      <div className="text-white text-xl">&#9742;</div>

      {/* Need Help and Phone Numbers */}
      <div className="text-white space-y-1">
        <div>Need help? talk to experts</div>
        <div>1800-419-427</div>
      </div>

      {/* Sign In */}
      <button className="text-white">Sign In</button>
    </nav>
  );
};

export default Navbar;
