import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseStudyAccor from './pages/CaseStudyAccor'
import CVPage from './pages/CVPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study-accor" element={<CaseStudyAccor />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </>
  )
}

export default App
