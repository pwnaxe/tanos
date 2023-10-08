import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Layout1 from './components/Layout1';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

const ScrollHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2 && location.pathname !== '/AboutUs') {
        navigate('/AboutUs');
      } else if (scrollY <= 2 && location.pathname !== '/') {
        navigate('/');
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
      <Route path="/AboutUs" element={<Layout1><AboutUs /></Layout1>} />
    </Routes>
  </Router>
);

export default App;