type HotelCustomerCardProps = {
  image: string
}
export default function HotelCustomerCard({ image }: HotelCustomerCardProps) {
  return (
    <div className='hotel__customer-card'>
      <div className='hotel__customer-image-wrapper'>
        <img src={image} className='hotel__customer-image' />
      </div>

      <div className='hotel__customer-info'>
        <h3 className='hotel__customer-fullname'>Helen Doe</h3>

        <p className='hotel__customer-paragraph--1'>Happy Customer</p>
        <p className='hotel__customer-paragraph--2'>
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          error consequuntur ut quam ratione in commodi expedita at repellat,
          architecto adipisci laborum vitae quas est deleniti optio, maiores
          consectetur aspernatur.&quot;
        </p>
      </div>
    </div>
  )
}
