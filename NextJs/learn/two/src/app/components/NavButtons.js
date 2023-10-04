import React from 'react';

const NavButtons = () => {
  return (
    <div className="bg-white p-4 flex justify-between">
      <div className="flex space-x-4">
        {/* Nav Button 1 */}
        <button className="text-#007BFF">class 12+ | NEET</button>
        {/* Nav Button 2 */}
        <button className="text-#007BFF">study material</button>
        {/* Nav Button 3 */}
        <button className="text-#007BFF">result</button>
        {/* Nav Button 4 */}
        <button className="text-#007BFF">more</button>
      </div>
      {/* Telephone symbol */}
      <span className="text-2xl">&#9742;</span>
      <div>
        {/* "Need help?" and phone number */}
        <p>Need help? talk to experts</p>
        <p className="font-bold">1800-419-427</p>
      </div>
    </div>
  );
};

export default NavButtons;
