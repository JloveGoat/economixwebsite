import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import imgUrl from '../imgUrl'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src={imgUrl('/images/economix-logo.png')} alt="EcoNomix logo" className="navbar__logo-img" loading="eager" decoding="async" />
          <span className="navbar__logo-text">Eco<strong>Nomix</strong></span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            About Us
          </NavLink>
          <NavLink to="/camps" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Camps
          </NavLink>
          <NavLink to="/ecofair" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            EcoPreneurship Fair
          </NavLink>
        </nav>

        <a
          href="https://forms.gle/c5mvmxXKPTtQj3dCA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
        >
          Sign up for Summer 2026
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' open' : ''}`}>
        <nav className="navbar__drawer-links">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
          <NavLink to="/camps" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Camps</NavLink>
          <NavLink to="/ecofair" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>EcoPreneurship Fair</NavLink>
          <a
            href="https://forms.gle/c5mvmxXKPTtQj3dCA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >Apply Now</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
