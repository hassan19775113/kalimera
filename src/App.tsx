import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Brasserie from './pages/Brasserie'
import OligoMarkt from './pages/OligoMarkt'
import Raeumlichkeiten from './pages/Raeumlichkeiten'
import Weinforum from './pages/Weinforum'
import Contact from './pages/Contact'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import Bewertung from './pages/Bewertung'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/brasserie" element={<Brasserie />} />
          <Route path="/oligo-markt" element={<OligoMarkt />} />
          <Route path="/raeumlichkeiten" element={<Raeumlichkeiten />} />
          <Route path="/weinforum" element={<Weinforum />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/bewertung" element={<Bewertung />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
