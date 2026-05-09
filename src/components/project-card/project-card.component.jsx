import { Link } from 'react-router-dom'
import './project-card.styles.scss'

const ProjectCard = ({ data }) => {
  const hasImage = Boolean(data.imageUrl)
  const hasProjectLink = Boolean(data.projectLink)
  const hasSourceLink = Boolean(data.sourceLink)
  const isCaseStudy = data.status === 'Case Study'

  return (
    <article
      className={`project-card-container ${isCaseStudy ? 'case-study-card' : ''}`}
    >
      {hasImage && (
        <div className="project-image-wrapper">
          {hasProjectLink && !isCaseStudy && (
            <a
              href={data.projectLink}
              className="project-image-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={data.imageUrl} alt={data.name} />
            </a>
          )}

          {hasProjectLink && isCaseStudy && (
            <Link to={data.projectLink} className="project-image-link">
              <img src={data.imageUrl} alt={data.name} />
            </Link>
          )}

          {!hasProjectLink && <img src={data.imageUrl} alt={data.name} />}

          {data.status && <span className="status-badge">{data.status}</span>}
        </div>
      )}

      <div className="project-content">
        {!hasImage && data.status && (
          <span className="status-badge inline-badge">{data.status}</span>
        )}

        <p className="project-tag">{data.tag}</p>

        <h3 className="project-name">{data.name}</h3>

        <p className="project-summary">{data.summary}</p>

        <div className="tool-list">
          {data.tools.map((tool) => (
            <span className="tool" key={tool}>
              {tool}
            </span>
          ))}
        </div>

        <div className="project-section">
          <h4>Key highlights</h4>

          <ul>
            {data.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h4>What I learned</h4>
          <p>{data.learned}</p>
        </div>

        {(hasProjectLink || hasSourceLink) && (
          <div className="project-link-container">
            {hasProjectLink && isCaseStudy && (
              <Link to={data.projectLink} className="project-link">
                View Case Study
              </Link>
            )}

            {hasProjectLink && !isCaseStudy && (
              <a
                href={data.projectLink}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}

            {hasSourceLink && (
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
        )}
      </div>
    </article>
  )
}

export default ProjectCard