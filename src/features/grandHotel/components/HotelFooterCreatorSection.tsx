import { FaHeart } from 'react-icons/fa'

export default function HotelFooterCreatorSection() {
  return (
    <div className='hotel__creator-part'>
      <div className='hotel__copyright-text'>
        <p>
          Copyright &copy; {new Date().getFullYear()} Grand Hotel. All rights
          reserved
        </p>
      </div>
      <div className='hotel__text-right'>
        <p>
          Made with <FaHeart className='hotel__heart-icon' /> by{' '}
          <span>CodeAndCreate</span>
        </p>
      </div>
    </div>
  )
}
