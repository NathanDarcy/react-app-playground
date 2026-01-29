import type { ReactNode } from 'react'

export default function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <li className='sidebar__social-icons-item'>
      <a href='#' className='sidebar__social-icons-link'>
        {children}
      </a>
    </li>
  )
}
