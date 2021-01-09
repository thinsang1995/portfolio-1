import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Clients from './components/Clients';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Works />
      <Clients />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
