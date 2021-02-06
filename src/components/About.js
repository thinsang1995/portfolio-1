import React, { forwardRef } from 'react'
import '../styles/About.css'
import AvataImage from '../image/avata-picture.png';

const aboutSkills = [
  {skill: 'HTML/CSS', process: '70%'},
  {skill: 'JavaScript', process: '60%'},
  {skill: 'React', process: '50%'},
  {skill: 'Redux', process: '30%'},
]

const About = forwardRef(({ pageRefs, handleScrollToPages }, ref) => {
  const { contactRef } = pageRefs
  return (
    <section className='about' ref={ref}>
      <div className='about__container'>
        <div className='about__avata'>
          <img src={AvataImage} alt='avata' />
        </div>
        <div className='about__detail'>
          <div className='about__info'>
            <h2>About Me.</h2>
            <h6>Front End Web Developer</h6>
            <p>I am <b>Sang Trenh</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
          </div>
          <div className='about__skill'>
            {aboutSkills.map((item, index) => (
              <div key={index} className='about__skill-item'>
                <h6>{item.skill}</h6>
                <span className='about__skill-process' style={{width: item.process}}></span>
              </div>
            ))}
          </div>
          <button className='about__contact-btn' onClick={() => handleScrollToPages(contactRef)}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
})

export default About