import React from 'react';
import NavItem from './NavItems.js';

const Navbar = () => {
    return (
        <nav className="bg-#007BFF p-4 flex justify-between items-center">
            <div className="logo flex items-center">
                <img src="/Artboard 1 1.svg" alt="logo 1" />
                <div className="by flex items-center">
                    <span className="i-by"> |</span>
                    <span className="i-by">by</span>
                    <span className="i-by"> |</span>
                </div>
                <img src="/Group.svg" alt="logo 1" />
            </div>
            <div className="m-nav">
                <ul className="flex space-x-4">
                    <NavItem label="class 12+ | NEET" hasDropdown />
                    <NavItem label="study material" hasDropdown />
                    <NavItem label="result" />
                    <NavItem label="more" hasDropdown />
                </ul>
            </div>
            <div className="telephone flex items-center">
                <img className="icon" src="/Group 1000005614.svg" alt="Telephone" />
                <div className="ml-2 text-white">
                    <span className="block text-sm">need help? talk to experts</span>
                    <span className="block text-lg font-semibold">1800-419-427</span>
                </div>
            </div>
            <div className="sign-in bg-white text-#007BFF px-4 py-2 rounded-full cursor-pointer">
                Sign In
            </div>
        </nav>
    );
};

export default Navbar;
