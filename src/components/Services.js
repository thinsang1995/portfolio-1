import React from 'react'
import '../styles/Services.css'
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

function Services({ pageRefs }) {
  return (
    <section className='services' ref={el => pageRefs.current = {...pageRefs.current, services: el}}>
      <div className='services__container'>
        <h3>Services</h3>
        <div className='services__list'>
          <div className='services__item'>
            <span><DiHtml5 size={40} /></span>
            <h6>Html5</h6>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
          <div className='services__item'>
            <span><DiCss3 size={40}/></span>
            <h6>Css3</h6>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
          <div className='services__item'>
            <span><DiJavascript1 size={40} /></span>
            <h6>JavaScript</h6>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
          <div className='services__item'>
            <span><DiReact size={40} /></span>
            <h6>React</h6>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
          <div className='services__item'>
            <span><SiRedux size={40} /></span>
            <h6>Redux</h6>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services