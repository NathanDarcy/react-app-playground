import Navigation from './Navigation'
import Sidebar from './Sidebar'

type HotelNavBarProps = {
  isNavigationOpen: boolean
  onToggleNavigation: () => void
}

export default function HotelNavBar({
  isNavigationOpen,
  onToggleNavigation,
}: HotelNavBarProps) {
  return (
    <div className='hotel__navbar'>
      <Sidebar
        isNavigationOpen={isNavigationOpen}
        onToggleNavigation={onToggleNavigation}
      />

      <Navigation isOpen={isNavigationOpen} />
    </div>
  )
}
