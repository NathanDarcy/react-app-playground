import './grand-hotel.css'
import { useState } from 'react'
import HotelCustomers from './components/HotelCustomers'
import HotelFooter from './components/HotelFooter'
import HotelRooms from './components/HotelRooms'
import AboutUs from './components/AboutUs'
import HotelHeader from './components/HotelHeader'
import HotelNavBar from './components/HotelNavbar'

export default function GrandHotelDashBoard() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  function toggleNavigationOpen() {
    setIsNavigationOpen((prev) => !prev)
  }

  return (
    <div className='hotel'>
      <HotelNavBar
        isNavigationOpen={isNavigationOpen}
        onToggleNavigation={toggleNavigationOpen}
      />
      <HotelHeader />
      <AboutUs />
      <HotelRooms />
      <HotelCustomers />
      <HotelFooter />
    </div>
  )
}
