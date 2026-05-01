import './project-card.styles.scss'

const ProjectCard = ({ data }) => {
  return (
    <article className="project-card-container">
      <div className="project-image-wrapper">
        {data.projectLink ? (
          <a
            href={data.projectLink}
            className="project-image-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={data.imageUrl} alt={data.name} />
          </a>
        ) : (
          <img src={data.imageUrl} alt={data.name} />
        )}

        <span className="status-badge">{data.status}</span>
      </div>

      <div className="project-content">
        <p className="project-tag">{data.tag}</p>

        <h3 className="project-name">{data.name}</h3>

        <p className="project-summary">{data.summary}</p>

        <div className="tool-list">
          {data.tools.map((tool, index) => (
            <span className="tool" key={index}>
              {tool}
            </span>
          ))}
        </div>

        <div className="project-section">
          <h4>Key highlights</h4>
          <ul>
            {data.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h4>What I learned</h4>
          <p>{data.learned}</p>
        </div>

        <div className="project-link-container">
          {data.projectLink && (
            <a
              href={data.projectLink}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}

          {data.sourceLink && (
            <a
              href={data.sourceLink}
              className="source-link"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard