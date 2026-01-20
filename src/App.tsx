import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import CssExamplesPage from './pages/cssExamples/CssExamplesPage'
import CssPositionExamplesPage from './pages/cssExamples/CssPositionExamplesPage'
import CssOverflowExamplesPage from './pages/cssExamples/CssOverFlowExamplesPage'
import CssBackgroundExamplesPage from './pages/cssExamples/CssBackgroundExamplesPage'

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/examples">CSS Examples</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/examples" element={<CssExamplesPage />}>
          <Route path="position" element={<CssPositionExamplesPage />} />
          <Route path="overflow" element={<CssOverflowExamplesPage />} />
          <Route path="background" element={<CssBackgroundExamplesPage />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
