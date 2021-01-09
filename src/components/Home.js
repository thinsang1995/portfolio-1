import React from 'react'
import '../styles/Home.css'
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import Typical from 'react-typical'

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__container'>
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
            <a href='#1'><span><FiFacebook size={18} /></span></a>
            <a href='#1'><span><FiInstagram /></span></a>
            <a href='#1'><span><FiTwitter /></span></a>
            <a href='#1'><span><FiLinkedin /></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home