import './footer.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodepen,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-icons" aria-label="Footer links">
          <a
            href="https://www.linkedin.com/in/tiffanychen13/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tiffany Chen on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/yinjuchen"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tiffany Chen on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://codepen.io/yinjuchen"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tiffany Chen on CodePen"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>

          <a
            href="mailto:tiffanyc1213@gmail.com"
            aria-label="Email Tiffany Chen"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <p className="copyright">© 2026 Tiffany Chen</p>
      </div>
    </footer>
  )
}

export default Footer