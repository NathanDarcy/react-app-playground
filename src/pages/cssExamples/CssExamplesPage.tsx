import { Link, Outlet } from 'react-router'

export default function CssExamplesPage() {
  return (
    <div>
      <h1>CSS Examples</h1>

      <nav>
        <ul>
          <li>
            <Link to='position'>Position Examples</Link>
          </li>
          <li>
            <Link to='overflow'>Overflow Examples</Link>
          </li>
          <li>
            <Link to='background'>Background Examples</Link>
          </li>
          <li>
            <Link to='transition-and-animation'>
              Transition and Animation Examples
            </Link>
          </li>
          <li>
            <Link to='flexbox'>Flexbox Examples</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
