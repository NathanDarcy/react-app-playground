import './grand-hotel.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import { useState } from 'react'
import crown from './images/crown.png'
import aboutUsImage1 from './images/about-us-img-1.jpeg'
import aboutUsImage2 from './images/about-us-img-2.jpeg'
import aboutUsImage3 from './images/about-us-img-3.jpeg'
import aboutUsImage4 from './images/about-us-img-4.jpeg'
import singleRoom from './images/single-room.jpeg'
import vip from './images/vip.jpeg'
import doubleRoom from './images/double-room.jpeg'
import lux from './images/lux.jpeg'
import customer1 from './images/customer-1.jpeg'
import customer2 from './images/customer-2.jpeg'
import galleryImage1 from './images/gallery-img-1.jpeg'
import galleryImage2 from './images/gallery-img-2.jpeg'
import galleryImage3 from './images/gallery-img-3.jpeg'
import galleryImage4 from './images/gallery-img-4.jpeg'
import galleryImage5 from './images/gallery-img-5.jpeg'
import galleryImage6 from './images/gallery-img-6.jpeg'
import { FaAngleDoubleRight, FaHeart } from 'react-icons/fa'

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

          <div className='hotel__common-underlines'>
            <div className='hotel__common-underline--small'></div>
            <div className='hotel__common-underline--big'></div>
          </div>

          <h3 className='hotel__sub-heading'>Grand Hotel</h3>
          <p className='hotel__about-us-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla
            doloremque suscipit nisi, nobis quam laborum excepturi laboriosam?
            Maiores, optio. Doloribus, quas saepe? Necessitatibus, asperiores.
          </p>

          <button className='hotel__about-us-btn'>
            Read More <FaAngleDoubleRight className='hotel__btn--icon' />
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

      {/* rooms */}
      <section className='hotel__rooms'>
        <div className='hotel__common-header'>
          <h1 className='hotel__common-heading'>Rooms in Grand Hotel</h1>
          <div className='hotel__common-underlines'>
            <div className='hotel__common-underline--small'></div>
            <div className='hotel__common-underline--big'></div>
          </div>
        </div>

        <div className='hotel__rooms-cards-wrapper'>
          <div className='hotel__room-card'>
            <img src={singleRoom} className='hotel__rooms-image' />
            <div className='hotel__rooms-card-content'>
              <h4 className='hotel__rooms-card-heading'>Single Room</h4>
              <p className='hotel__rooms-card-paragraph'>
                Lorem ipsum'dolor, sit amet
              </p>
              <p className='hotel__rooms-price'>$99.00</p>
              <button className='hotel__rooms-card-btn'>
                Book Now!
                <FaAngleDoubleRight className='hotel__btn--icon' />
              </button>
            </div>
          </div>

          <div className='hotel__room-card'>
            <img src={doubleRoom} className='hotel__rooms-image' />
            <div className='hotel__rooms-card-content'>
              <h4 className='hotel__rooms-card-heading'>Double Room</h4>
              <p className='hotel__rooms-card-paragraph'>
                Lorem ipsum'dolor, sit amet
              </p>
              <p className='hotel__rooms-price'>$199.00</p>
              <button className='hotel__rooms-card-btn'>
                Book Now!
                <FaAngleDoubleRight className='hotel__btn--icon' />
              </button>
            </div>
          </div>

          <div className='hotel__room-card'>
            <img src={lux} className='hotel__rooms-image' />
            <div className='hotel__rooms-card-content'>
              <h4 className='hotel__rooms-card-heading'>Luxury Room</h4>
              <p className='hotel__rooms-card-paragraph'>
                Lorem ipsum'dolor, sit amet
              </p>
              <p className='hotel__rooms-price'>$399.00</p>
              <button className='hotel__rooms-card-btn'>
                Book Now!
                <FaAngleDoubleRight className='hotel__btn--icon' />
              </button>
            </div>
          </div>

          <div className='hotel__room-card'>
            <img src={vip} className='hotel__rooms-image' />
            <div className='hotel__rooms-card-content'>
              <h4 className='hotel__rooms-card-heading'>VIP Room</h4>
              <p className='hotel__rooms-card-paragraph'>
                Lorem ipsum'dolor, sit amet
              </p>
              <p className='hotel__rooms-price'>$599.00</p>
              <button className='hotel__rooms-card-btn'>
                Book Now!
                <FaAngleDoubleRight className='hotel__btn--icon' />
              </button>
            </div>
          </div>
        </div>

        <div className='hotel__rooms-btn-wrapper'>
          <button className='hotel__rooms-btn'>Check All Rooms</button>
        </div>
      </section>

      {/* customers */}
      <section className='hotel__customers'>
        <div className='hotel__common-header'>
          <h1 className='hotel__common-heading'>Our Customers</h1>
          <div className='hotel__common-underlines'>
            <div className='hotel__common-underline--small'></div>
            <div className='hotel__common-underline--big'></div>
          </div>
        </div>

        <p className='hotel__customers-paragraph'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          asperiores?
        </p>

        <div className='hotel__customers-card-wrapper'>
          <div className='hotel__customer-card'>
            <div className='hotel__customer-image-wrapper'>
              <img src={customer1} className='hotel__customer-image' />
            </div>

            <div className='hotel__customer-info'>
              <h3 className='hotel__customer-fullname'>Helen Doe</h3>

              <p className='hotel__customer-paragraph--1'>Happy Customer</p>
              <p className='hotel__customer-paragraph--2'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                error consequuntur ut quam ratione in commodi expedita at
                repellat, architecto adipisci laborum vitae quas est deleniti
                optio, maiores consectetur aspernatur."
              </p>
            </div>
          </div>

          <div className='hotel__customer-card'>
            <div className='hotel__customer-image-wrapper'>
              <img src={customer2} className='hotel__customer-image' />
            </div>

            <div className='hotel__customer-info'>
              <h3 className='hotel__customer-fullname'>Monica Smith</h3>

              <p className='hotel__customer-paragraph--1'>Happy Customer</p>
              <p className='hotel__customer-paragraph--2'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                error consequuntur ut quam ratione in commodi expedita at
                repellat, architecto adipisci laborum vitae quas est deleniti
                optio, maiores consectetur aspernatur."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className='hotel__footer'>
        <div className='hotel__main-part'>
          <div className='hotel__footer-list-wrapper'>
            <h3 className='hotel__footer-heading'>Grand Hotel</h3>

            <ul className='hotel__footer-list'>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  support@grandhotel.com
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  New York, Main St. 123
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  (555) 555-5555
                </a>
              </li>
            </ul>
          </div>
          <div className='hotel__footer-list-wrapper'>
            <h3 className='hotel__footer-heading'>Explore</h3>

            <ul className='hotel__footer-list'>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  home
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  about us
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  rooms
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  events
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  customers
                </a>
              </li>
              <li className='hotel__footer-list-item'>
                <a href='#' className='hotel__footer-list-link'>
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className='contact'>
            <h3 className='hotel__footer-heading'>Contact</h3>

            <p>Sign up for news</p>

            <form className='hotel__footer-form'>
              <input
                type='text'
                className='hotel__footer-input'
                placeholder='your email'
              />
              <button className='hotel__footer-btn'>Sign up</button>
            </form>
          </div>

          <div className='hotel__gallery'>
            <h3 className='hotel__footer-heading'>Gallery</h3>
            <div className='hotel__gallery-images'>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage1} className='hotel__footer-image' />
              </div>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage2} className='hotel__footer-image' />
              </div>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage3} className='hotel__footer-image' />
              </div>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage4} className='hotel__footer-image' />
              </div>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage5} className='hotel__footer-image' />
              </div>
              <div className='hotel__image-wrapper'>
                <img src={galleryImage6} className='hotel__footer-image' />
              </div>
            </div>
          </div>
        </div>

        <div className='hotel__creator-part'>
          <div className='hotel__copyright-text'>
            <p>
              Copyright &copy; {new Date().getFullYear()} Grand Hotel. All
              rights reserved
            </p>
          </div>
          <div className='hotel__text-right'>
            <p>
              Made with <FaHeart className='hotel__heart-icon' /> by{' '}
              <span>CodeAndCreate</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
