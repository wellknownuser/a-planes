import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logoAircraft from '../assets/logo-aircraft.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Remove focus and any hover states
    const target = event.currentTarget;
    
    // Immediately blur to remove focus
    target.blur();
    
    // Force removal of any pseudo-class states
    target.style.background = 'transparent';
    
    // Reset after a short delay to allow CSS transitions
    setTimeout(() => {
      target.style.background = '';
    }, 150);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logoAircraft} alt="Antonov Aircraft" className="nav-logo-image" />
          <span>Літаки "Антонов"</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            onClick={handleLinkClick}
          >
            Головна
          </Link>
          <Link 
            to="/an-225" 
            className={`nav-link ${isActive('/an-225') ? 'nav-link-active' : ''}`}
            onClick={handleLinkClick}
          >
            АН-225 "Мрія"
          </Link>
          <Link 
            to="/an-124" 
            className={`nav-link ${isActive('/an-124') ? 'nav-link-active' : ''}`}
            onClick={handleLinkClick}
          >
            АН-124 "Руслан"
          </Link>
          <Link 
            to="/an-178" 
            className={`nav-link ${isActive('/an-178') ? 'nav-link-active' : ''}`}
            onClick={handleLinkClick}
          >
            АН-178
          </Link>
          <Link 
            to="/an-158" 
            className={`nav-link ${isActive('/an-158') ? 'nav-link-active' : ''}`}
            onClick={handleLinkClick}
          >
            АН-158
          </Link>
        </div>

        <div className="nav-hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-1' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-2' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-3' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;