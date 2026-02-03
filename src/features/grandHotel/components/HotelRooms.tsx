import CommonHeader from './CommonHeader'
import singleRoom from '../images/single-room.jpeg'
import vip from '../images/vip.jpeg'
import doubleRoom from '../images/double-room.jpeg'
import lux from '../images/lux.jpeg'
import HotelRoomCard from './HotelRoomCard'

export default function HotelRooms() {
  return (
    <section className='hotel__rooms'>
      <CommonHeader headingText='Rooms in Grand Hotel' />

      <div className='hotel__rooms-cards-wrapper'>
        <HotelRoomCard image={singleRoom} />
        <HotelRoomCard image={doubleRoom} />
        <HotelRoomCard image={lux} />
        <HotelRoomCard image={vip} />
      </div>

      <div className='hotel__rooms-btn-wrapper'>
        <button className='hotel__rooms-btn'>Check All Rooms</button>
      </div>
    </section>
  )
}
