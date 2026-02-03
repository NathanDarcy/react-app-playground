import crown from '../images/crown.png';

export default function HotelHeader() {
  return (
    <header className='hotel__header'>
      <div className='hotel__header-brand'>
        <img src={crown} width={80} />
        <h3 className='hotel__header-heading'>Grand Hotel</h3>
      </div>

      <div className='hotel__banner'>
        <h1 className='hotel__banner-heading'>Welcome to Grand Hotel</h1>
        <p className='hotel__banner-paragraph'>Make your life luxurious</p>
        <button className='hotel__banner-btn'>Check Out</button>
      </div>
    </header>
  );
}
