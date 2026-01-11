function SkillCategory({ category }) {
    return (
        <div className="skill-category">
            <div className="skill-category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
            </div>

            {category.subcategories.map((sub, index) => (
                <div className="skill-subcategory" key={index}>
                    <h4>{sub.title}</h4>
                    <div className="skill-tags">
                        {sub.skills.map((skill, skillIndex) => (
                            <span className="skill-tag" key={skillIndex}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillCategory
