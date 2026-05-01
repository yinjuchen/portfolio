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
        'An AI-powered tarot reading app built as a personal project to practice OpenAI API integration, prompt design, and user-facing AI responses.',
      tools: ['React', 'OpenAI API', 'Prompt Design', 'JavaScript'],
      highlights: [
        'Designed structured prompts for personalized AI-generated responses',
        'Explored bilingual English/Chinese AI interaction patterns',
        'Practiced API integration, debugging, and AI output refinement'
      ],
      learned:
        'This project shows how I am building AI fluency through hands-on experimentation with prompts, API workflows, and user-facing AI responses.'
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
        'This project reflects my ability to structure a frontend project and think through how users navigate and interact with digital content.'
    },
    {
      name: 'Bookflow',
      status: 'Code Only / Demo under maintenance',
      imageUrl: 'https://i.ibb.co/PMvXnYy/bookflow.webp',
      projectLink: null,
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
        'This project shows my foundation in JavaScript, UI interaction, and hands-on problem-solving.'
    }
  ]

  return (
    <section className="projects">
      <div className="projects-header">
        <p className="eyebrow">Selected Projects</p>

        <h2>
          Building technical confidence through AI, APIs, and practical projects.
        </h2>

        <p>
          These projects reflect how I’m strengthening my technical foundation
          through self-directed learning, debugging, API practice, and product thinking.
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