# Portfolio Website (React)

A component-based React portfolio built with Vite.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillCategory.jsx
│   │   ├── Certifications.jsx
│   │   ├── CertificationCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/                # Data files (edit these to update content)
│   │   ├── projects.js      # Add/edit projects here
│   │   ├── skills.js        # Add/edit skills here
│   │   ├── certifications.js # Add/edit certifications here
│   │   └── profile.js       # Edit personal info here
│   ├── styles/
│   │   └── index.css        # All styles
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/              # Static assets (logos, images)
├── index.html
├── package.json
└── vite.config.js
```

## Adding Content

### Add a New Project

Edit `src/data/projects.js`:

```javascript
{
  id: 'my-new-project',
  category: 'fullstack',  // Options: fullstack, security, ai, misc
  featured: true,         // Optional: show featured badge
  badge: 'Featured',      // Optional: badge text
  title: 'Project Name',
  icon: 'fas fa-rocket',  // FontAwesome icon class
  problem: 'Description of the problem...',
  solution: 'How you solved it...',
  architecture: [         // Optional
    { label: 'Component', desc: 'Description' },
  ],
  highlights: [           // Optional, alternative to architecture
    'Feature 1',
    'Feature 2',
  ],
  tech: ['React', 'Node.js', 'Docker'],
  links: [
    { type: 'github', url: 'https://github.com/...', label: 'View Code' },
    { type: 'demo', url: 'https://...', label: 'Live Demo' },
  ],
}
```

### Add a New Certification

Edit `src/data/certifications.js`:

```javascript
{
  id: 'new-cert',
  title: 'Certification Name',
  issuer: 'provider',
  description: 'Description of the certification.',
  year: 2024,
  icon: 'fab fa-aws',           // FontAwesome icon, OR
  logo: '/assets/custom.png',   // Custom logo (if icon is null)
  verifyUrl: 'https://...',     // Verification link
}
```

### Add a New Skill

Edit `src/data/skills.js`:

```javascript
// Add to existing category's subcategory
subcategories: [
  {
    title: 'New Subcategory',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
]

// Or add entirely new category
{
  id: 'new-category',
  title: 'New Category Name',
  icon: 'fas fa-cog',
  subcategories: [
    { title: 'Subcategory', skills: ['Skill 1', 'Skill 2'] },
  ],
}
```

### Update Personal Information

Edit `src/data/profile.js`:

- Name, title, subtitle, tagline
- Pillars (What I Build section)
- About section paragraphs
- Contact information
- Social links

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Technologies

- React 18
- Vite 5
- Vanilla CSS
- FontAwesome Icons
- Inter Font (Google Fonts)
