import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EZLynx Clone</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/policies">Policies</Link></li>
          <li><Link to="/home-quote">Home Quote</Link></li>
          <li><Link to="/auto-quote">Auto Quote</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
