import { useState } from 'react'
import { profile } from '../data/profile'

function Header({ scrolled }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth',
            })
        }
        setMobileMenuOpen(false)
    }

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <div className="logo">
                    <h1>MAU</h1>
                </div>
                <nav>
                    <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
