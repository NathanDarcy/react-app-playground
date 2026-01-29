import { Link } from 'react-router'

export default function NavigationList() {
  return (
    <ul className='navigation__list'>
      <li className='navigation__list-item'>
        <a href='#' className='navigation__link'>
          home
        </a>
      </li>
      <li className='navigation__list-item'>
        <a href='#' className='navigation__link'>
          about us
        </a>
      </li>
      <li className='navigation__list-item'>
        <a href='#' className='navigation__link'>
          events
        </a>
      </li>
      <li className='navigation__list-item'>
        <a href='#' className='navigation__link'>
          customers
        </a>
      </li>
      <li className='navigation__list-item'>
        <a href='#' className='navigation__link'>
          contact
        </a>
      </li>
      <li className='navigation__list-item'>
        <Link to='/' className='navigation__link'>
          exit hotel app
        </Link>
      </li>
    </ul>
  )
}
