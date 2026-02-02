import NavigationHeader from './NavigationHeader'
import NavigationList from './NavigationList'

type NavigationProps = {
  isOpen: boolean
}

export default function Navigation({ isOpen }: NavigationProps) {
  return (
    <nav
      className={`navigation ${isOpen ? 'navigation--open' : 'navigation--closed'}`}
    >
      <NavigationHeader />

      <NavigationList />

      <div className='navigation__copyright'>
        <p>
          &copy; {new Date().getFullYear()}. Grand Hotel. All rights reserved
        </p>
      </div>
    </nav>
  )
}
