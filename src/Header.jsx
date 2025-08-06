import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between p-3 bg-amber-400 text-2xl'>
      <h1>Idris Yussuf</h1>
      <ul className='flex gap-5'>
        <li className='hover:text-green-200 underline '><Link to="/home">Home</Link></li>
        <li className='hover:text-green-200 underline'><Link to="/about">About</Link></li>
        <li className='hover:text-green-200 underline'><Link to="/projects">Projects</Link></li>
        <li className='hover:text-green-200 underline'><Link to="/skills">Skills</Link></li>
        <li className='hover:text-green-200 underline'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
