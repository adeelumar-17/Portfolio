import { useState } from 'react'
import { projects, projectCategories } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="project-tabs">
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
