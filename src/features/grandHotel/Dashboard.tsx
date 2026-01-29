import './grand-hotel.css'
import Sidebar from './components/Sidebar'
import { FaSearch } from 'react-icons/fa'

export default function GrandHotelDashBoard() {
  return (
    <div className='hotel'>
      <div className='hotel__navbar'>
        <Sidebar />

        <nav className='hotel__navigation'>
          <div className='hotel__navigation-header'>
            <h1 className='hotel__navigation-heading'>Grand Hotel</h1>

            <form className='hotel__navigation-search'>
              <input
                type='text'
                className='hotel__navigation-search-input'
                placeholder='Search...'
              />
              <button className='hotel__navigation-search-btn'>
                <FaSearch />
              </button>
            </form>
          </div>

          <ul className='hotel__navigation-list'>
            <li className='hotel__navigation-item'>
              <a href='#' className='hotel__navigation-link'>
                home
              </a>
            </li>
            <li className='hotel__navigation-item'>
              <a href='#' className='hotel__navigation-link'>
                about us
              </a>
            </li>
            <li className='hotel__navigation-item'>
              <a href='#' className='hotel__navigation-link'>
                events
              </a>
            </li>
            <li className='hotel__navigation-item'>
              <a href='#' className='hotel__navigation-link'>
                customers
              </a>
            </li>
            <li className='hotel__navigation-item'>
              <a href='#' className='hotel__navigation-link'>
                contact
              </a>
            </li>
          </ul>

          <div className='hotel__copyright'>
            <p>&copy; 2026. Grand Hotel. All rights reserved</p>
          </div>
        </nav>
      </div>
    </div>
  )
}
