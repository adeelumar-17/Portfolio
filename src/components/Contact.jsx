import { profile } from '../data/profile'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-elements">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>{profile.contact.email}</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h3>Phone</h3>
                                    <p>{profile.contact.phone}</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h3>Location</h3>
                                    <p>{profile.contact.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            {profile.social.linkedin && (
                                <a href={profile.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            )}
                            {profile.social.github && (
                                <a href={profile.social.github} className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
