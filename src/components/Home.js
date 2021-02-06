import React, { forwardRef } from 'react'
import '../styles/Home.css'
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import Typical from 'react-typical'

const homeIcons = [
  {component: FiFacebook, size: 18},
  {component: FiInstagram, size: 18},
  {component: FiTwitter, size: 18},
  {component: FiLinkedin, size: 18},
]

const Home =  forwardRef((props, ref) => {
  return (
    <section className='home' ref={ref}>
      <div className='home__container'>
        <div className='hom__wrapper'>
          <div className='home__caption'>
            <h5>Hello</h5>
            <h6 className='home__name'>I Am 
              <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                  ' Sang Trenh', 3000,
                  ' From Vietnam', 3000
                ]}
              />
            </h6>
            <div className='home__social'>
              {homeIcons.map((icon, index) => (
                <a key={index} href='#1'><span><icon.component size={icon.size} /></span></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Home