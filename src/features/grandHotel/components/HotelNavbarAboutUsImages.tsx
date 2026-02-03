import aboutUsImage1 from '../images/about-us-img-1.jpeg'
import aboutUsImage2 from '../images/about-us-img-2.jpeg'
import aboutUsImage3 from '../images/about-us-img-3.jpeg'
import aboutUsImage4 from '../images/about-us-img-4.jpeg'

export default function HotelNavBarAboutUsImages() {
  return (
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
  )
}
