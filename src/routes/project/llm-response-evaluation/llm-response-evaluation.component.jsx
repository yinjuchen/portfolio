import { Link } from 'react-router-dom'
import './llm-response-evaluation.styles.scss'

const LlmResponseEvaluation = () => {
  return (
    <main className="case-study-page">
      <div className="case-study-nav">
        <Link to="/projects" className="back-link">
          ← Back to Work
        </Link>
      </div>

      <section className="case-study-hero">
        <p className="eyebrow">AI Support QA Case Study</p>

        <h1>AI Support Response Review</h1>

        <p className="case-study-summary">
          A self-initiated case study reviewing AI-assisted support replies and
          writing clearer human follow-up responses.
        </p>
      </section>

      <section className="case-study-note">
        <p>
          This is a self-initiated case study using simulated customer support
          scenarios and sample AI-assisted support replies. The goal is to
          demonstrate how I would review AI-assisted support responses from a
          customer support perspective. No real customer, company, or
          confidential data was used.
        </p>
      </section>

      <section className="case-study-section quick-summary">
        <h2>Quick Summary</h2>

        <p>
          This case study demonstrates how I review AI-assisted support replies
          for clarity, empathy, context awareness, accuracy, risk, and escalation
          needs.
        </p>

        <div className="summary-grid">
          <article>
            <h3>What it demonstrates</h3>
            <ul>
              <li>AI reply review</li>
              <li>Response quality evaluation</li>
              <li>Customer follow-up writing</li>
              <li>Escalation judgment</li>
            </ul>
          </article>

          <article>
            <h3>Relevant roles</h3>
            <ul>
              <li>AI QA</li>
              <li>LLM Evaluator</li>
              <li>Prompt Tester</li>
              <li>AI Support Operations</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Overview</h2>

        <p>
          AI Support Response Review is a self-initiated case study showing how
          I review AI-assisted support replies from a customer support
          perspective.
        </p>

        <p>
          The project focuses on identifying unclear, incomplete, generic, or
          risky replies, then writing better human follow-up responses that
          clarify the issue, acknowledge the customer, or escalate when needed.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Review Criteria</h2>

        <p>
          I used six practical criteria to review whether an AI-assisted support
          reply would be appropriate in a customer conversation.
        </p>

        <div className="criteria-grid">
          <article>
            <h3>Clarity</h3>
            <p>Does the reply clearly answer the customer’s actual question?</p>
          </article>

          <article>
            <h3>Empathy</h3>
            <p>
              Does the response acknowledge the customer’s frustration,
              confusion, or concern?
            </p>
          </article>

          <article>
            <h3>Context Awareness</h3>
            <p>
              Does the reply recognize what the customer has already tried or
              already explained?
            </p>
          </article>

          <article>
            <h3>Accuracy</h3>
            <p>
              Does the reply avoid unsupported claims, incorrect promises, or
              account-specific assumptions?
            </p>
          </article>

          <article>
            <h3>Next Step</h3>
            <p>Does the customer know what to do next after reading the reply?</p>
          </article>

          <article>
            <h3>Escalation Need</h3>
            <p>
              Should this issue be handled by a human support specialist or
              another team?
            </p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Sample AI Reply Review</h2>

        <p>
          I reviewed simulated AI-assisted support replies and identified what
          kind of human follow-up would be needed.
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>AI Reply Issue</th>
                <th>Customer Risk</th>
                <th>Human Follow-up Needed</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Password Reset</td>
                <td>
                  The AI repeated the same password reset steps even though the
                  customer already tried them.
                </td>
                <td>User frustration</td>
                <td>
                  Apologize for the repeated trouble and ask for the error
                  message, browser, and account email details.
                </td>
              </tr>

              <tr>
                <td>Duplicate Charge</td>
                <td>
                  The AI gave generic billing advice and did not acknowledge the
                  customer’s concern.
                </td>
                <td>Payment concern</td>
                <td>
                  Acknowledge the frustration and explain that billing issues
                  require account review.
                </td>
              </tr>

              <tr>
                <td>Data Deletion</td>
                <td>
                  The AI promised immediate data deletion without mentioning
                  identity verification or privacy review.
                </td>
                <td>Privacy risk</td>
                <td>
                  Correct the over-promise and route the request to the proper
                  privacy process.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Follow-up Response Examples</h2>

        <p>
          I wrote human follow-up responses to show how I would clarify,
          acknowledge, or escalate after an AI-assisted support reply did not
          fully resolve the customer’s issue.
        </p>

        <div className="response-example-list">
          <article>
            <p className="comparison-label">Scenario 1</p>
            <h3>Password reset issue</h3>

            <div className="response-block">
              <h4>Customer follow-up</h4>
              <p>
                I already tried resetting my password, but it still doesn’t
                work.
              </p>
            </div>

            <div className="response-block">
              <h4>AI Reply Issue</h4>
              <p>
                The reply repeated the password reset instruction without
                recognizing that the customer had already tried it.
              </p>
            </div>

            <div className="response-block">
              <h4>Human follow-up response</h4>
              <p>
                I’m sorry for the repeated trouble. Since you’ve already tried
                resetting your password, the next step is to check whether there
                is an error message, whether the correct email address is being
                used, and whether the issue happens on another browser. Could
                you send a screenshot of the error message so we can look into
                it further?
              </p>
            </div>
          </article>

          <article>
            <p className="comparison-label">Scenario 2</p>
            <h3>Duplicate charge concern</h3>

            <div className="response-block">
              <h4>Customer follow-up</h4>
              <p>I was charged twice. This is really frustrating.</p>
            </div>

            <div className="response-block">
              <h4>AI Reply Issue</h4>
              <p>
                The reply was too generic and did not acknowledge the customer’s
                frustration or explain that billing issues need account review.
              </p>
            </div>

            <div className="response-block">
              <h4>Human follow-up response</h4>
              <p>
                I’m sorry for the frustration. I understand why a duplicate
                charge would be concerning. Since billing issues require account
                review, I’d recommend escalating this to the billing team so
                they can check the payment history and confirm the next step.
              </p>
            </div>
          </article>

          <article>
            <p className="comparison-label">Scenario 3</p>
            <h3>Data deletion request</h3>

            <div className="response-block">
              <h4>Customer follow-up</h4>
              <p>Can you delete all my personal data now?</p>
            </div>

            <div className="response-block">
              <h4>AI Reply Issue</h4>
              <p>
                The reply promised immediate deletion, which may be inaccurate
                or unsafe without identity verification and privacy review.
              </p>
            </div>

            <div className="response-block">
              <h4>Human follow-up response</h4>
              <p>
                I’m sorry for the confusion. Data deletion requests may require
                identity verification and must follow the correct privacy
                process. I can help route this request to the appropriate team
                for review.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Key Patterns Found</h2>

        <div className="finding-list">
          <article>
            <h3>AI replies may miss customer context.</h3>
            <p>
              A response can sound polite but still fail to recognize what the
              customer already tried or explained.
            </p>
          </article>

          <article>
            <h3>Empathy matters when the customer is frustrated.</h3>
            <p>
              Billing, access, and repeated failure cases often need a human
              tone that acknowledges the customer’s concern before giving next
              steps.
            </p>
          </article>

          <article>
            <h3>Some AI replies need risk correction.</h3>
            <p>
              AI-assisted replies should avoid unsupported promises related to
              refunds, data deletion, account status, or privacy-sensitive
              actions.
            </p>
          </article>

          <article>
            <h3>Technical issues need better information collection.</h3>
            <p>
              Bug reports are more useful when the follow-up asks for browser,
              device, screenshots, steps to reproduce, expected behavior, and
              actual behavior.
            </p>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Human Review Guidelines</h2>

        <p>
          Based on the sample review, I created a simple checklist for when a
          human support specialist should step in after an AI-assisted reply.
        </p>

        <div className="recommendation-grid">
          <article>
            <h3>Clarify</h3>
            <ul>
              <li>The AI reply is too vague</li>
              <li>The customer still does not know what to do next</li>
              <li>The reply does not address the actual question</li>
            </ul>
          </article>

          <article>
            <h3>Apologize</h3>
            <ul>
              <li>The customer is frustrated</li>
              <li>The customer already tried the suggested step</li>
              <li>The issue has caused repeated inconvenience</li>
            </ul>
          </article>

          <article>
            <h3>Correct</h3>
            <ul>
              <li>The AI reply over-promises</li>
              <li>The reply includes unsupported policy claims</li>
              <li>The reply assumes account-specific information</li>
            </ul>
          </article>

          <article>
            <h3>Escalate</h3>
            <ul>
              <li>Billing or refund issues</li>
              <li>Data deletion or privacy requests</li>
              <li>Account security concerns</li>
              <li>Technical issues that need investigation</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Outcome & What I Learned</h2>

        <p>
          This case study helped me clarify how my text-based customer support
          experience can fit into AI-assisted support workflows.
        </p>

        <p>
          I practiced reviewing AI-assisted support replies from the customer’s
          perspective, identifying where the reply was unclear, incomplete, too
          generic, or risky, and writing human follow-up responses to improve
          the conversation.
        </p>

        <p>
          This project shows how I can support AI QA work by reviewing
          AI-assisted replies, handling customer follow-ups, correcting unclear
          responses, and knowing when a case should be escalated to a human or
          specialized team.
        </p>

        <p>
          Because this was a self-initiated case study using simulated
          scenarios, the next step would be to test the review criteria with
          more AI-assisted reply examples and refine the checklist based on
          repeated quality issues.
        </p>
      </section>
    </main>
  )
}

export default LlmResponseEvaluation