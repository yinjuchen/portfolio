import './home.styles.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <p className="eyebrow">
          Customer Experience · Technical Support · AI Learning
        </p>

        <h1>
          From Customer Support to AI-Enabled Technical Support.
        </h1>

        <p className="hero-text">
          I’m a text-based Customer Support Specialist with 7+ years of experience,
          now moving toward Technical Support, AI QA, and AI Support Operations.
        </p>
      </section>

      <section className="feature-card">
        <div className="card-content">
          <h2>
            Turning support experience into practical case studies
          </h2>

          <p>
            Explore how I apply customer support experience to issue diagnosis,
            AI-assisted reply review, workflow thinking, and technical learning.
          </p>

          <Link to="/projects" className="card-link">
            View Case Studies
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