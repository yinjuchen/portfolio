import './about.styles.scss'

const About = ({ id }) => {
  return (
    <section id={id} className="about-container">
      <div className="about-hero">
        <div className="about-text">
          <p className="eyebrow">About Tiffany</p>

          <h1>
            Bringing customer support experience into Technical Support, AI QA, and Support Automation.
          </h1>

          <p>
            I’m a text-based Customer Support Specialist with 7+ years of experience helping global users solve problems through clear, structured written communication.
          </p>

          <p>
            In my current role, I handle high-volume customer inquiries, diagnose user issues, navigate internal systems, and provide actionable solutions while maintaining 97–98% quality and improving efficiency by 15%.
          </p>

          <p>
            I’m now transitioning toward Technical Support, Product Support, AI QA, and AI Support Operations roles, where I can combine my support experience with growing skills in AI tools, troubleshooting, documentation, and technical problem-solving.
          </p>

          <p>
            My current focus is building hands-on projects around prompt testing, AI response evaluation, knowledge base improvement, support workflow optimization, and customer-facing product support.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="card">
          <h3>Issue Diagnosis</h3>
          <p>
            Experienced in analyzing user-reported issues, identifying patterns, asking clarifying questions, and providing clear next steps.
          </p>
        </div>

        <div className="card">
          <h3>Support Communication</h3>
          <p>
            Skilled at translating complex processes into simple, user-friendly
            explanations in English and Mandarin.
          </p>
        </div>

        <div className="card">
          <h3>AI QA & Tech Learning</h3>
          <p>
            Practicing AI response evaluation, prompt refinement, hallucination checking, and support scenario testing.
          </p>
        </div>

        <div className="card">
          <h3>Support Quality & Operation</h3>
          <p>
            Experienced in high-volume written support with a focus on consistency, accuracy, QA quality, and workflow improvement.
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
          <span>AI QA</span>
          <span>Prompt Tester</span>
          <span>Support Automation</span>
          <span>AI Support Operations</span>
        </div>

        <p className="cta-note">
          Open to remote, hybrid, and international opportunities.
        </p>
      </div>
    </section>
  )
}

export default About