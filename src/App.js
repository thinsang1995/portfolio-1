import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillLike, AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { HiSpeakerphone }  from 'react-icons/hi'
import { SiRedux } from 'react-icons/si';
import { GiPositionMarker } from 'react-icons/gi'
import AvataImage from './image/avata-picture.png';
import Portfolio1 from './image/portfolio-1.png';
import Portfolio2 from './image/portfolio-2.png';
import Portfolio3 from './image/portfolio-3.png';
import Portfolio4 from './image/portfolio-4.png';
import Portfolio5 from './image/portfolio-5.png';
import Portfolio6 from './image/portfolio-6.png';
import CustomerAvata from './image/customer-avata.png';
import Blog1 from './image/blog-1.jpg';
import Blog2 from './image/blog-2.jpeg';
import Blog3 from './image/blog-3.jpg';
import Blog4 from './image/blog-4.jpg';
import Typical from 'react-typical'
import { Link } from 'react-scroll'
import Slider from 'infinite-react-carousel'

function App() {
  const [toggle, setToggle] = useState({isShow: false})
  const [sticky, setSticky] = useState({isSticky: false, isHidden: false})
  const headerRef = useRef(null)

  //handle navbar toggle
  const handleNavbar = () => {
    setToggle({isShow: !toggle.isShow})
  }

  //handle scroll event
  const handleScroll = () => {
    if(window.pageYOffset > 950 ) {
      setSticky({isSticky: true , isHiden: false})
    } else if(window.pageYOffset >= 20 && window.pageYOffset <= 950) {
      setSticky({isSticky:false, isHidden: true})
    }
    else {
      setSticky({isSticky:false, isHidden: false})
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const settingClients =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  const settingBlogs = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    dots: true,
    slidesPerRow: 2
  }

  return (
    <div>
      <nav className='nav__wrapper'>
        <div className={`nav__container ${sticky.isSticky ? 'sticky': ''} ${sticky.isHidden ? 'hidden': ''}`}>
          <div className='nav__logo'>
            <h1>Sang</h1>
            <span className='hamburger' onClick={handleNavbar}>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </span>
          </div>
          <ul className={`nav__bar ${toggle.isShow ? '': 'toggle'}`}>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} onClick={handleNavbar}>Home</Link>
            </li>
            <li><Link  to="about" spy={true} smooth={true} onClick={handleNavbar}>About</Link></li>
            <li><Link  to="services" spy={true} smooth={true} onClick={handleNavbar}>Services</Link></li>
            <li><Link  to="works" spy={true} smooth={true} onClick={handleNavbar}>Works</Link></li>
            <li><Link  to="clients" spy={true} smooth={true}  onClick={handleNavbar}>Clients</Link></li>
            <li><Link  to="blogs" spy={true} smooth={true} onClick={handleNavbar}>Blogs</Link></li>
            <li><Link  to="contact" spy={true} smooth={true}  onClick={handleNavbar}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section className='home' id='home'>
        <div className='home__container'>
          <div className='home__caption'>
            <h5>Hello</h5>
            <h6 className='home__name'>I Am {' '}
              {/* <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Trenh Thin Sang', 2000,
                  'Front End Developer', 2000
                ]}
              /> */}
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

      <section className='about' id='about'>
        <div className='about__container'>
          <div className='about__avata'>
            <img src={AvataImage} alt='avata' />
          </div>
          <div className='about__info'>
            <h3>About Me.</h3>
            <span>Front End Web Developer</span>
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
          <button type='button' className='about__contact-btn'>
            <Link  to="contact" spy={true} smooth={true}>Contact</Link>
          </button>
        </div>
      </section>

      <section className='services' id='services'>
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

      <section className='clients' id='clients'>
        <div className='clients__container'>
          <h3>Testimonials</h3>
          <div className='clients__feedback'>
            <Slider {...settingClients}>
              <div className='clients__feedback-item'>
                <div className='clients__avata'>
                  <img src={CustomerAvata} alt='customer-avata' />
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h6>Alex Smith</h6>
                <span>Envato Customer</span>
              </div>
              <div className='clients__feedback-item'>
                <div className='clients__avata'>
                  <img src={CustomerAvata} alt='customer-avata' />
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h6>Alex Smith</h6>
                <span>Envato Customer</span>
              </div>
              <div className='clients__feedback-item'>
                <div className='clients__avata'>
                  <img src={CustomerAvata} alt='customer-avata' />
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h6>Alex Smith</h6>
                <span>Envato Customer</span>
              </div>
            </Slider>
          </div>
          <div className='clients__numbers'>
            <div className='clients__numbers-item'>
              <span className='numbers__icon'><BsFillPeopleFill size={35} /></span>
              <h3>850</h3>
              <p>Happy Customers</p>
            </div>
            <div className='clients__numbers-item'>
              <span className='numbers__icon'><AiFillLike size={35} /></span>
              <h3>230</h3>
              <p>Complete Projects</p>
            </div>
            <div className='clients__numbers-item'>
              <span className='numbers__icon'><HiSpeakerphone size={35} /></span>
              <h3>9450</h3>
              <p>Lines Of Code</p>
            </div>
            <div className='clients__numbers-item'>
              <span className='numbers__icon'><FaCloudDownloadAlt size={35} /></span>
              <h3>780</h3>
              <p>Files Downloaded</p>
            </div>
          </div>
        </div>
      </section>

      <section className='blogs' id='blogs'>
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

      <section className='contact' id='contact'>
        <div className='contact__container'>
          <h3>Contact Us</h3>
          <div className='contact__list'>
            <div className='contact__item'>
              <span><GiPositionMarker size={30} /></span>
              <h6>Address</h6>
              <p>6834 Hollywood Blvd - Los Angeles CA</p>
            </div>
            <div className='contact__item'>
              <span><AiTwotoneMail size={30} /></span>
              <h6>Email</h6>
              <p>Support@website.com</p>
            </div>
            <div className='contact__item'>
              <span><AiTwotonePhone size={30} /></span>
              <h6>Phone</h6>
              <p>+20 010 2517 8918</p>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer__container'>
          <p>Copy Right 2021 © By Sang All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
