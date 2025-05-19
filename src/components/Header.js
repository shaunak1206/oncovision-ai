import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="header-title">OncoVisionAI</h1>
        <nav className="header-nav">
          <button className="header-btn" onClick={() => navigate('/')}>Home</button>
          <button className="header-btn" onClick={() => navigate('/models')}>Models</button>
          <button className="header-btn" onClick={() => navigate('/about')}>About</button>
          <button className="header-btn" onClick={() => navigate('/forum')}>Forum</button>
        </nav>
      </div>
    </header>
  );
}

export default Header; 