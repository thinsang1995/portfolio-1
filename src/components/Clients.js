import React, { useState, useEffect } from 'react'
import '../styles/Clients.css'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import CustomerAvata from '../image/customer-avata.png';
import { HiSpeakerphone }  from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import Slider from 'infinite-react-carousel'

function Clients({ pageRefs }) {

  const settingClients =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  const clientData = {
    happy: 850,
    complete: 280,
    codes : 9450,
    files: 340
  }

  const [happy, setHappy] = useState(0)
  const [complete, setComplete] = useState(0)
  const [codes, setCodes] = useState(0)
  const [files, setFiles] = useState(0)

  useEffect(() => {
    const navWaypoint = document.querySelector('.nav__waypoint')
    const counterSite = document.querySelector('.clients__numbers')

    const handleScrollEvent = () => {
      let navWaypointPositon = navWaypoint.getBoundingClientRect()
      let counterSitePosition = counterSite.getBoundingClientRect()

      if(navWaypointPositon.bottom > counterSitePosition.top 
        && navWaypointPositon.bottom < counterSitePosition.top + 100) {
        let startHappy = 0
        let startComplete = 0
        let startCodes = 0
        let startFiles = 0

        const endHappy = clientData.happy
        const endComplete = clientData.complete
        const endCodes = clientData.codes
        const endFiles = clientData.files

        if(startHappy === endHappy) return
        if(startComplete === endComplete) return
        if(startCodes === endCodes) return
        if(startFiles === endFiles) return

        let happyTimer = setInterval(() => {
          startHappy += 10
          setHappy(startHappy)
          if(startHappy === endHappy) clearInterval(happyTimer)
        }, 0)

        let completeTimer = setInterval(() => {
          startComplete += 5
          setComplete(startComplete)
          if(startComplete === endComplete) clearInterval(completeTimer)
        }, 0)

        let codesTimer = setInterval(() => {
          startCodes += 90
          setCodes(startCodes)
          if(startCodes === endCodes) clearInterval(codesTimer)
        }, 0)

        let filesTimer = setInterval(() => {
          startFiles += 5
          setFiles(startFiles)
          if(startFiles === endFiles) clearInterval(filesTimer)
        }, 0)
      }
    }
   
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  });
  
  return (
    <section className='clients' ref={el => pageRefs.current = {...pageRefs.current, clients: el}}>
      <div className='clients__container'>
        <h3>Testimonials</h3>
        <div className='clients__feedback'>
          <Slider {...settingClients}>
            <div className='clients__feedback-item'>
              <div className='clients__avata'>
                <img src={CustomerAvata} alt='customer-avata' />
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h6>Alex Smith</h6>
              <span>Envato Customer</span>
            </div>
            <div className='clients__feedback-item'>
              <div className='clients__avata'>
                <img src={CustomerAvata} alt='customer-avata' />
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h6>Alex Smith</h6>
              <span>Envato Customer</span>
            </div>
            <div className='clients__feedback-item'>
              <div className='clients__avata'>
                <img src={CustomerAvata} alt='customer-avata' />
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h6>Alex Smith</h6>
              <span>Envato Customer</span>
            </div>
          </Slider>
        </div>
        <div className='clients__numbers'>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><BsFillPeopleFill size={35} /></span>
            <h4>{happy}</h4>
            <p>Happy Customers</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><AiFillLike size={35} /></span>
            <h4>{complete}</h4>
            <p>Complete Projects</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><HiSpeakerphone size={35} /></span>
            <h4>{codes}</h4>
            <p>Lines Of Code</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><FaCloudDownloadAlt size={35} /></span>
            <h4>{files}</h4>
            <p>Files Downloaded</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients