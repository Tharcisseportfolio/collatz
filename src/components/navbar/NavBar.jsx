import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav'>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-logo">Collatz</Link>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/visualize">Visualize</Link>
          <Link className="nav-item" to="/quiz">Quiz</Link>
          <Link className="nav-item" to="/about-me">About me</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;