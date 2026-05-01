import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/logo.svg';
import './navigation.styles.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/footer.component';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        <div className={`nav-links-container ${isMenuOpen ? 'show' : ''}`}>
          <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link className="nav-link" to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;