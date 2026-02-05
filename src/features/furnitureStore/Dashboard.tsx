import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaShoppingCart,
  FaSignInAlt,
  FaTruck,
  FaTwitter,
} from 'react-icons/fa'
import './furniture-store.css'

export default function FurnitureStoreDashboard() {
  return (
    <div className='topbar'>
      <div className='topbar__container'>
        <ul className='topbar__social-icons'>
          <li className='topbar__social-icon-item'>
            <a href='#' className='topbar__social-icon-link'>
              <FaFacebook className='topbar__social-icon' />
            </a>
          </li>
          <li className='topbar__social-icon-item'>
            <a href='#' className='topbar__social-icon-link'>
              <FaLinkedin className='topbar__social-icon' />
            </a>
          </li>
          <li className='topbar__social-icon-item'>
            <a href='#' className='topbar__social-icon-link'>
              <FaTwitter className='topbar__social-icon' />
            </a>
          </li>
          <li className='topbar__social-icon-item'>
            <a href='#' className='topbar__social-icon-link'>
              <FaInstagram className='topbar__social-icon' />
            </a>
          </li>
        </ul>

        <nav className='topbar__nav'>
          <ul className='topbar__nav-list'>
            <li className='topbar__nav-item'>
              <a href='#' className='topbar__nav-link'>
                <FaSignInAlt className='topbar__nav-link--icon' />
                Sign Up / Log In
              </a>
            </li>
            <li className='topbar__nav-item'>
              <a href='#' className='topbar__nav-link'>
                <FaShoppingCart className='topbar__nav-link--icon' />
                Cart(<span>2 Items</span>)
              </a>
            </li>
            <li className='topbar__nav-item'>
              <a href='#' className='topbar__nav-link'>
                <FaTruck className='topbar__nav-link--icon' />
                Track Order
              </a>
            </li>
            <li className='topbar__nav-item'>
              <a href='#' className='topbar__nav-link'>
                <FaHeart className='topbar__nav-link--icon' />
                Wishlist
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
