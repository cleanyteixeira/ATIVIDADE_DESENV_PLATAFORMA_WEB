import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <h3>{user.name}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/users">Usuários</NavLink>
          </li>
          <li>
            <NavLink to="/patients">Pacientes</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">Médicos</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Consultas</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
