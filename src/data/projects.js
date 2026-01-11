/**
 * PROJECTS DATA
 * 
 * To add a new project:
 * 1. Add a new object to the appropriate category array
 * 2. Follow the structure below
 * 
 * Required fields: id, title, icon
 * Optional fields: featured, badge, problem, solution, architecture, highlights, decisions, tech, links
 */

export const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full Stack & DevOps' },
    { id: 'security', label: 'Networking & Security' },
    { id: 'ai', label: 'AI & Computer Vision' },
    { id: 'misc', label: 'Miscellaneous' },
]

export const projects = [
    // ============================================
    // FULL STACK & DEVOPS
    // ============================================
    {
        id: 'hpc-slurm-hex',
        category: 'fullstack',
        featured: true,
        badge: 'Featured · Final Year Project',
        title: 'HPC-SLURM-Hex',
        icon: 'fas fa-server',
        problem: 'SLURM HPC clusters require CLI expertise, creating a barrier for researchers and limiting adoption in academic environments.',
        solution: 'A modular web interface that overlays existing SLURM installations without reconfiguration, transforming CLI-based job management into an intuitive dashboard.',
        architecture: [
            { label: 'Master Node', desc: 'Node.js/Express backend with Redis for session management and job coordination' },
            { label: 'Worker Nodes', desc: 'Python Flask services for job execution and resource monitoring' },
            { label: 'Frontend', desc: 'React dashboard deployed via Docker with role-based access control' },
        ],
        decisions: [
            'Modular deployment allows scaling workers independently',
            'Redis enables horizontal scaling of master nodes',
            'Docker containerization ensures consistent deployment',
        ],
        tech: ['Node.js', 'React', 'Python', 'Redis', 'Docker', 'SLURM'],
        links: [
            { type: 'github', url: 'https://github.com/Questra-Digital/HPC-Slurm-Hex', label: 'View Code' },
        ],
    },
    {
        id: 'mydevops',
        category: 'fullstack',
        title: 'MyDevOps',
        icon: 'fas fa-rocket',
        problem: 'Setting up a production-ready Node.js deployment pipeline requires significant boilerplate and infrastructure knowledge.',
        solution: 'A DevOps starter kit that provides containerization, infrastructure automation, and CI/CD out of the box.',
        highlights: [
            'Docker containerization with multi-stage builds',
            'Ansible playbooks for automated server provisioning',
            'GitHub Actions workflows for testing and deployment',
            'Environment-based configuration management',
        ],
        tech: ['Docker', 'Ansible', 'GitHub Actions', 'Node.js'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/mydevops', label: 'View Code' },
        ],
    },

    // ============================================
    // NETWORKING & SECURITY
    // ============================================
    {
        id: 'nodeguard',
        category: 'security',
        featured: true,
        badge: 'Featured',
        title: 'NodeGuard VPN',
        icon: 'fas fa-lock',
        problem: 'Commercial VPNs are opaque and heavyweight. Understanding VPN internals requires building one from scratch.',
        solution: 'A lightweight, secure VPN implementation with TLS 1.3 encryption and TUN interface support.',
        architecture: [
            { label: 'TLS 1.3', desc: 'Transport encryption with perfect forward secrecy' },
            { label: 'Mutual Auth', desc: 'Certificate-based authentication (no pre-shared keys)' },
            { label: 'TUN Interface', desc: 'Kernel-level packet handling' },
            { label: 'NAT Config', desc: 'Automatic NAT configuration and IP assignment' },
        ],
        tech: ['Python', 'TLS 1.3', 'TUN/TAP', 'Cryptography', 'iptables'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/NodeGuard', label: 'View Code' },
        ],
    },
    {
        id: 'fortify',
        category: 'security',
        title: 'Fortify',
        icon: 'fas fa-shield-alt',
        problem: 'Security awareness and basic security tooling are often inaccessible to non-technical users.',
        solution: 'A web-based security suite providing practical tools and real-time security awareness.',
        highlights: [
            'Password strength analysis with entropy calculation',
            'File integrity verification (hash comparison)',
            'System, security, and network log monitoring',
            'Security tips and awareness content',
        ],
        tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/Fortify', label: 'View Code' },
            { type: 'demo', url: 'https://fortify-one.vercel.app', label: 'Live Demo' },
        ],
    },
    {
        id: 'chat-app',
        category: 'security',
        title: 'Secure Chat Application',
        icon: 'fas fa-comments',
        problem: 'Understanding network programming and secure communication requires building real-time systems from the ground up.',
        solution: 'A desktop chat application with socket-level implementation and security-first design.',
        highlights: [
            'Raw socket programming for real-time messaging',
            'Password hashing for credential security',
            'SQLite for persistent user and message storage',
            'File transfer capability over LAN',
        ],
        tech: ['C++', 'Qt Framework', 'Socket Programming', 'SQLite'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/Chat_App', label: 'View Code' },
        ],
    },

    // ============================================
    // AI & COMPUTER VISION
    // ============================================
    {
        id: 'deepfake-detection',
        category: 'ai',
        featured: true,
        badge: 'Featured',
        title: 'Deepfake Detection Pipeline',
        icon: 'fas fa-eye',
        problem: 'Deepfake detection requires robust preprocessing, multiple model approaches, and explainability for practical deployment.',
        solution: 'A complete ML pipeline from image preprocessing to model training to web deployment.',
        architecture: [
            { label: 'Module 1', desc: 'Image preprocessing, degradation simulation, and restoration' },
            { label: 'Module 2', desc: 'Classical ML baseline (HOG, LBP, color histograms + SVM/RF)' },
            { label: 'Module 3', desc: 'ResNet18 fine-tuning with Grad-CAM explainability' },
            { label: 'Web App', desc: 'Flask API with interactive parameter controls' },
        ],
        tech: ['Python', 'PyTorch', 'ResNet', 'Grad-CAM', 'Flask', 'OpenCV'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/Deepfake-Detection', label: 'View Code' },
        ],
    },
    {
        id: 'glaucoma-diagnosis',
        category: 'ai',
        title: 'Glaucoma Diagnosis',
        icon: 'fas fa-microscope',
        problem: 'Medical image analysis for glaucoma requires specialized enhancement techniques to highlight diagnostic features.',
        solution: 'Image enhancement pipeline optimized for retinal fundus images.',
        highlights: [
            'Specialized preprocessing for retinal images',
            'Enhancement techniques for optic disc visualization',
            'Feature extraction for diagnostic support',
        ],
        tech: ['Python', 'OpenCV', 'Medical Imaging'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/glaucoma-diagnosis', label: 'View Code' },
        ],
    },
    {
        id: 'urdu2roman',
        category: 'ai',
        title: 'Urdu to Roman Transliteration',
        icon: 'fas fa-language',
        solution: 'Script transliteration system converting Urdu text to Roman script representation.',
        tech: ['Python', 'NLP'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/urdu2roman', label: 'View Code' },
        ],
    },
    {
        id: 'spatial-filtering',
        category: 'ai',
        title: 'Spatial Filtering',
        icon: 'fas fa-image',
        solution: 'Implementation of spatial domain image filtering techniques for image enhancement and feature extraction.',
        tech: ['Python', 'OpenCV', 'Image Processing'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/spatial-filtering', label: 'View Code' },
        ],
    },
    {
        id: 'noise-removal',
        category: 'ai',
        title: 'Noise Removal',
        icon: 'fas fa-eraser',
        solution: 'Image denoising techniques implementation for cleaning and restoring degraded images.',
        tech: ['Python', 'OpenCV', 'Signal Processing'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/noise_removal', label: 'View Code' },
        ],
    },

    // ============================================
    // MISCELLANEOUS
    // ============================================
    {
        id: 'wordle',
        category: 'misc',
        title: 'Wordle Clone',
        icon: 'fas fa-gamepad',
        solution: 'Console-based implementation of the popular word puzzle game with customizable word length.',
        tech: ['C++'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/Wordle', label: 'View Code' },
        ],
    },
    {
        id: 'snake-game',
        category: 'misc',
        title: 'Snake Game (Assembly)',
        icon: 'fas fa-microchip',
        solution: 'Classic Snake game implemented in 8086 (x86-16) assembly language, demonstrating low-level programming and hardware interaction.',
        tech: ['x86 Assembly', '8086'],
        links: [
            { type: 'github', url: 'https://github.com/adeelumar-17/Snake-Game', label: 'View Code' },
        ],
    },
]
