import HotelFooterCreatorSection from './HotelFooterCreatorSection'
import HotelFooterGallerySection from './HotelFooterGallerySection'
import HotelFooterContactSection from './HotelFooterContactSection'
import HotelFooterInformation from './HotelFooterInformation'
import HotelFooterExploreSection from './HotelFooterExploreSection'

export default function HotelFooter() {
  return (
    <footer className='hotel__footer'>
      <div className='hotel__main-part'>
        <HotelFooterInformation />
        <HotelFooterExploreSection />
        <HotelFooterContactSection />
        <HotelFooterGallerySection />
      </div>

      <HotelFooterCreatorSection />
    </footer>
  )
}
