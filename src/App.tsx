import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { ResponseModeSelector } from './components/ResponseModeSelector'
import { ResponseModeProvider } from './context/ResponseModeContext'
import { HomePage } from './pages/HomePage'
import { ResultsPage } from './pages/ResultsPage'
import { CharacterSitePage } from './pages/CharacterSitePage'
import { SunPage } from './pages/SunPage'
import { SunServicesPage } from './pages/SunServicesPage'

function App() {
  return (
    <BrowserRouter>
      <ResponseModeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character" element={<ResultsPage mode="character" />} />
          <Route path="/enskiy-vestnik" element={<CharacterSitePage />} />
          <Route path="/site/:slug" element={<CharacterSitePage />} />
          <Route path="/illness" element={<ResultsPage mode="illness" />} />
          <Route path="/sun" element={<SunPage />} />
          <Route path="/sun/services" element={<SunServicesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ResponseModeSelector />
      </ResponseModeProvider>
    </BrowserRouter>
  )
}

export default App
