import React from 'react'
import '../styles/Clients.css'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import CustomerAvata from '../image/customer-avata.png';
import { HiSpeakerphone }  from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import Slider from 'infinite-react-carousel'

function Clients() {

  const settingClients =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };
  
  return (
    <section className='clients' id='clients'>
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
            <h3>850</h3>
            <p>Happy Customers</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><AiFillLike size={35} /></span>
            <h3>230</h3>
            <p>Complete Projects</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><HiSpeakerphone size={35} /></span>
            <h3>9450</h3>
            <p>Lines Of Code</p>
          </div>
          <div className='clients__numbers-item'>
            <span className='numbers__icon'><FaCloudDownloadAlt size={35} /></span>
            <h3>780</h3>
            <p>Files Downloaded</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients