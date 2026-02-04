export default function HotelFooterContactSection() {
  return (
    <div className='hotel__contact'>
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
  )
}
