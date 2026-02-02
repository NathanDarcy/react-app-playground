import './grand-hotel.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import { useState } from 'react'
import crown from './images/crown.png'

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
    </div>
  )
}
