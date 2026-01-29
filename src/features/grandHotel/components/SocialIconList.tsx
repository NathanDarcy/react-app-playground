import SocialIcon from './SocialIcon'
import type { IconListItem } from './Sidebar'

type SocialIconListProps = { icons: IconListItem[] }

export default function SocialIconList({ icons }: SocialIconListProps) {
  return (
    <ul className='hotel__social-icons-list'>
      {icons.map(({ id, icon }) => (
        <SocialIcon key={id}>{icon}</SocialIcon>
      ))}
    </ul>
  )
}
