import { Link } from 'react-router-dom'
import './ai-assisted-support-workflow.styles.scss'

const AiAssistedSupportWorkflow = () => {
  return (
    <main className="case-study-page">
      <div className="case-study-nav">
        <Link to="/projects" className="back-link">
          ← Back to Work
        </Link>
      </div>

      <section className="case-study-hero">
        <p className="eyebrow">AI Support Operations Case Study</p>

        <h1>AI-Assisted Support Workflow Design</h1>

        <p className="case-study-summary">
          A self-initiated case study mapping how AI-assisted draft replies,
          human review checkpoints, escalation rules, and knowledge base updates
          can support safer customer service workflows.
        </p>
      </section>

      <section className="case-study-note">
        <p>
          This is a self-initiated workflow design case study using simulated
          support scenarios. It does not represent a real company workflow or
          production AI system. The goal is to demonstrate how I think about
          AI-assisted support, human review, escalation, and documentation
          loops.
        </p>
      </section>

      <section className="case-study-section quick-summary">
        <h2>Quick Summary</h2>

        <p>
          This case study demonstrates how I think about using AI as a support
          assistant while keeping human review, escalation, and documentation
          quality in the workflow.
        </p>

        <div className="summary-grid">
          <article>
            <h3>What it demonstrates</h3>
            <ul>
              <li>AI-assisted support workflow mapping</li>
              <li>Human review checkpoints</li>
              <li>Escalation rules</li>
              <li>Knowledge base feedback loop</li>
            </ul>
          </article>

          <article>
            <h3>Relevant roles</h3>
            <ul>
              <li>AI Support Operations</li>
              <li>Support Automation</li>
              <li>Technical Support</li>
              <li>Product Support</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Overview</h2>

        <p>
          AI-Assisted Support Workflow Design is a self-initiated case study
          exploring how AI can support customer service without replacing human
          judgment.
        </p>

        <p>
          The project maps a simple workflow where AI helps draft replies for
          common support questions, while human review, escalation rules, and
          documentation updates remain part of the process.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Workflow Goal</h2>

        <p>
          The goal was not to design a fully automated support system. Instead,
          I wanted to show how AI could support repeated or low-risk questions
          while sensitive cases remain human-reviewed.
        </p>

        <div className="goal-grid">
          <article>
            <h3>Use AI for support assistance</h3>
            <p>AI can draft responses for repeated or low-risk questions.</p>
          </article>

          <article>
            <h3>Keep humans in control</h3>
            <p>Human support reviews AI-assisted replies before sending.</p>
          </article>

          <article>
            <h3>Escalate sensitive cases</h3>
            <p>Billing, privacy, account access, and technical issues need rules.</p>
          </article>

          <article>
            <h3>Improve documentation</h3>
            <p>Repeated questions can become FAQ, macro, or help center updates.</p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Current Manual Support Flow</h2>

        <p>
          In a manual support workflow, support agents review each incoming
          message, identify the issue, write a response, decide whether to
          escalate, and update documentation when needed.
        </p>

        <div className="workflow-row">
          <article>
            <span>01</span>
            <h3>Ticket Intake</h3>
            <p>A customer submits a question or reports a problem.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Manual Review</h3>
            <p>A support agent reads the message and identifies the issue.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Reply or Escalate</h3>
            <p>The agent replies directly or sends the case to another team.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Documentation Gap</h3>
            <p>Repeated issues may reveal missing FAQ or macro content.</p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>AI-Assisted Support Flow</h2>

        <p>
          In the AI-assisted version, AI helps draft a possible reply, but the
          human support specialist still reviews the content, checks risk, edits
          the message, and decides whether to send or escalate.
        </p>

        <div className="workflow-map">
          <article>
            <span>01</span>
            <h3>Ticket Intake</h3>
            <p>Customer submits a support request.</p>
          </article>

          <div className="workflow-arrow">→</div>

          <article>
            <span>02</span>
            <h3>Issue Categorization</h3>
            <p>Ticket is grouped by topic, urgency, and risk.</p>
          </article>

          <div className="workflow-arrow">→</div>

          <article>
            <span>03</span>
            <h3>AI Draft Reply</h3>
            <p>AI drafts a possible response.</p>
          </article>

          <div className="workflow-arrow">→</div>

          <article>
            <span>04</span>
            <h3>Human Review</h3>
            <p>Support reviews clarity, tone, accuracy, and risk.</p>
          </article>

          <div className="workflow-arrow">→</div>

          <article>
            <span>05</span>
            <h3>Send or Escalate</h3>
            <p>Human sends the edited reply or escalates the case.</p>
          </article>

          <div className="workflow-arrow">→</div>

          <article>
            <span>06</span>
            <h3>Update Knowledge Base</h3>
            <p>Repeated questions become support content updates.</p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Human Review Checkpoints</h2>

        <p>
          I defined simple checkpoints to decide whether an AI-assisted reply is
          safe and useful enough for a human support specialist to edit and send.
        </p>

        <div className="checkpoint-grid">
          <article>
            <h3>Clarity Check</h3>
            <p>Does the reply answer the customer’s actual question?</p>
          </article>

          <article>
            <h3>Tone Check</h3>
            <p>Does the message sound polite, calm, and appropriate?</p>
          </article>

          <article>
            <h3>Accuracy Check</h3>
            <p>Does the reply avoid unsupported claims or promises?</p>
          </article>

          <article>
            <h3>Context Check</h3>
            <p>Does the reply recognize what the customer already explained?</p>
          </article>

          <article>
            <h3>Risk Check</h3>
            <p>Does the issue involve billing, privacy, security, or bugs?</p>
          </article>

          <article>
            <h3>Next Step Check</h3>
            <p>Does the customer know what to do next?</p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Escalation Rules</h2>

        <p>
          Some support issues should not be handled by an AI draft alone. These
          cases should be reviewed by a human or routed to the appropriate team.
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Issue Type</th>
                <th>Why It Needs Review</th>
                <th>Recommended Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Billing / Refund</td>
                <td>
                  Payment issues require account review and should not include
                  unsupported refund promises.
                </td>
                <td>Escalate to billing or account team.</td>
              </tr>

              <tr>
                <td>Data / Privacy</td>
                <td>
                  Data deletion or privacy requests may require verification and
                  policy-specific handling.
                </td>
                <td>Route to privacy review process.</td>
              </tr>

              <tr>
                <td>Account Access</td>
                <td>
                  Login or account recovery issues may involve security or
                  identity verification.
                </td>
                <td>Provide basic troubleshooting, then escalate if unresolved.</td>
              </tr>

              <tr>
                <td>Bug Report</td>
                <td>
                  Technical issues require details before support or engineering
                  can investigate.
                </td>
                <td>
                  Ask for browser, device, screenshots, and reproduction steps.
                </td>
              </tr>

              <tr>
                <td>Angry or Confused Customer</td>
                <td>
                  The customer may need empathy, clarification, or human
                  reassurance beyond a generic AI reply.
                </td>
                <td>Human support should review and rewrite the response.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Knowledge Base Feedback Loop</h2>

        <p>
          AI-assisted support should not only answer individual tickets. It can
          also help reveal repeated customer questions that should become better
          documentation.
        </p>

        <div className="feedback-loop">
          <article>
            <span>01</span>
            <h3>Repeated Question</h3>
            <p>Multiple customers ask the same question or report confusion.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Tag the Pattern</h3>
            <p>Support tags the issue as a FAQ or macro candidate.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Update Support Content</h3>
            <p>The team updates help center articles, macros, or internal notes.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Improve Future Replies</h3>
            <p>Better documentation makes future replies clearer.</p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Outcome & What I Learned</h2>

        <p>
          This case study helped me think through how AI can support customer
          service without removing the need for human judgment.
        </p>

        <p>
          I practiced mapping an AI-assisted support workflow, defining human
          review checkpoints, identifying escalation rules, and connecting
          repeated customer questions back to documentation improvements.
        </p>

        <p>
          This project shows how my customer support experience, AI tools
          learning, and workflow thinking can support AI-assisted customer
          service in a practical and responsible way.
        </p>

        <p>
          Because this was a self-initiated case study using simulated
          scenarios, the next step would be to test the workflow with more
          support examples and refine the escalation rules based on repeated
          issue patterns.
        </p>
      </section>
    </main>
  )
}

export default AiAssistedSupportWorkflow