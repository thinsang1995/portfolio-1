import React from 'react'
import '../styles/Works.css'
import Portfolio1 from '../image/portfolio-1.png';
import Portfolio2 from '../image/portfolio-2.png';
import Portfolio3 from '../image/portfolio-3.png';
import Portfolio4 from '../image/portfolio-4.png';
import Portfolio5 from '../image/portfolio-5.png';
import Portfolio6 from '../image/portfolio-6.png';

function Works() {
  return (
    <section className='portfolio' id='works'>
      <div className='portfolio__container'>
        <h3>Portfolio</h3>
        <ul className='portfolio__navbar'>
          <li><a href='#0'>All</a></li>
          <li><a href='#0'>Html5/Css3</a></li>
          <li><a href='#0'>JavaScript</a></li>
          <li><a href='#0'>React</a></li>
          <li><a href='#0'>Redux</a></li>
        </ul>
        <div className='portfolio__image'>
          <div className='item-img'>
            <img src={Portfolio1} alt='portfolio-1' />
            <div className='item-img-overlay'></div>
          </div>
          <div className='item-img'>
            <img src={Portfolio2} alt='portfolio-2' />
            <div className='item-img-overlay'></div>
          </div>
          <div className='item-img'>
            <img src={Portfolio3} alt='portfolio-3' />
            <div className='item-img-overlay'></div>
          </div>
          <div className='item-img'>
            <img src={Portfolio4} alt='portfolio-4' />
            <div className='item-img-overlay'></div>
          </div>
          <div className='item-img'>
            <img src={Portfolio5} alt='portfolio-5' />
            <div className='item-img-overlay'></div>
          </div>
          <div className='item-img'>
            <img src={Portfolio6} alt='portfolio-6' />
            <div className='item-img-overlay'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works