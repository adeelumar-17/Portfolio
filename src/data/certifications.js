/**
 * CERTIFICATIONS DATA
 * 
 * To add a new certification:
 * 1. Add a new object to the certifications array
 * 2. Follow the structure below
 * 
 * Fields:
 * - id: unique identifier
 * - title: certification name
 * - issuer: issuing organization
 * - description: brief description
 * - year: year obtained
 * - icon: FontAwesome icon class OR null if using custom logo
 * - logo: path to custom logo image (optional, used if icon is null)
 * - verifyUrl: verification link (optional)
 */

export const certifications = [
    {
        id: 'azure-cloud',
        title: 'Introduction to Microsoft Azure Cloud Services',
        issuer: 'microsoft',
        description: 'Cloud infrastructure, services, and deployment models in Microsoft Azure.',
        year: 2023,
        icon: 'fab fa-microsoft',
        verifyUrl: '#',
    },
    {
        id: 'cisco-analyst',
        title: 'Cisco Junior Cyber Security Analyst',
        issuer: 'cisco',
        description: 'Security monitoring, incident response, and vulnerability management.',
        year: 2023,
        icon: null,
        logo: '/assets/cisco-logo.png',
        verifyUrl: '#',
    },
    {
        id: 'cisco-ethical-hacker',
        title: 'Cisco Ethical Hacker',
        issuer: 'cisco',
        description: 'Penetration testing, vulnerability assessment, and ethical hacking methodologies.',
        year: 2023,
        icon: null,
        logo: '/assets/cisco-logo.png',
        verifyUrl: '#',
    },

    // ============================================
    // ADDITIONAL CERTIFICATIONS
    // ============================================
    {
        id: 'fortinet-network-security',
        title: 'Fortinet Network Security',
        issuer: 'fortinet',
        description: 'Network security fundamentals, network administration, and cybersecurity best practices using Fortinet solutions.',
        year: 2024,
        icon: 'fas fa-shield-alt',
        verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/SJSRYP1PUTYW',
    },
    {
        id: 'csharp-microsoft',
        title: 'Foundational C# with Microsoft',
        issuer: 'microsoft',
        description: 'Core C# programming concepts, object-oriented principles, and .NET fundamentals certified by Microsoft.',
        year: 2024,
        icon: 'fab fa-microsoft',
        verifyUrl: 'https://www.freecodecamp.org/certification/fcc22eeb458-904a-4ff3-9146-5291855407a8/foundational-c-sharp-with-microsoft',
    },
]
