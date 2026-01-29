import { Link, Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import CssExamplesPage from './pages/cssExamples/CssExamplesPage'
import CssPositionExamplesPage from './pages/cssExamples/CssPositionExamplesPage'
import CssOverflowExamplesPage from './pages/cssExamples/CssOverFlowExamplesPage'
import CssBackgroundExamplesPage from './pages/cssExamples/CssBackgroundExamplesPage'
import CssTransitionAndAnimationExamplesPage from './pages/cssExamples/CssTransitionAndAnimationExamplesPage'
import CssFlexboxExamplesPage from './pages/cssExamples/CssFlexboxExamplesPage'
import GrandHotelPage from './pages/grandHotel/GrandHotelPage'

export default function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      {isHomePage && (
        <>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/examples'>CSS Examples</Link>
              </li>
              <li>
                <Link to='/grand-hotel'>
                  Grand Hotel Tutorial Using Flexbox
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
        </>
      )}

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/examples' element={<CssExamplesPage />}>
          <Route path='position' element={<CssPositionExamplesPage />} />
          <Route path='overflow' element={<CssOverflowExamplesPage />} />
          <Route path='background' element={<CssBackgroundExamplesPage />} />
          <Route
            path='transition-and-animation'
            element={<CssTransitionAndAnimationExamplesPage />}
          />
          <Route path='flexbox' element={<CssFlexboxExamplesPage />} />
        </Route>

        <Route path='/grand-hotel' element={<GrandHotelPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
