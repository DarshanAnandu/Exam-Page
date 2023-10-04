import React from 'react';

const Frame = () => {
  return (
    <div className="bg-blue-500 h-80 flex items-center justify-between px-20 text-white">
      {/* Logo 1 */}
      <div>Logo 1</div>

      {/* Divider */}
      <div className="mx-4">|</div>

      {/* "or" text */}
      <div>or</div>

      {/* Divider */}
      <div className="mx-4">|</div>

      {/* Logo 2 */}
      <div>Logo 2</div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-white">class 12+ | NEET</button>
        <button className="text-white">study material</button>
        <button className="text-white">result</button>
        <button className="text-white">more</button>
      </div>

      {/* Telephone Symbol */}
      <div className="text-2xl">&#9742;</div>

      {/* Need Help and Phone Numbers */}
      <div className="space-y-1">
        <div>Need help? talk to experts</div>
        <div>1800-419-427</div>
      </div>

      {/* Sign In */}
      <button className="text-white">Sign In</button>
    </div>
  );
};

export default Frame;
