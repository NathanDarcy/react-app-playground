import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import './grand-hotel.css'

export default function GrandHotelDashBoard() {
  return (
    <div className='hotel'>
      {/* navbar */}
      <div className='hotel__navbar'>
        {/* sidebar */}
        <div className='hotel__sidebar'>
          {/* menu icon */}
          <div className='hotel__menu-icon'>
            <div className='hotel__menu-icon-line hotel__menu-icon-line--1'></div>
            <div className='hotel__menu-icon-line hotel__menu-icon-line--2'></div>
            <div className='hotel__menu-icon-line hotel__menu-icon-line--3'></div>
          </div>

          {/* social icons */}
          <ul className='hotel__social-icons-list'>
            <li>
              <a href='#' className='hotel__social-icons-link'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='#' className='hotel__social-icons-link'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='#' className='hotel__social-icons-link'>
                <FaGooglePlus />
              </a>
            </li>
            <li>
              <a href='#' className='hotel__social-icons-link'>
                <FaInstagram />
              </a>
            </li>
          </ul>

          <div className='hotel__year'>
            <p>2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
