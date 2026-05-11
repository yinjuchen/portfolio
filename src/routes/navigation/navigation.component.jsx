import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as Logo } from '../../assests/logo.svg'
import Footer from '../../components/footer/footer.component'
import './navigation.styles.scss'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/" onClick={closeMenu}>
          <Logo className="logo" />
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        <div className={`nav-links-container ${isMenuOpen ? 'show' : ''}`}>
          <Link className="nav-link" to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link className="nav-link" to="/projects" onClick={closeMenu}>
            Work
          </Link>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  )
}

export default Navigation