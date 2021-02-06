import React, { forwardRef } from 'react'
import '../styles/Services.css'
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

const servicesList = [
  {icon: DiHtml5, title: 'Html5'},
  {icon: DiCss3, title: 'Css3'},
  {icon: DiCss3, title: 'SASS'},
  {icon: DiJavascript1, title: 'JavaScript'},
  {icon: DiReact, title: 'React'},
  {icon: SiRedux, title: 'Redux'},
]

const Services =  forwardRef((props, ref) => {
  return (
    <section className='services' ref={ref}>
      <div className='services__container'>
        <h2>Services</h2>
        <div className='services__list'>
          {servicesList.map((item, index) => (
            <div key={index} className='services__item'>
              <span><item.icon size={40} /></span>
              <h6>{item.title}</h6>
              <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Services