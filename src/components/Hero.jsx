import { profile } from '../data/profile'

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>{profile.title}</h1>
                    <h2 className="hero-subtitle">{profile.subtitle}</h2>
                    <p className="hero-tagline">{profile.tagline}</p>

                    <div className="pillars">
                        {profile.pillars.map((pillar, index) => (
                            <div className="pillar" key={index}>
                                <i className={pillar.icon}></i>
                                <span>{pillar.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary-btn">View Projects</a>
                        <a href="#contact" className="btn secondary-btn">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <pre><code>{`class SystemsEngineer {
  stack: ["fullstack", "security", "ai"]
  focus: "reliability"
  
  build() {
    return "production-ready"
  }
}`}</code></pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
