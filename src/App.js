import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Store from './components/Store';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Store />
      <Gallery />
      <Contact />
    </>
  );
};

export default App;
