function ProjectCard({ project }) {
    const getLinkIcon = (type) => {
        switch (type) {
            case 'github': return 'fab fa-github'
            case 'demo': return 'fas fa-external-link-alt'
            default: return 'fas fa-link'
        }
    }

    return (
        <div className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.badge && <div className="project-badge">{project.badge}</div>}

            <div className="project-header">
                <div className="project-icon">
                    <i className={project.icon}></i>
                </div>
                <h3>{project.title}</h3>
            </div>

            <div className="project-content">
                {project.problem && (
                    <p className="project-problem">
                        <strong>Problem:</strong> {project.problem}
                    </p>
                )}

                {project.solution && (
                    <p className="project-solution">
                        <strong>{project.problem ? 'Solution:' : ''}</strong> {project.solution}
                    </p>
                )}

                {project.architecture && (
                    <div className="project-architecture">
                        <strong>Architecture:</strong>
                        <ul>
                            {project.architecture.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.label}:</strong> {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.highlights && (
                    <div className="project-highlights">
                        <ul>
                            {project.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.decisions && (
                    <div className="project-decisions">
                        <strong>Key Decisions:</strong>
                        <ul>
                            {project.decisions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="project-tech">
                    {project.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={getLinkIcon(link.type)}></i> {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
