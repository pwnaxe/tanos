import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Store from './components/Store';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Store />
    </>
  );
};

export default App;
