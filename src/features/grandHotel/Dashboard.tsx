import './grand-hotel.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import { useState } from 'react'
import crown from './images/crown.png'
import aboutUsImage1 from './images/about-us-img-1.jpeg'
import aboutUsImage2 from './images/about-us-img-2.jpeg'
import aboutUsImage3 from './images/about-us-img-3.jpeg'
import aboutUsImage4 from './images/about-us-img-4.jpeg'
import { FaAngleDoubleRight } from 'react-icons/fa'

export default function GrandHotelDashBoard() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  function toggleNavigationOpen() {
    setIsNavigationOpen((prev) => !prev)
  }

  return (
    <div className='hotel'>
      <div className='hotel__navbar'>
        <Sidebar
          isNavigationOpen={isNavigationOpen}
          onToggleNavigation={toggleNavigationOpen}
        />

        <Navigation isOpen={isNavigationOpen} />
      </div>

      {/* header */}
      <header className='hotel__header'>
        <div className='hotel__header-brand'>
          <img src={crown} width={80} />
          <h3 className='hotel__header-heading'>Grand Hotel</h3>
        </div>

        <div className='hotel__banner'>
          <h1 className='hotel__banner-heading'>Welcome to Grand Hotel</h1>
          <p className='hotel__banner-paragraph'>Make your life luxurious</p>
          <button className='hotel__banner-btn'>Check Out</button>
        </div>
      </header>

      {/* about us */}
      <section className='hotel__about-us'>
        <div className='hotel__about-us-content'>
          <h1 className='hotel__about-us-heading'>About Us</h1>

          <div className='hotel__about-us-underlines'>
            <div className='hotel__about-us-underline--small'></div>
            <div className='hotel__about-us-underline--big'></div>
          </div>

          <h3 className='hotel__sub-heading'>Grand Hotel</h3>
          <p className='hotel__about-us-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla
            doloremque suscipit nisi, nobis quam laborum excepturi laboriosam?
            Maiores, optio. Doloribus, quas saepe? Necessitatibus, asperiores.
          </p>

          <button className='hotel__about-us-btn'>
            Read More{' '}
            <span className='hotel__about-us-btn--icon'>
              <FaAngleDoubleRight />
            </span>
          </button>
        </div>

        <div className='hotel__about-us-images'>
          <img
            src={aboutUsImage1}
            className='hotel__about-us-image hotel__about-us-image--1'
          />
          <img
            src={aboutUsImage2}
            className='hotel__about-us-image hotel__about-us-image--2'
          />
          <img
            src={aboutUsImage3}
            className='hotel__about-us-image hotel__about-us-image--3'
          />
          <img
            src={aboutUsImage4}
            className='hotel__about-us-image hotel__about-us-image--4'
          />
        </div>
      </section>
    </div>
  )
}
