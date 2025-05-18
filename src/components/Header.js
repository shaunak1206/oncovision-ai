import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="header-title">OncoVisionAI</h1>
        <nav className="header-nav">
          <button className="header-btn">Home</button>
          <button className="header-btn">Models</button>
          <button className="header-btn">About</button>
          <button className="header-btn">Forum</button>
        </nav>
      </div>
      <div className="header-line"></div>
    </header>
  );
}

export default Header; 