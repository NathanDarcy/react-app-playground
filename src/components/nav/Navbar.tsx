import './navbar.css'

type NavbarProps = {
  links?: React.ReactNode[]
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className='Navbar'>
      <div className='Navbar__brand'>My Company</div>

      {links && links.length > 0 && (
        <ul className='Navbar__links'>
          {links.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      )}
    </nav>
  )
}
