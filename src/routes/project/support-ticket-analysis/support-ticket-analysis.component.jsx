import { Link } from 'react-router-dom'
import './support-ticket-analysis.styles.scss'

const SupportTicketAnalysis = () => {
  return (
    <main className="case-study-page">
      <div className="case-study-nav">
        <Link to="/projects" className="back-link">
          ← Back to Work
        </Link>
      </div>

      <section className="case-study-hero">
        <p className="eyebrow">Support Operations Case Study</p>

        <h1>Support Ticket Analysis & Triage</h1>

        <p className="case-study-summary">
          A self-initiated support operations case study using simulated
          customer tickets to demonstrate issue categorization, user intent
          analysis, triage logic, and documentation improvement.
        </p>
      </section>

      <section className="case-study-note">
        <p>
          This is a self-initiated case study using simulated support tickets
          inspired by common text-based customer support scenarios. No real
          customer, company, or confidential data was used.
        </p>
      </section>

      <section className="case-study-section quick-summary">
        <h2>Quick Summary</h2>

        <p>
          This case study demonstrates how I turn customer messages into
          structured support insights and practical next steps.
        </p>

        <div className="summary-grid">
          <article>
            <h3>What it demonstrates</h3>
            <ul>
              <li>Ticket categorization</li>
              <li>User intent analysis</li>
              <li>Triage logic</li>
              <li>Documentation and macro improvement</li>
            </ul>
          </article>

          <article>
            <h3>Relevant roles</h3>
            <ul>
              <li>Technical Support</li>
              <li>Product Support</li>
              <li>Support Operations</li>
              <li>AI Support Operations</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Overview</h2>

        <p>
          Support Ticket Analysis & Triage is a support operations case study
          designed to show how I approach customer issues in a structured,
          analytical, and product-aware way.
        </p>

        <p>
          The goal of this project was to review simulated support tickets,
          identify recurring user problems, classify issue types, define triage
          logic, and propose improvements through FAQ content, reply macros,
          and escalation rules.
        </p>

        <p>
          This project shows how my support experience can translate into issue
          triage, product support, and support operations work.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Mock Ticket Dataset</h2>

        <p>
          I created a small set of simulated support tickets based on common
          SaaS customer support scenarios.
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>User Message</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Suggested Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>T-001</td>
                <td>I can’t log in after resetting my password.</td>
                <td>Account Access</td>
                <td>High</td>
                <td>Send login troubleshooting macro</td>
              </tr>

              <tr>
                <td>T-002</td>
                <td>I was charged twice this month.</td>
                <td>Billing</td>
                <td>High</td>
                <td>Escalate to billing team</td>
              </tr>

              <tr>
                <td>T-003</td>
                <td>The export button does not work on Safari.</td>
                <td>Bug Report</td>
                <td>Medium</td>
                <td>Ask for browser, device, and steps to reproduce</td>
              </tr>

              <tr>
                <td>T-004</td>
                <td>How do I cancel my subscription?</td>
                <td>Subscription</td>
                <td>Medium</td>
                <td>Send cancellation guide</td>
              </tr>

              <tr>
                <td>T-005</td>
                <td>Can I delete all my account data?</td>
                <td>Data / Privacy</td>
                <td>High</td>
                <td>Escalate for privacy review</td>
              </tr>

              <tr>
                <td>T-006</td>
                <td>I don’t understand how to connect Google Calendar.</td>
                <td>Integration</td>
                <td>Medium</td>
                <td>Send setup guide and troubleshooting steps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Analysis Categories</h2>

        <p>
          I grouped the simulated tickets into support categories to make
          routing, reporting, and documentation improvement easier.
        </p>

        <div className="category-grid">
          <article>
            <h3>Account Access</h3>
            <p>
              Login, password reset, account recovery, or account setting
              issues.
            </p>
          </article>

          <article>
            <h3>Billing</h3>
            <p>
              Unexpected charges, refunds, invoices, payment errors, or
              subscription questions.
            </p>
          </article>

          <article>
            <h3>Product Usage</h3>
            <p>
              Questions about how to use a feature or complete a task inside
              the product.
            </p>
          </article>

          <article>
            <h3>Bug Report</h3>
            <p>
              Cases where a feature does not behave as expected and may require
              technical investigation.
            </p>
          </article>

          <article>
            <h3>Data / Privacy</h3>
            <p>
              Requests related to account deletion, personal data, or
              privacy-sensitive actions.
            </p>
          </article>

          <article>
            <h3>Integration</h3>
            <p>
              Issues related to connecting third-party tools or external
              services.
            </p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Triage Framework</h2>

        <p>
          I used three questions to guide the triage process and decide the next
          support action.
        </p>

        <div className="framework-grid">
          <article>
            <h3>1. Identify User Intent</h3>
            <p>
              Understand what the user is trying to do before deciding the next
              support action.
            </p>
          </article>

          <article>
            <h3>2. Check Urgency</h3>
            <p>
              Determine whether the user is blocked or whether the issue affects
              payment, access, data, or security.
            </p>
          </article>

          <article>
            <h3>3. Decide Ownership</h3>
            <p>
              Decide whether support can resolve the issue directly or whether
              it should be escalated.
            </p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Key Findings</h2>

        <div className="finding-list">
          <article>
            <h3>
              Login and account access issues need a clear troubleshooting path.
            </h3>
            <p>
              Recommendation: Create a reusable login troubleshooting macro and
              a clearer password reset FAQ.
            </p>
          </article>

          <article>
            <h3>Billing issues require careful tone and escalation rules.</h3>
            <p>
              Recommendation: Escalate duplicate charges, refund requests, and
              unclear account status cases to the billing team.
            </p>
          </article>

          <article>
            <h3>Some product usage questions are documentation gaps.</h3>
            <p>
              Recommendation: Create FAQ articles for repeated setup questions
              and common product actions.
            </p>
          </article>

          <article>
            <h3>Bug reports need better information collection.</h3>
            <p>
              Recommendation: Ask for browser, device, screenshots, steps to
              reproduce, expected behavior, and actual behavior.
            </p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Proposed Support Improvements</h2>

        <div className="recommendation-grid">
          <article>
            <h3>Create reusable support macros</h3>
            <ul>
              <li>Login troubleshooting macro</li>
              <li>Billing investigation macro</li>
              <li>Bug report information request macro</li>
              <li>Integration setup macro</li>
            </ul>
          </article>

          <article>
            <h3>Improve help center documentation</h3>
            <ul>
              <li>How to reset your password</li>
              <li>Why was I charged?</li>
              <li>How to cancel or update a subscription</li>
              <li>How to report a bug</li>
            </ul>
          </article>

          <article>
            <h3>Define escalation rules</h3>
            <ul>
              <li>Payment disputes</li>
              <li>Duplicate charges</li>
              <li>Data deletion or privacy requests</li>
              <li>Repeated technical failures</li>
            </ul>
          </article>

          <article>
            <h3>Add tags for pattern tracking</h3>
            <ul>
              <li>login_issue</li>
              <li>billing_question</li>
              <li>bug_report</li>
              <li>needs_escalation</li>
              <li>faq_candidate</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Sample Macro</h2>

        <div className="macro-box">
          <h3>Login Issue Macro</h3>

          <p>Hi there,</p>

          <p>
            Thanks for reaching out. I’m sorry you’re having trouble accessing
            your account.
          </p>

          <p>Please try the following steps:</p>

          <ol>
            <li>
              Make sure you are using the email address connected to your
              account.
            </li>
            <li>
              Try resetting your password using the “Forgot password” link.
            </li>
            <li>Clear your browser cache or try using a different browser.</li>
            <li>
              If you still cannot log in, please send us a screenshot of the
              error message.
            </li>
          </ol>

          <p>Once we have more details, we can help investigate further.</p>

          <p>Best,</p>
          <p>Support Team</p>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Outcome & What I Learned</h2>

        <p>
          This case study shows how customer messages can be turned into
          structured support insights and practical workflow improvements.
        </p>

        <p>
          I practiced turning unstructured customer messages into organized
          categories, identifying repeated support patterns, and designing
          improvements for documentation, macros, and escalation workflows.
        </p>

        <p>
          It also helped me clarify how my support background can transfer into
          Technical Support, Product Support, AI QA, and AI-assisted support
          operations.
        </p>

        <p>
          Because this was a self-initiated case study using a small simulated
          dataset, the next step would be to test the categories with more
          ticket examples and refine the macros based on repeated issue
          patterns.
        </p>
      </section>
    </main>
  )
}

export default SupportTicketAnalysis