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
        <p>&copy; 2026. Grand Hotel. All rights reserved</p>
      </div>
    </nav>
  )
}
