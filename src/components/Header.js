import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

function Header() {
  return (
    <header className="menuContainer flex justify-evenly container mt-5 mb-5 pb-6 border-b ml-20">
      <div className="flex container mr-20">
        <span><img src={logo} alt="planet" width={60} /></span>
        <h1 className="font-bold text-4xl px-5 mt-1">Space Travelers&lsquo; Hub</h1>
      </div>
      <nav className="menuList mt-5 container ml-20 pl-20">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold underline mx-5' : 'text-black font-thin mx-5')}
        >
          Rockets

        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold underline mx-5' : 'text-black font-thin mx-5')}
        >
          Missions

        </NavLink>
        <NavLink
          to="/myProfile"
          className={({ isActive }) => (isActive ? 'text-blue-500 font-bold underline mx-5' : 'text-black font-thin mx-5')}
        >
          My Profile

        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
