
import React from 'react';
import Navbar from './components/Navbar6.js';
// import Carousel from './components/Carousel5.js';
import UAParser from 'ua-parser-js';




const Home = ({ deviceType }) => {
  return (
    <div className="bg-primary h-desktop-screen w-full">
      {/* Page content */}
      <Navbar />
      {/* <Carousel deviceType={deviceType} /> */}

      {/* <Carousel deviceType="desktop" /> */}
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';


  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};

export default Home;


// pages/index.js
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <div className="navbar">
//         {/* Navigation bar content */}
//         <p>Logo</p>
//         <ul className="flex space-x-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//       {/* Main content of the page */}
//       <div className="w-screen h-screen">
//         {/* Your content here */}
//       </div>
//     </div>
//   );
// };

// export default Home;
