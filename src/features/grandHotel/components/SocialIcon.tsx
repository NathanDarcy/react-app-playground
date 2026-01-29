import type { ReactNode } from 'react'

export default function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <li className='hotel__social-icons-item'>
      <a href='#' className='hotel__social-icons-link'>
        {children}
      </a>
    </li>
  )
}
