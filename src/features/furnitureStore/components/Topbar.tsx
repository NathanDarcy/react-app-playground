import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaTruck,
  FaTwitter,
} from 'react-icons/fa'
import dropdownImage from '../images/dropdown-image.jpg'

export default function Topbar() {
  return (
    <div className='topbar'>
      {/* Social Icons */}
      <ul className='topbar__social-icons'>
        <li className='topbar__social-item'>
          <a href='#' className='topbar__social-link'>
            <FaFacebook className='topbar__social-icon' />
          </a>
        </li>
        <li className='topbar__social-item'>
          <a href='#' className='topbar__social-link'>
            <FaLinkedin className='topbar__social-icon' />
          </a>
        </li>
        <li className='topbar__social-item'>
          <a href='#' className='topbar__social-link'>
            <FaTwitter className='topbar__social-icon' />
          </a>
        </li>
        <li className='topbar__social-item'>
          <a href='#' className='topbar__social-link'>
            <FaInstagram className='topbar__social-icon' />
          </a>
        </li>
      </ul>

      {/* First Nav */}
      <nav className='topbar__first-nav'>
        <ul className='first-nav'>
          <li className='first-nav__item'>
            <a href='#' className='first-nav__link'>
              <FaSignInAlt className='first-nav__icon' />
              Sign Up / Log In
            </a>
          </li>
          <li className='first-nav__item'>
            <a href='#' className='first-nav__link'>
              <FaShoppingCart className='first-nav__icon' />
              Cart(<span>2 Items</span>)
            </a>
          </li>
          <li className='first-nav__item'>
            <a href='#' className='first-nav__link'>
              <FaTruck className='first-nav__icon' />
              Track Order
            </a>
          </li>
          <li className='first-nav__item'>
            <a href='#' className='first-nav__link'>
              <FaHeart className='first-nav__icon' />
              Wishlist
            </a>
          </li>
        </ul>
      </nav>

      {/* Search Form */}
      <div className='topbar__search'>
        <form className='search-form'>
          <input
            type='text'
            className='search-form__input'
            placeholder='Search...'
          />
          <button className='search-form__button'>
            <FaSearch className='search-form__icon' />
          </button>
        </form>
      </div>

      {/* Secondary Nav */}
      <nav className='topbar__secondary-nav'>
        <ul className='secondary-nav'>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Furniture
            </a>

            {/* Dropdown Block */}
            <div className='dropdown'>
              <ul className='dropdown__list dropdown__list--furniture'>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Sofas
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Sectionals
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Daybeds & Chaises
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Consolas & Credenzas
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Chairs
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Benches & Ottomans
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Dressers & Chests
                  </a>
                </li>
                <li className='dropdown__item'>
                  <a href='#' className='dropdown__link'>
                    Dining Tables
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Rooms
            </a>
          </li>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Kitchen
            </a>
          </li>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Outdoor
            </a>
          </li>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Lighting
            </a>
          </li>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Bed & Bath
            </a>
          </li>
          <li className='secondary-nav__item'>
            <a href='#' className='secondary-nav__link'>
              Window
            </a>
          </li>
        </ul>

        {/* Designers Dropdown */}
        <ul className='dropdown__list dropdown__list--designers'>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Lampert
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Baxter
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Channing
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Maxine
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Talitha
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Rider
            </a>
          </li>
          <li className='dropdown__item'>
            <a href='#' className='dropdown__link'>
              Goldfinger
            </a>
          </li>

          <img src={dropdownImage} className='dropdown__image' />
        </ul>
      </nav>
    </div>
  )
}
