import { useState } from 'react'
import { Link } from 'react-router-dom'
import './project-card.styles.scss'

const CaseStudyIcon = ({ type }) => {
  if (type === 'review') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="10" y="14" width="44" height="30" rx="8" stroke="#171717" strokeWidth="3" />
        <path d="M20 46 L20 54 L30 46" stroke="#171717" strokeWidth="3" strokeLinejoin="round" />
        <path d="M20 25 L28 33 L44 21" stroke="#5f63ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'workflow') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="12" cy="32" r="6" stroke="#171717" strokeWidth="3" />
        <circle cx="32" cy="14" r="6" stroke="#171717" strokeWidth="3" />
        <circle cx="32" cy="50" r="6" stroke="#171717" strokeWidth="3" />
        <circle cx="52" cy="32" r="6" stroke="#5f63ff" strokeWidth="3" />
        <path d="M18 32 L26 32 M32 20 L32 26 M32 44 L32 38 M38 32 L46 32" stroke="#171717" strokeWidth="3" />
      </svg>
    )
  }

  // default: 'triage'
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M14 26 L14 46 Q14 50 18 50 L46 50 Q50 50 50 46 L50 26" stroke="#171717" strokeWidth="3" />
      <path d="M10 26 L54 26 L48 12 L16 12 Z" stroke="#171717" strokeWidth="3" strokeLinejoin="round" />
      <path d="M25 32 L30 38 L40 26" stroke="#5f63ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ProjectCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false)

  const hasImage = Boolean(data.imageUrl)
  const hasProjectLink = Boolean(data.projectLink)
  const hasSourceLink = Boolean(data.sourceLink)
  const isCaseStudy = data.status === 'Case Study'
  const tools = data.tools || []
  const highlights = data.highlights || []
  const hasExtraDetails = highlights.length > 0 || Boolean(data.learned)

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
              aria-label={`Open live demo for ${data.name}`}
            >
              <img src={data.imageUrl} alt={data.name} />
            </a>
          )}

          {hasProjectLink && isCaseStudy && (
            <Link
              to={data.projectLink}
              className="project-image-link"
              aria-label={`View case study for ${data.name}`}
            >
              <img src={data.imageUrl} alt={data.name} />
            </Link>
          )}

          {!hasProjectLink && <img src={data.imageUrl} alt={data.name} />}

          {data.status && <span className="status-badge">{data.status}</span>}
        </div>
      )}

      {!hasImage && isCaseStudy && (
        <div className="project-visual">
          {hasProjectLink ? (
            <Link
              to={data.projectLink}
              className="project-visual-link"
              aria-label={`View case study for ${data.name}`}
            >
              <CaseStudyIcon type={data.icon} />
            </Link>
          ) : (
            <CaseStudyIcon type={data.icon} />
          )}

          {data.status && <span className="status-badge">{data.status}</span>}
        </div>
      )}

      <div className="project-content">
        {!hasImage && !isCaseStudy && data.status && (
          <span className="status-badge inline-badge">{data.status}</span>
        )}

        {data.tag && <p className="project-tag">{data.tag}</p>}

        <h3 className="project-name">{data.name}</h3>

        {data.summary && <p className="project-summary">{data.summary}</p>}

        {tools.length > 0 && (
          <div className="tool-list">
            {tools.map((tool) => (
              <span className="tool" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        )}

        {/*
          Case studies keep the list view short — the full breakdown (highlights,
          what I learned) lives on the case study detail page behind "View Case Study".
          Learning projects have no detail page, so their extra detail is tucked
          behind a "Show details" toggle instead of always being visible.
        */}
        {!isCaseStudy && hasExtraDetails && (
          <>
            <button
              type="button"
              className="details-toggle"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
            >
              {expanded ? 'Hide details' : 'Show details'}
            </button>

            {expanded && (
              <>
                {highlights.length > 0 && (
                  <div className="project-section">
                    <h4>Key highlights</h4>

                    <ul>
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.learned && (
                  <div className="project-section">
                    <h4>What I learned</h4>
                    <p>{data.learned}</p>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {(hasProjectLink || hasSourceLink) && (
          <div className="project-link-container">
            {hasProjectLink && isCaseStudy && (
              <Link
                to={data.projectLink}
                className="project-link"
                aria-label={`View case study for ${data.name}`}
              >
                View Case Study
              </Link>
            )}

            {hasProjectLink && !isCaseStudy && (
              <a
                href={data.projectLink}
                className="project-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${data.name}`}
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
                aria-label={`View source code for ${data.name}`}
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
