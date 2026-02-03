import CommonHeader from './CommonHeader'
import customer1 from '../images/customer-1.jpeg'
import customer2 from '../images/customer-2.jpeg'
import HotelCustomerCard from './HotelCustomerCard'

export default function HotelCustomers() {
  return (
    <section className='hotel__customers'>
      <CommonHeader headingText='Our Customers' />

      <p className='hotel__customers-paragraph'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        asperiores?
      </p>

      <div className='hotel__customers-card-wrapper'>
        <HotelCustomerCard image={customer1} />
        <HotelCustomerCard image={customer2} />
      </div>
    </section>
  )
}
