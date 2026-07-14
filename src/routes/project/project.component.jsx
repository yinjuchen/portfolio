import ProjectCard from '../../components/project-card/project-card.component'
import './project.styles.scss'

const Projects = () => {
  const projectData = [
    {
      name: 'Support Ticket Analysis & Triage',
      status: 'Case Study',
      imageUrl: null,
      icon: 'triage',
      projectLink: '/projects/support-ticket-analysis',
      sourceLink: null,
      tag: 'Support Operations Case Study',
      summary:
        'A self-initiated support operations case study using simulated customer tickets to demonstrate issue categorization, user intent analysis, triage logic, and documentation improvement.',
      tools: [
        'Customer Support',
        'Ticket Triage',
        'Product Support',
        'Documentation',
        'QA Thinking'
      ],
      highlights: [
        'Created sample support tickets based on realistic customer scenarios',
        'Categorized issues by user intent, urgency, and product area',
        'Identified repeated questions and possible root causes',
        'Proposed FAQ, macro, and escalation improvements'
      ],
      learned:
        'This project demonstrates how my text-based support experience can translate into structured issue diagnosis, product feedback, and support operations improvement.'
    },
    {
      name: 'AI Support Response Review',
      status: 'Case Study',
      imageUrl: null,
      icon: 'review',
      projectLink: '/projects/ai-support-response-review',
      sourceLink: null,
      tag: 'AI QA Case Study',
      summary:
        'A self-initiated case study reviewing sample AI-assisted support replies and writing clearer human follow-up responses when the reply is unclear, incomplete, risky, or not empathetic enough.',
      tools: [
        'AI Reply Review',
        'AI QA',
        'Customer Support',
        'Follow-up Writing',
        'Escalation Awareness',
        'Response QA'
      ],
      highlights: [
        'Reviewed AI-assisted support replies across common customer scenarios',
        'Identified unclear, incomplete, generic, or risky AI responses',
        'Wrote human follow-up replies to clarify, acknowledge, or escalate',
        'Defined simple review criteria for AI-assisted support conversations'
      ],
      learned:
        'This project shows how my text-based support experience can support AI QA work by reviewing AI-assisted support replies and improving the customer follow-up experience.'
    },
    {
      name: 'AI-Assisted Support Workflow Design',
      status: 'Case Study',
      imageUrl: null,
      icon: 'workflow',
      projectLink: '/projects/ai-assisted-support-workflow',
      sourceLink: null,
      tag: 'AI Support Operations Case Study',
      summary:
        'A self-initiated case study mapping how AI-assisted draft replies, human review checkpoints, escalation rules, and knowledge base updates can support safer customer service workflows.',
      tools: [
        'Support Workflow',
        'Human Review',
        'Escalation Rules',
        'AI-Assisted Support',
        'Knowledge Base'
      ],
      highlights: [
        'Mapped a simple AI-assisted support workflow from ticket intake to resolution',
        'Defined when AI draft replies can help and when human review is required',
        'Created escalation rules for billing, privacy, account access, and technical issues',
        'Added a knowledge base feedback loop for repeated customer questions'
      ],
      learned:
        'This project shows how I think about using AI as support assistance while keeping human judgment, escalation, and documentation quality in the workflow.'
    },
    {
      name: 'AI Tarot App',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/q3sCS5DC/tarot.jpg',
      projectLink: 'https://ai-tarot-app-jjey.vercel.app/',
      sourceLink: 'https://github.com/yinjuchen/ai-tarot-app',
      tag: 'AI Learning Project',
      summary:
        'A user-facing AI app exploring prompt design, OpenAI API integration, bilingual response design, and AI output refinement.',
      tools: ['React', 'OpenAI API', 'Prompt Design', 'JavaScript'],
      highlights: [
        'Designed structured prompts for consistent AI-generated responses',
        'Explored bilingual English/Chinese interaction patterns',
        'Practiced API integration, debugging, and response handling',
        'Refined AI output for clarity, tone, and user experience'
      ],
      learned:
        'This project helped me understand how prompt structure, response quality, and user-facing AI behavior affect the overall product experience.'
    },
    {
      name: 'Bookflow',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/PMvXnYy/bookflow.webp',
      projectLink: 'https://bookflow-fbcg.onrender.com/',
      sourceLink: 'https://github.com/yinjuchen/bookflow.git',
      tag: 'Backend Learning Project',
      summary:
        'A backend-focused project exploring API integration, authentication, and database-driven user experiences.',
      tools: ['Node.js', 'PostgreSQL', 'Google Books API', 'Authentication'],
      highlights: [
        'Built backend logic using Node.js and PostgreSQL',
        'Integrated Google Books API for external book data',
        'Implemented user authentication and data handling'
      ],
      learned:
        'This project demonstrates my learning in backend development, API integration, system flow, and handling user data.'
    },
    {
      name: 'Artsync',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/LYyWkJJ/artsync.webp',
      projectLink: 'https://artsync.netlify.app/',
      sourceLink: 'https://github.com/yinjuchen/artsync.git',
      tag: 'Frontend Learning Project',
      summary:
        'A frontend project focused on navigation flow, user interaction, and interface testing for a content-browsing experience.',
      tools: ['React', 'Firebase', 'React Router', 'Cypress'],
      highlights: [
        'Built a structured frontend experience using React',
        'Designed navigation flow for browsing art content',
        'Used testing tools to improve reliability'
      ],
      learned:
        'This project reflects my ability to structure a frontend project and think through how users navigate and interact with digital content.'
    },
    {
      name: 'SandWichology',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/fdKgbgs/sandwich.webp',
      projectLink: 'https://yinjuchen.github.io/sandwichology/',
      sourceLink: 'https://github.com/yinjuchen/sandwichology.git',
      tag: 'JavaScript Practice Project',
      summary:
        'A vanilla JavaScript project practicing DOM manipulation, state logic, and simple user interaction patterns.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Built interactive UI without a framework',
        'Practiced DOM manipulation and state logic',
        'Focused on simple, usable interface design'
      ],
      learned:
        'This project shows my foundation in JavaScript, UI interaction, and hands-on problem-solving.'
    }
  ]

  const caseStudies = projectData.filter(
    (project) => project.status === 'Case Study'
  )

  const learningProjects = projectData.filter(
    (project) => project.status !== 'Case Study'
  )

  return (
    <section className="projects">
      <div className="projects-header">
        <p className="eyebrow">Selected Work</p>

        <h2>
          Practical case studies in Technical Support, AI QA, and Support
          Operations.
        </h2>

        <p>
          These case studies show how I connect support experience with
          troubleshooting, AI response review, workflow thinking, and technical
          learning.
        </p>
      </div>

      <div className="work-section">
        <div className="work-section-header">
          <p className="eyebrow">Featured Case Studies</p>
          <h3>Support, AI QA, and workflow-focused case studies.</h3>
        </div>

        <div className="project-container">
          {caseStudies.map((data, index) => (
            <div
              className={`project-detail-container ${
                index === 0 ? 'featured' : ''
              }`}
              key={data.name}
            >
              <ProjectCard data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="work-section">
        <div className="work-section-header">
          <p className="eyebrow">Technical Learning Projects</p>
          <h3>
            Smaller projects showing technical learning in React, APIs, backend,
            and JavaScript.
          </h3>
        </div>

        <div className="project-container learning-projects">
          {learningProjects.map((data) => (
            <div className="project-detail-container" key={data.name}>
              <ProjectCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects