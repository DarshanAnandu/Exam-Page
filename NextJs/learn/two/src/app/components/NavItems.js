import React from 'react';

const NavItem = ({ label, hasDropdown }) => {
    return (
        <li>
            <a href="/" className="text-white flex items-center">
                {label}
                {hasDropdown && <img className="expand-more-icon" src="/expand_more.svg" alt="" />}
            </a>
        </li>
    );
};

export default NavItem;
