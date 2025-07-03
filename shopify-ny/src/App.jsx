import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FAQsPage from './pages/FAQsPage'
import PartnershipPage from './pages/PartnershipPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/partnership" element={<PartnershipPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
