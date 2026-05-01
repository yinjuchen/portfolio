import './home.styles.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <p className="eyebrow">AI-Literate Customer Experience Professional</p>

        <h1>
          Moving from customer support into AI-adjacent work.
        </h1>

        <p className="hero-text">
          I bring 7+ years of global customer support experience and am actively
          building AI and technical fluency through certifications, hands-on
          projects, and modern web tools.
        </p>
      </section>

      <section className="feature-card">
        <div className="card-content">
          <h2>Building toward AI fluency</h2>

          <p>
            Exploring AI tools, technical workflows, and customer-facing product
            roles through self-directed learning and personal projects.
          </p>

          <Link to="/about" className="card-link">
            Learn more
          </Link>
        </div>

        <div className="card-visual">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </main>
  )
}

export default Home