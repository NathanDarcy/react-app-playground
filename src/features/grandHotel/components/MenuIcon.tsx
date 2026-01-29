type MenuIconProps = {
  isOpen: boolean
  onIconClicked: () => void
}

export default function MenuIcon({ isOpen, onIconClicked }: MenuIconProps) {
  return (
    <div
      className={`sidebar__menu-icon ${isOpen ? 'sidebar__menu-icon--open' : ''}`}
      onClick={onIconClicked}
    >
      <div className='sidebar__menu-icon-line sidebar__menu-icon-line--1'></div>
      <div className='sidebar__menu-icon-line sidebar__menu-icon-line--2'></div>
      <div className='sidebar__menu-icon-line sidebar__menu-icon-line--3'></div>
    </div>
  )
}
