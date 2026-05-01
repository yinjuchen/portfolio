import './about.styles.scss'

const About = ({ id }) => {
  return (
    <section id={id} className="about-container">
      <div className="about-hero">
        <div className="about-text">
          <p className="eyebrow">About Tiffany</p>

          <h1>
            Bringing customer support experience into technical and AI-adjacent work.
          </h1>

          <p>
            I bring 7+ years of experience in high-volume, customer-facing
            environments, where I diagnose user issues, navigate systems, and
            deliver clear solutions.
          </p>

          <p>
            My strength lies in problem-solving and communication — I can
            analyze issues, identify root causes, and explain complex situations
            in simple, user-friendly language.
          </p>

          <p>
            Alongside my professional experience, I am actively building AI and
            technical skills through hands-on projects, including API integration,
            prompt practice, and AI-powered applications.
          </p>

          <p>
            I am now transitioning into customer-facing technical roles where I
            can combine user understanding with growing expertise in AI, product
            thinking, and system workflows.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="card">
          <h3>Issue Diagnosis</h3>
          <p>
            Experienced in analyzing user-reported issues, identifying possible
            causes, and providing clear next steps.
          </p>
        </div>

        <div className="card">
          <h3>Communication</h3>
          <p>
            Skilled at translating complex processes into simple, user-friendly
            explanations in English and Mandarin.
          </p>
        </div>

        <div className="card">
          <h3>AI & Tech Learning</h3>
          <p>
            Actively learning OpenAI, Claude, Gemini, API workflows, and modern
            web technologies through personal projects.
          </p>
        </div>

        <div className="card">
          <h3>Support Quality</h3>
          <p>
            Handled high-volume support work while maintaining consistent
            97–98% QA quality and improving workflow efficiency.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <div className="cta-header">
          <p className="cta-eyebrow">Open to opportunities</p>
          <h2>Technical Support & Customer-facing Tech roles</h2>
        </div>

        <div className="cta-role-list">
          <span>Technical Support</span>
          <span>Product Support</span>
          <span>Customer Success</span>
          <span>AI Operations</span>
          <span>AI Support</span>
          <span>Solutions Support</span>
        </div>

        <p className="cta-note">
          Open to remote, hybrid, and international opportunities.
        </p>
      </div>
    </section>
  )
}

export default About