import React from 'react'
import '../styles/Contact.css'
import { AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { GiPositionMarker } from 'react-icons/gi'

function Contact({ pageRefs }) {
  return (
    <section className='contact' ref={el => pageRefs.current = {...pageRefs.current, contact: el}}>
      <div className='contact__container'>
        <h3>Contact Us</h3>
        <div className='contact__list'>
          <div className='contact__item'>
            <span><GiPositionMarker size={30} /></span>
            <h6>Address</h6>
            <p>6834 Hollywood Blvd - Los Angeles CA</p>
          </div>
          <div className='contact__item'>
            <span><AiTwotoneMail size={30} /></span>
            <h6>Email</h6>
            <p>Support@website.com</p>
          </div>
          <div className='contact__item'>
            <span><AiTwotonePhone size={30} /></span>
            <h6>Phone</h6>
            <p>+20 010 2517 8918</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact