import './about.styles.scss'

const About = ({ id }) => {
  return (
    <section id={id} className="about-container">
      <div className="about-hero">
        <div className="about-text">
          <p className="eyebrow">About Tiffany</p>

          <h1>
            Bringing customer support experience into AI and technical environments.
          </h1>

          <p>
            With 7+ years of customer experience, I’ve supported global users
            (80–110 inquiries per day), consistently maintaining 97–98% QA quality
            in a high-volume English-language support environment.
          </p>

          <p>
            While my current role does not formally involve AI, I have been
            actively learning and experimenting with AI tools through personal
            projects. I’m AWS AI Practitioner certified and have hands-on
            experience using OpenAI API, React, and modern web technologies.
          </p>

          <p>
            I’m currently transitioning into Customer Success, Technical Support,
            Product Support, and AI-adjacent roles where I can combine user
            understanding with growing technical and AI knowledge.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="card">
          <h3>Customer Experience</h3>
          <p>
            7+ years supporting global users in English and Mandarin,
            handling high-volume inquiries with strong accuracy and empathy.
          </p>
        </div>

        <div className="card">
          <h3>AI & Tech</h3>
          <p>
            Actively learning AI tools such as OpenAI, Claude, and Gemini through
            personal projects and hands-on experimentation.
          </p>
        </div>

        <div className="card">
          <h3>Communication</h3>
          <p>
            Skilled at explaining complex concepts to non-technical users
            and improving user understanding.
          </p>
        </div>

        <div className="card">
          <h3>Efficiency</h3>
          <p>
            Improved workflow efficiency by ~15% while maintaining
            consistent 97–98% QA quality.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <div className="cta-header">
          <p className="cta-eyebrow">Open to opportunities</p>
          <h2>Customer-facing AI & Tech roles</h2>
        </div>

        <div className="cta-role-list">
          <span>Customer Success</span>
          <span>Technical Support</span>
          <span>Product Support</span>
          <span>AI Trainer</span>
          <span>AI Operations</span>
          <span>Solutions Consultant</span>
        </div>

        <p className="cta-note">
          Open to remote, hybrid, and international opportunities.
        </p>
      </div>
    </section>
  )
}

export default About