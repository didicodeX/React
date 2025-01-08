import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header d-flex flex-row align-items-center">
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className="headerList">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
