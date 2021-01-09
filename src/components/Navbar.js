import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {

  const [toggle, setToggle] = useState({isShow: false})

  const handleClickNavItem = () => {
    setToggle({isShow: !toggle.isShow})
  }

  return (
    <nav className='nav__wrapper'>
      <div className='nav__container'>
        <div className='nav__logo'>
          <h1><Link activeClass="active" to="home" spy={true} smooth={true}>Sang</Link></h1>
          <div className='hamburger' onClick={handleClickNavItem}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>
        <ul className={`nav__bar ${toggle.isShow ? 'toggle' :''}`}>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} onClick={handleClickNavItem}>Home</Link>
          </li>
          <li><Link  to="about" spy={true} smooth={true} onClick={handleClickNavItem}>About</Link></li>
          <li><Link  to="services" spy={true} smooth={true} onClick={handleClickNavItem}>Services</Link></li>
          <li><Link  to="works" spy={true} smooth={true} onClick={handleClickNavItem}>Works</Link></li>
          <li><Link  to="clients" spy={true} smooth={true}  onClick={handleClickNavItem}>Clients</Link></li>
          <li><Link  to="blogs" spy={true} smooth={true} onClick={handleClickNavItem}>Blogs</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}  onClick={handleClickNavItem}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar