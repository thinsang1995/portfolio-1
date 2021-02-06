import React, { forwardRef } from 'react'
import '../styles/Contact.css'
import { AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { GiPositionMarker } from 'react-icons/gi'

const contactLists = [
  {icon: GiPositionMarker, title: 'Address', content: '6834 Hollywood Blvd - Los Angeles CA'},
  {icon: AiTwotoneMail, title: 'Email', content: 'Support@website.com'},
  {icon: AiTwotonePhone, title: 'Phone', content: '+20 010 2517 8918'},
]

const Contact =  forwardRef((props, ref) => {
  return (
    <section className='contact' ref={ref}>
      <div className='contact__container'>
        <h2>Contact Us</h2>
        <div className='contact__list'>
          {contactLists.map((item, index) => (
            <div key={index} className='contact__item'>
              <span><item.icon size={30} /></span>
              <h6>{item.title}</h6>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <form className='contact__form'>
          <div className='contact__input'>
            <input type='text' placeholder='Name' required='required' />
            <input type='email' placeholder='Email' required='required' />
          </div>
          <textarea required='required'>Message</textarea>
          <button className='contact__button'>Submit</button>
        </form>
      </div>
    </section>
  )
})

export default Contact