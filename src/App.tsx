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
import CssGridExamplesPage from './pages/cssExamples/CssGridExamplesPage'
import FurnitureStorePage from './pages/furnitureStore/FurnitureStorePage'
import FSPlannerPage from './pages/fsPlanner/FSPlannerPage'
import Navbar from './components/nav/Navbar'

export default function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      {isHomePage && (
        <Navbar
          links={[
            <Link to='/'>Home</Link>,
            <Link to='/examples'>CSS Examples</Link>,
            <Link to='/fs-planner'>FS-Planner</Link>,
            <Link to='/grand-hotel'>Grand Hotel-Flexbox</Link>,
            <Link to='/furniture-store'>Furniture Store-Grid</Link>,
          ]}
        />
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
          <Route path='grid' element={<CssGridExamplesPage />} />
        </Route>

        <Route path='/fs-planner' element={<FSPlannerPage />} />
        <Route path='/grand-hotel' element={<GrandHotelPage />} />
        <Route path='/furniture-store' element={<FurnitureStorePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
