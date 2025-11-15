import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Quote from './pages/Quote';
import Clients from './pages/Clients';
import Policies from './pages/Policies';
import HomeQuote from './pages/HomeQuote';
import AutoQuote from './pages/AutoQuote';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/home-quote" element={<HomeQuote />} />
            <Route path="/auto-quote" element={<AutoQuote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
