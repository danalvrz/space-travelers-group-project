import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="menuContainer">
      <h1>Space Traveling</h1>
      <nav className="menuList">
        <Link to="/">MyProfile</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/rockets">Rockets</Link>
      </nav>
    </header>
  );
}

export default Header;
