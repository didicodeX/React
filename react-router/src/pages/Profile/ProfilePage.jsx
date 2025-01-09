import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <NavLink
            end
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="data"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Data
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
