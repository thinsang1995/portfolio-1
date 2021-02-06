import React, { forwardRef } from 'react'
import '../styles/Works.css'
import portfolio1 from '../image/portfolio-1.png';
import portfolio2 from '../image/portfolio-2.png';
import portfolio3 from '../image/portfolio-3.png';
import portfolio4 from '../image/portfolio-4.png';
import portfolio5 from '../image/portfolio-5.png';
import portfolio6 from '../image/portfolio-6.png';
import { BiLinkAlt, BiSearch } from 'react-icons/bi'


const imageNavItems = ['All', 'Web', 'React', 'Redux']

const portfolioImages = [
  {title: 'WEB DESIGN', src: portfolio1},
  {title: 'WEB DESIGN', src: portfolio2},
  {title: 'WEB DESIGN', src: portfolio3},
  {title: 'WEB DESIGN', src: portfolio4},
  {title: 'WEB DESIGN', src: portfolio5},
  {title: 'WEB DESIGN', src: portfolio6},
]

const Works = forwardRef((props, ref) => {
  return (
    <section className='portfolio' ref={ref}>
      <div className='portfolio__container'>
        <h2>Portfolio</h2>
        <ul className='portfolio__navbar'>
          {imageNavItems.map((item, index) => 
            <li key={index}><a href='#0'>{item}</a></li>
          )}
        </ul>
        <div className='portfolio__image'>
          {portfolioImages.map((portfolio, index) => (
            <div key={index} className='portfolio__image-item'>
              <img src={portfolio.src} alt='' />
              <div className='portfolio__image-overlay'>
                <div className='overlay'>
                  <h6>{portfolio.title}</h6>
                  <div className='overlay-icon'>
                    <span><BiLinkAlt size={20} /></span>
                    <span><BiSearch size={20} /></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Works