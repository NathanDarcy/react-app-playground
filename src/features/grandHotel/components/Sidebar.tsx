import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import MenuIcon from './MenuIcon'
import SocialIconList from './SocialIconList'
import type { ReactNode } from 'react'

export type IconListItem = { id: number; icon: ReactNode }

type SidebarProps = {
  isNavigationOpen: boolean
  onToggleNavigation: () => void
}

export default function Sidebar({
  isNavigationOpen,
  onToggleNavigation,
}: SidebarProps) {
  const icons: IconListItem[] = [
    { id: 1, icon: <FaFacebook /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaGooglePlus /> },
    { id: 4, icon: <FaInstagram /> },
  ]

  return (
    <div className='sidebar'>
      <MenuIcon isOpen={isNavigationOpen} onIconClicked={onToggleNavigation} />

      <SocialIconList icons={icons} />

      <div className='sidebar__year'>
        <p>2026</p>
      </div>
    </div>
  )
}
