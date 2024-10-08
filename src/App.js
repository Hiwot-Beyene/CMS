import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { Dashboard, Analytics, Settings } from './pages';

const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
];

const App = () => {
  const [openSidebar, setOpenSidebar] = React.useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Router>
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar items={sidebarItems} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
