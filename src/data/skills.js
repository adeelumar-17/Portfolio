/**
 * SKILLS DATA
 * 
 * To add a new skill:
 * 1. Find the appropriate category
 * 2. Add the skill to the correct subcategory array
 * 
 * To add a new subcategory:
 * 1. Add a new object to the subcategories array with title and skills
 * 
 * To add a new category:
 * 1. Add a new object following the structure below
 */

export const skillCategories = [
    {
        id: 'fullstack',
        title: 'Full Stack Engineering',
        icon: 'fas fa-layer-group',
        subcategories: [
            {
                title: 'Frontend',
                skills: ['React', 'JavaScript', 'HTML/CSS', 'Qt'],
            },
            {
                title: 'Backend',
                skills: ['Node.js', 'Express', 'Python', 'Flask', 'C++', 'C#'],
            },
            {
                title: 'DevOps & Infrastructure',
                skills: ['Docker', 'Ansible', 'GitHub Actions', 'Redis', 'CI/CD'],
            },
        ],
    },
    {
        id: 'security',
        title: 'Networking & Security',
        icon: 'fas fa-shield-alt',
        subcategories: [
            {
                title: 'Networking',
                skills: ['TCP/IP', 'Socket Programming', 'TUN/TAP', 'VPN', 'NAT', 'Network Administration'],
            },
            {
                title: 'Security',
                skills: ['TLS 1.3', 'Certificate Auth', 'Penetration Testing', 'Threat Modeling'],
            },
            {
                title: 'Tools',
                skills: ['Nmap', 'Wireshark', 'Hashcat', 'Burp Suite', 'Metasploit'],
            },
        ],
    },
    {
        id: 'ai',
        title: 'AI & Computer Vision',
        icon: 'fas fa-brain',
        subcategories: [
            {
                title: 'Computer Vision',
                skills: ['Image Processing', 'Spatial Filtering', 'Feature Extraction', 'OpenCV'],
            },
            {
                title: 'ML/DL',
                skills: ['PyTorch', 'ResNet', 'SVM', 'Random Forest', 'HOG/LBP'],
            },
            {
                title: 'Applied',
                skills: ['Medical Imaging', 'Deepfake Detection', 'Grad-CAM', 'Model Explainability'],
            },
        ],
    },
]
