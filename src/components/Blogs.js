import React from 'react'
import '../styles/Blogs.css'
import Blog1 from '../image/blog-1.jpg';
import Blog2 from '../image/blog-2.jpeg';
import Blog3 from '../image/blog-3.jpg';
import Blog4 from '../image/blog-4.jpg';
import Slider from 'infinite-react-carousel'

function Blogs({ pageRefs }) {

  const settingBlogs = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  }

  return (
    <section className='blogs' ref={el => pageRefs.current = {...pageRefs.current, blogs: el}}>
      <div className='blogs__container'>
        <h3>Our Blogs</h3>
        <div className='blogs__list'>
          <Slider {...settingBlogs}>
            <div className='blogs__item'>
              <div className='blogs__item-image'>
                <img src={Blog1} alt='blog-1' />
              </div>
              <div className='blogs__item-content'>
                <h6>WordPress</h6>
                <h4><a href='#0'>Top WordPress Themes and Plugins for Hotels, Travel</a></h4>
                <span><a href='#0'>Read More</a></span>
              </div>
            </div>
            <div className='blogs__item'>
              <div className='blogs__item-image'>
                <img src={Blog2} alt='blog-2' />
              </div>
              <div className='blogs__item-content'>
                <h6>Trends</h6>
                <h4><a href='#0'>Master These Awesome New Skills in March 2018</a></h4>
                <span><a href='#0'>Read More</a></span>
              </div>
            </div>
            <div className='blogs__item'>
              <div className='blogs__item-image'>
                <img src={Blog3} alt='blog-3' />
              </div>
              <div className='blogs__item-content'>
                <h6>Themeforest</h6>
                <h4><a href='#0'>The 20 Best Lightroom Presets You Need to Know About</a></h4>
                <span><a href='#0'>Read More</a></span>
              </div>
            </div>
            <div className='blogs__item'>
              <div className='blogs__item-image'>
                <img src={Blog4} alt='blog-4' />
              </div>
              <div className='blogs__item-content'>
                <h6>Trends</h6>
                <h4><a href='#0'>Best Design Items to Appeal to the Millennial Generation</a></h4>
                <span><a href='#0'>Read More</a></span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Blogs