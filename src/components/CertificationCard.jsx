function CertificationCard({ certification }) {
    return (
        <div className="cert-card" data-issuer={certification.issuer} data-year={certification.year}>
            <div className="cert-icon">
                {certification.icon ? (
                    <i className={certification.icon}></i>
                ) : (
                    <img src={certification.logo} alt={certification.issuer} className="cisco-logo" />
                )}
            </div>
            <h3>{certification.title}</h3>
            <p>{certification.description}</p>
            {certification.verifyUrl && (
                <a href={certification.verifyUrl} className="verify-btn" target="_blank" rel="noopener noreferrer">
                    Verify <i className="fas fa-external-link-alt"></i>
                </a>
            )}
        </div>
    )
}

export default CertificationCard
