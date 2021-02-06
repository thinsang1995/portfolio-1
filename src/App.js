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
  const homeRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const worksRef = useRef()
  const clientsRef = useRef()
  const blogsRef = useRef()
  const contactRef = useRef()
  
  const handleScrollToPages = (type) => {
    type.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <Navbar 
        pageRefs={{homeRef, aboutRef, servicesRef, worksRef, clientsRef, blogsRef, contactRef}}
        handleScrollToPages={(e) => handleScrollToPages(e)}
      />
      <Home ref={homeRef} />
      <About 
        pageRefs = {{contactRef}}
        ref={aboutRef} 
        handleScrollToPages={(e) => handleScrollToPages(e)}
      />
      <Services ref={servicesRef} />
      <Works ref={worksRef} />
      <Clients ref={clientsRef} />
      <Blogs ref={blogsRef} />
      <Contact ref={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;
