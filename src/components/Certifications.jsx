import { certifications } from '../data/certifications'
import CertificationCard from './CertificationCard'

function Certifications() {
    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-container">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
