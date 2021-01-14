import React, { useRef } from 'react';
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
  const pageRefs = useRef({})

  const handleScrollToPages = (type) => {
    pageRefs.current[type].scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <Navbar 
        pageRefs={pageRefs}
        handleScrollToPages={handleScrollToPages}
      />
      <Home pageRefs={pageRefs} />
      <About 
        pageRefs={pageRefs} 
        handleScrollToPages={handleScrollToPages}
      />
      <Services pageRefs={pageRefs} />
      <Works pageRefs={pageRefs} />
      <Clients pageRefs={pageRefs} />
      <Blogs pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
      <Footer pageRefs={pageRefs} />
    </div>
  );
}

export default App;
