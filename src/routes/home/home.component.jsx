import './home.styles.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <p className="eyebrow">Customer Experience · Technical Support · AI Learning</p>

        <h1>
          Customer Support Specialist Moving into Technical Support, AI QA, and AI Support Operations.
        </h1>

        <p className="hero-text">
          7+ years in high-volume text-based support, with strengths in issue diagnosis, structured written communication, support quality, and AI-assisted workflow learning.
        </p>
      </section>

      <section className="feature-card">
        <div className="card-content">
          <h2>From support experience to technical problem-solving</h2>

          <p>
            Exploring how customer support, troubleshooting, product knowledge,
            and AI tools can come together in customer-facing technical roles.
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