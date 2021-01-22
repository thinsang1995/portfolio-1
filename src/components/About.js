import React from 'react'
import '../styles/About.css'
import AvataImage from '../image/avata-picture.png';

function About({ pageRefs, handleScrollToPages }) {
  return (
    <section className='about' ref={el => pageRefs.current = {...pageRefs.current, about: el}}>
      <div className='about__container'>
        <div className='about__avata'>
          <img src={AvataImage} alt='avata' />
        </div>
        <div className='about__detail'>
          <div className='about__info'>
            <h3>About Me.</h3>
            <h6>Front End Web Developer</h6>
            <p>I am <b>Thin Sang</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
          </div>
          <div className='about__skill'>
            <div className='about__skill-item'>
              <h6>HTML/CSS</h6>
              <span className='about__skill-process' style={{width: '70%'}}></span>
            </div>
            <div className='about__skill-item'>
              <h6>JavaScript</h6>
              <span className='about__skill-process' style={{width: '60%'}}></span>
            </div>
            <div className='about__skill-item'>
              <h6>React</h6>
              <span className='about__skill-process' style={{width: '50%'}}></span>
            </div>
            <div className='about__skill-item'>
              <h6>Redux</h6>
              <span className='about__skill-process' style={{width: '30%'}}></span>
            </div>
          </div>
          <button 
            type='button'
            className='about__contact-btn'
            onClick={() => handleScrollToPages('contact')}>
          Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
export default About