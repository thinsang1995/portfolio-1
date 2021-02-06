import React, { useState, useEffect, forwardRef } from 'react'
import '../styles/Blogs.css'
import blog1 from '../image/blog-1.jpg';
import blog2 from '../image/blog-2.jpeg';
import blog3 from '../image/blog-3.jpg';
import blog4 from '../image/blog-4.jpg';
import Slider from 'infinite-react-carousel'

const blogItems = [
  {img: blog1, keyword: 'WordPress', title: 'Top WordPress Themes and Plugins for Hotels, Travel'},
  {img: blog2, keyword: 'Trends', title: 'Master These Awesome New Skills in March 2018'},
  {img: blog3, keyword: 'Themeforest', title: 'The 20 Best Lightroom Presets You Need to Know About'},
  {img: blog4, keyword: 'Trends', title: 'Best Design Items to Appeal to the Millennial Generation'},
]

const Blogs =  forwardRef((props, ref) => {
  const [widthSize, setWidthSize] = useState(
    (window.innerWidth >= 1024) ? 3 
    : (window.innerWidth >= 768) ? 2 : 1
  )

  const settingBlogs = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsScroll: widthSize,
    slidesToShow: widthSize,
  }

  useEffect(() => {
    const handleScreenWidth = () => {
      if(window.innerWidth >= 1024) {
        setWidthSize(3)
      } else if(window.innerWidth >= 768) {
        setWidthSize(2)
      } else {
        setWidthSize(1)
      }
    }
    window.addEventListener('resize', handleScreenWidth)
  })

  return (
    <section className='blogs' ref={ref}>
      <div className='blogs__container'>
        <h2>Our Blog</h2>
        <div className='blogs__list'>
          <Slider {...settingBlogs}>
            {blogItems.map((item, index) => (
              <div key={index} className='blogs__item'>
                <div className='blogs__item-image'>
                  <img src={item.img} alt='' />
                </div>
                <div className='blogs__item-content'>
                  <h6>{item.keyword}</h6>
                  <h4><a href='#0'>{item.title}</a></h4>
                  <span><a href='#0'>Read More</a></span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
})

export default Blogs