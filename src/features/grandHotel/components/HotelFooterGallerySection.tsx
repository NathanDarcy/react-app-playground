import galleryImage1 from '../images/gallery-img-1.jpeg'
import galleryImage2 from '../images/gallery-img-2.jpeg'
import galleryImage3 from '../images/gallery-img-3.jpeg'
import galleryImage4 from '../images/gallery-img-4.jpeg'
import galleryImage5 from '../images/gallery-img-5.jpeg'
import galleryImage6 from '../images/gallery-img-6.jpeg'

export default function HotelFooterGallerySection() {
  return (
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
  )
}
