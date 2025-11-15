import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Policies from './pages/Policies';
import HomeQuote from './pages/HomeQuote';
import AutoQuote from './pages/AutoQuote';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/home-quote" element={<HomeQuote />} />
            <Route path="/auto-quote" element={<AutoQuote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
