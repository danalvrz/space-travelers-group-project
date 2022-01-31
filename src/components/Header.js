import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="menuContainer">
      <h1 className="font-bold">Space Traveling</h1>
      <nav className="menuList">
        <NavLink
          to="/rockets"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-black font-thin')}
        >
          Rockets

        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-black font-thin')}
        >
          Missions

        </NavLink>
        <NavLink
          to="/myProfile"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-black font-thin')}
        >
          MyProfile

        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
