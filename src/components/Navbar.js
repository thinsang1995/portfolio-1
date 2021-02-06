import React, { useState, useEffect, forwardRef } from 'react'
import '../styles/Navbar.css'

const Navbar =  forwardRef(({ pageRefs, handleScrollToPages }, ref) => {

  const [toggle, setToggle] = useState({isShow: false})
  const {homeRef, aboutRef, servicesRef, worksRef, clientsRef, blogsRef, contactRef} = pageRefs

  const handleClickNavItem = () => {
    setToggle({isShow: !toggle.isShow})
  }

  const handleScrollNavbar = (page) => {
    handleClickNavItem();
    handleScrollToPages(page)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[class]')

    const handleActiveItem = () => {
      sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        let sectionClass = current.getAttribute('class')

        if((window.pageYOffset > sectionTop )
          && (window.pageYOffset <= sectionTop + sectionHeight)) {
            document.querySelector('.nav-' + sectionClass).classList.add('active')
          } else {
            document.querySelector('.nav-' + sectionClass).classList.remove('active')
          }
      })
    }

    window.addEventListener('scroll', handleActiveItem)
  })

  return (
    <nav className='nav__wrapper' >
      <div className='nav__container'>
        <div className='nav__logo'>
          <h1 onClick={() => handleScrollToPages(homeRef)}>Sang</h1>
          <div className='hamburger' onClick={handleClickNavItem}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>
        <ul className={`nav__bar ${toggle.isShow ? 'toggle' :''}`}>
          <li><span className='nav-home' onClick={() => handleScrollNavbar(homeRef)}>Home</span></li>
          <li><span className='nav-about' onClick={() => handleScrollNavbar(aboutRef)}>About</span></li>
          <li><span className='nav-services' onClick={() => handleScrollNavbar(servicesRef)}>Services</span></li>
          <li><span className='nav-portfolio' onClick={() => handleScrollNavbar(worksRef)}>Works</span></li>
          <li><span className='nav-clients' onClick={() => handleScrollNavbar(clientsRef)}>Clients</span></li>
          <li><span className='nav-blogs' onClick={() => handleScrollNavbar(blogsRef)}>Blog</span></li>
          <li><span className='nav-contact' onClick={() => handleScrollNavbar(contactRef)}>Contact</span></li>
        </ul>
      </div>
      <div className='nav__waypoint'></div>
    </nav>
  )
})

export default Navbar;