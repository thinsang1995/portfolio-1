import React, { useState } from 'react'
import '../styles/Navbar.css'

function Navbar({ pageRefs, handleScrollToPages }) {

  const [toggle, setToggle] = useState({isShow: false})

  const handleClickNavItem = () => {
    setToggle({isShow: !toggle.isShow})
  }

  const handleScrollNavbar = (page) => {
    handleClickNavItem();
    handleScrollToPages(page)
  }

  return (
    <nav className='nav__wrapper' ref={el => pageRefs.current = {...pageRefs.current, home: el}}>
      <div className='nav__container'>
        <div className='nav__logo'>
          <h1 onClick={() => handleScrollNavbar('home')}>Sang</h1>
          <div className='hamburger' onClick={handleClickNavItem}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>
        <ul className={`nav__bar ${toggle.isShow ? 'toggle' :''}`}>
          <li><span onClick={() => handleScrollNavbar('home')}>Home</span></li>
          <li><span onClick={() => handleScrollNavbar('about')}>About</span></li>
          <li><span onClick={() => handleScrollNavbar('services')}>Services</span></li>
          <li><span onClick={() => handleScrollNavbar('portfolio')}>Works</span></li>
          <li><span onClick={() => handleScrollNavbar('clients')}>Clients</span></li>
          <li><span onClick={() => handleScrollNavbar('blogs')}>Blogs</span></li>
          <li><span onClick={() => handleScrollNavbar('contact')}>Contact</span></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar