import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="menuContainer">
      <h1>Space Traveling</h1>
      <nav className="menuList">
        <Link to="/">MyProfile</Link>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/rockets" activeClassName="selected">Rockets</NavLink>
      </nav>
    </header>
  );
}

export default Header;
