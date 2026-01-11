import { skillCategories } from '../data/skills'
import SkillCategory from './SkillCategory'

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <SkillCategory key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
