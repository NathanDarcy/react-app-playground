import './grand-hotel.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import { useState } from 'react'

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
    </div>
  )
}
