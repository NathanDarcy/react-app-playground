import { FaAngleDoubleRight } from 'react-icons/fa'

export default function HotelNavBarAboutUsContent() {
  return (
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
  )
}
