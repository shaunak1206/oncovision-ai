import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-left">
          <img src="/oncoailogo.png" alt="OncoVisionAI Logo" className="header-logo" />
          <h1 className="header-title" onClick={() => navigate('/')}>OncoVisionAI</h1>
        </div>
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