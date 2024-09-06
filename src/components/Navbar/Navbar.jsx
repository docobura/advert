import React from 'react';
import './Navbar.css';

export default function Navbar() {  // Capitalize the component name
  return (
    <nav className='navbar'>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Events</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
