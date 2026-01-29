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

export default function Sidebar() {
  const icons: IconListItem[] = [
    { id: 1, icon: <FaFacebook /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaGooglePlus /> },
    { id: 4, icon: <FaInstagram /> },
  ]

  return (
    <div className='hotel__sidebar'>
      <MenuIcon />

      <SocialIconList icons={icons} />

      <div className='hotel__year'>
        <p>2026</p>
      </div>
    </div>
  )
}
