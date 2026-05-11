import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Camps from './pages/Camps'
import EcoFair from './pages/EcoFair'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/ecofair" element={<EcoFair />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
