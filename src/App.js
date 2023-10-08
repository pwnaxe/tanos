import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Store from './components/Store';

const ScrollHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newPath = null;

      if (scrollY > 2) {
        if (location.pathname !== '/AboutUs') {
          newPath = '/AboutUs';
        }
      } else if (scrollY <= 2) {
        if (location.pathname !== '/') {
          newPath = '/';
        }
      }

      if (newPath) {
        navigate(newPath);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate, location.pathname]);

  return null;
};



const App = () => (
  <Router>
    <ScrollHandler />
    <Routes>
      <Route path="/" element={<Layout1><Home /></Layout1>} />
      <Route path="/AboutUs" element={<Layout2><AboutUs /></Layout2>} />
      <Route path="/Store" element={<Layout2><Store /></Layout2>} />
    </Routes>
  </Router>
);

export default App;