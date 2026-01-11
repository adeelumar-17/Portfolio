import { profile } from '../data/profile'

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">{profile.about.lead}</p>
                        {profile.about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
