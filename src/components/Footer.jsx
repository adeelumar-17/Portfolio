import { profile } from '../data/profile'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="container">
                <p>&copy; {currentYear} {profile.name}. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
