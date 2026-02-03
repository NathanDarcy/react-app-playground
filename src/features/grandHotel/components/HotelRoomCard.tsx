import { FaAngleDoubleRight } from 'react-icons/fa'

type HotelRoomCardProps = {
  image: string
}

export default function HotelRoomCard({ image }: HotelRoomCardProps) {
  return (
    <div className='hotel__room-card'>
      <img src={image} className='hotel__rooms-image' />
      <div className='hotel__rooms-card-content'>
        <h4 className='hotel__rooms-card-heading'>Single Room</h4>
        <p className='hotel__rooms-card-paragraph'>
          Lorem ipsum&apos;dolor, sit amet
        </p>
        <p className='hotel__rooms-price'>$99.00</p>
        <button className='hotel__rooms-card-btn'>
          Book Now!
          <FaAngleDoubleRight className='hotel__btn--icon' />
        </button>
      </div>
    </div>
  )
}
