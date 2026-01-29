import { FaSearch } from 'react-icons/fa'

export default function NavigationHeader() {
  return (
    <div className='navigation__header'>
      <h1 className='navigation__heading'>Grand Hotel</h1>

      <form onSubmit={(e) => e.preventDefault()} className='navigation__search'>
        <input
          type='text'
          className='navigation__search-input'
          placeholder='Search...'
        />
        <button className='navigation__search-btn'>
          <FaSearch />
        </button>
      </form>
    </div>
  )
}
