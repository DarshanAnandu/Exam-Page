import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-2 px-4 flex items-center justify-between">
      <div className="logo flex items-center">
        <img src="/Artboard 1 1.svg" alt="logo 1" className="h-8" />
        <div className="by flex flex-col items-center text-white">
          <span className="i-by">|</span>
          <span className="i-by">by</span>
          <span className="i-by">|</span>
        </div>
        <img src="/Group.svg" alt="logo 1" className="h-8" />
      </div>
      <div className="m-nav">
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/">class 12+ | NEET <img className="expand-more-icon" alt="" src="/expand_more.svg" /></a>
          </li>
          <li>
            <a href="/">study material <img className="expand-more-icon" alt="" src="/expand_more.svg" /></a>
          </li>
          <li><a href="/">result</a></li>
          <li>
            <a href="/">more <img className="expand-more-icon" alt="" src="/expand_more.svg" /></a>
          </li>
        </ul>
      </div>
      <div className="telephone flex items-center text-white">
        <img className="icon h-6" alt="Telephone" src="/Group 1000005614.svg" />
        <div className="by ml-2">
          <span>need help? talk to experts</span>
          <span>1800-419-427</span>
        </div>
      </div>
      <div className="sign-in text-blue-500 bg-white py-2 px-4 rounded-full cursor-pointer">sign in</div>
    </nav>
  );
};

export default Navbar;
