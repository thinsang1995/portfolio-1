import React, { useState, useEffect, forwardRef } from 'react'
import '../styles/Clients.css'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import CustomerAvata from '../image/customer-avata.png';
import { HiSpeakerphone }  from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import Slider from 'infinite-react-carousel'

const customers = ['Alex Smith', 'David Joe', 'Alan Walker']



const Clients = forwardRef((props, ref) => {
  const [happy, setHappy] = useState(0)
  const [complete, setComplete] = useState(0)
  const [codes, setCodes] = useState(0)
  const [files, setFiles] = useState(0)

  const clientNumbers = [
    {icon: BsFillPeopleFill, amout: happy, text: 'Happy Customers'},
    {icon: AiFillLike, amout: complete, text: 'Complete Projects'},
    {icon: HiSpeakerphone, amout: codes, text: 'Lines Of Code'},
    {icon: FaCloudDownloadAlt, amout: files, text: 'Files Downloaded'},
  ]

  const settingClients =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  useEffect(() => {
    const navWaypoint = document.querySelector('.nav__waypoint')
    const counterSite = document.querySelector('.clients__numbers')

    const handleScrollEvent = () => {
      let navWaypointPositon = navWaypoint.getBoundingClientRect()
      let counterSitePosition = counterSite.getBoundingClientRect()

      if(navWaypointPositon.bottom > counterSitePosition.top 
        && navWaypointPositon.bottom < counterSitePosition.top) {
        let startHappy = 0
        let startComplete = 0
        let startCodes = 0
        let startFiles = 0

        const endHappy = 850
        const endComplete = 280
        const endCodes = 9450
        const endFiles = 340

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
    <section className='clients' ref={ref}>
      <div className='clients__container'>
        <div className='clients__wrapper'>
          <h2>Testimonials</h2>
          <div className='clients__feedback'>
            <Slider {...settingClients}>
              {customers.map((customer, index) => (
                <div key={index} className='clients__feedback-item'>
                  <div className='clients__avata'>
                    <img src={CustomerAvata} alt='customer-avata' />
                  </div>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <h6>{customer}</h6>
                  <span>Envato Customer</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='clients__numbers'>
          {clientNumbers.map((item, index) => (
            <div key={index} className='clients__numbers-item'>
              <span className='numbers__icon'><item.icon size={35} /></span>
              <h4>{item.amout}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Clients