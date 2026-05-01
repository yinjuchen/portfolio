import ProjectCard from '../../components/project-card/project-card.component'
import './project.styles.scss'

const Projects = () => {
  const projectData = [
    {
      name: 'AI Tarot App',
      status: 'In Progress',
      imageUrl: 'https://i.ibb.co/LYyWkJJ/artsync.webp',
      projectLink: null,
      sourceLink: null,
      tag: 'AI Learning Project',
      summary:
        'An AI-powered tarot reading app currently in development, built as a personal project to explore bilingual AI interactions using OpenAI API.',
      tools: ['React', 'OpenAI API', 'Prompt Design', 'JavaScript'],
      highlights: [
        'Designed prompts for personalized AI-generated responses',
        'Explored bilingual English/Chinese AI interactions',
        'Practiced API integration and AI output refinement'
      ],
      learned:
        'Shows how I am learning to design user-facing AI interactions and experiment with prompt design, API integration, and bilingual AI responses.'
    },
    {
      name: 'Artsync',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/LYyWkJJ/artsync.webp',
      projectLink: 'https://artsync.netlify.app/',
      sourceLink: 'https://github.com/yinjuchen/artsync.git',
      tag: 'Frontend Learning Project',
      summary:
        'A virtual art gallery built to practice frontend structure, navigation flow, and user-facing digital experiences.',
      tools: ['React', 'Firebase', 'React Router', 'Cypress'],
      highlights: [
        'Built a structured frontend experience using React',
        'Designed navigation flow for browsing art content',
        'Used testing tools to improve reliability'
      ],
      learned:
        'Reflects my ability to structure a frontend project and explore how users navigate and interact with digital content.'
    },
    {
      name: 'Bookflow',
      status: 'Code Only / Demo under maintenance',
      imageUrl: 'https://i.ibb.co/PMvXnYy/bookflow.webp',
      projectLink: null,
      sourceLink: 'https://github.com/yinjuchen/bookflow.git',
      tag: 'Backend Learning Project',
      summary:
        'A book recommendation platform built to explore backend logic, external API integration, authentication, and database handling.',
      tools: ['Node.js', 'PostgreSQL', 'Google Books API', 'Authentication'],
      highlights: [
        'Built backend logic with Node.js and PostgreSQL',
        'Integrated Google Books API for book data',
        'Implemented user authentication and data handling'
      ],
      learned:
        'Demonstrates my learning in backend development, API integration, and handling user data and authentication.'
    },
    {
      name: 'SandWichology',
      status: 'Live',
      imageUrl: 'https://i.ibb.co/fdKgbgs/sandwich.webp',
      projectLink: 'https://yinjuchen.github.io/sandwichology/',
      sourceLink: 'https://github.com/yinjuchen/sandwichology.git',
      tag: 'JavaScript Practice Project',
      summary:
        'A simple recipe app built with Vanilla JavaScript to practice interactive UI logic and frontend fundamentals.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Built interactive UI without a framework',
        'Practiced DOM manipulation and state logic',
        'Focused on simple, usable interface design'
      ],
      learned:
        'Shows my foundation in JavaScript, UI interaction, and problem-solving through hands-on practice.'
    }
  ]

  return (
    <section className="projects">
      <div className="projects-header">
        <p className="eyebrow">Selected Projects</p>

        <h2>
          Learning AI, APIs, and building practical product experiences.
        </h2>

        <p>
          These projects reflect how I’m exploring AI tools, technical skills,
          and product thinking through hands-on experimentation.
        </p>
      </div>

      <div className="project-container">
        {projectData.map((data, index) => (
          <div
            className={`project-detail-container ${
              index === 0 ? 'featured' : ''
            }`}
            key={index}
          >
            <ProjectCard data={data} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects