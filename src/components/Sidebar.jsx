// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Quote</li>
        <li>Clients</li>
        <li>Policies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
