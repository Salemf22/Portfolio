export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'web' | 'mobile' | 'desktop' | 'design' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  teamSize?: number;
  client?: string;
  tags: string[];
  repository?: {
    url: string;
    stars?: number;
    forks?: number;
    language: string;
  };
  performance?: {
    lighthouse?: number;
    pagespeed?: number;
    seo?: number;
    accessibility?: number;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
  level: number; // 1-100
  years: number;
  icon: string;
  description: string;
  projects: string[]; // Project IDs where this skill was used
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  achievements: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
  credentialId?: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1-5
  avatar: string;
  linkedin?: string;
  date: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  twitter: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  languages: string[];
  resumeUrl: string;
  contact: ContactInfo;
}

// Portfolio Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    tagline: "Building exceptional digital experiences with modern technologies",
    bio: "Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. I love creating scalable, user-friendly applications that solve real-world problems.",
    avatar: "/images/avatar.jpg",
    location: "Your City, Country",
    languages: ["English", "Arabic", "Spanish"],
    resumeUrl: "/resume.pdf",
    contact: {
      email: "your.email@example.com",
      phone: "+1 234 567 8900",
      location: "Your City, Country",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      twitter: "https://twitter.com/yourusername",
      website: "https://yourwebsite.com"
    }
  } as PersonalInfo,

  // Projects
  projects: [
    {
      id: "ecommerce-platform",
      title: "Advanced E-Commerce Platform",
      description: "Full-featured e-commerce solution with real-time inventory management, secure payment processing, and personalized user experience.",
      fullDescription: "A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory management, secure payment processing with Stripe integration, personalized user recommendations, advanced search and filtering, admin dashboard with analytics, and responsive design optimized for all devices.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Redis", "Tailwind CSS", "TypeScript"],
      features: ["Real-time inventory", "Secure payments", "User recommendations", "Advanced search", "Admin dashboard", "Analytics"],
      challenges: ["Implementing real-time updates", "Payment security", "Scalability", "Performance optimization"],
      outcomes: ["99.9% uptime", "2s load time", "10K+ daily users", "50% conversion increase"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "web",
      status: "completed",
      startDate: "2023-01",
      endDate: "2023-04",
      teamSize: 4,
      client: "Tech Startup Inc.",
      tags: ["e-commerce", "nextjs", "react", "nodejs", "mongodb"],
      repository: {
        url: "https://github.com/yourusername/ecommerce-platform",
        stars: 245,
        forks: 32,
        language: "TypeScript"
      },
      performance: {
        lighthouse: 95,
        pagespeed: 92,
        seo: 88,
        accessibility: 94
      }
    },
    {
      id: "task-management-app",
      title: "Collaborative Task Management System",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team collaboration tools.",
      fullDescription: "A comprehensive task management system featuring real-time collaboration with Socket.io, drag-and-drop functionality for task organization, team workspaces and project management, advanced analytics and reporting, time tracking and productivity metrics, and seamless integration with popular tools like Slack and GitHub.",
      image: "/images/projects/taskmanager.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS", "Framer Motion", "Prisma"],
      features: ["Real-time collaboration", "Drag & drop", "Team workspaces", "Analytics", "Time tracking"],
      challenges: ["Real-time synchronization", "Complex state management", "Performance with large datasets"],
      outcomes: ["500+ teams using", "30% productivity increase", "Real-time sync reliability"],
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      category: "web",
      status: "completed",
      startDate: "2023-05",
      endDate: "2023-08",
      teamSize: 3,
      client: "Productivity Solutions Co.",
      tags: ["task-management", "collaboration", "nextjs", "socket.io"],
      repository: {
        url: "https://github.com/yourusername/task-management",
        stars: 189,
        forks: 28,
        language: "TypeScript"
      },
      performance: {
        lighthouse: 93,
        pagespeed: 90,
        seo: 85,
        accessibility: 92
      }
    },
    {
      id: "weather-dashboard",
      title: "Advanced Weather Analytics Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
      fullDescription: "An advanced weather analytics platform featuring location-based weather forecasts with OpenWeather API integration, interactive maps with Mapbox, historical data visualization with Chart.js, severe weather alerts and notifications, customizable weather widgets, and mobile-responsive design with PWA capabilities.",
      image: "/images/projects/weather.jpg",
      technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js", "Mapbox", "PWA"],
      features: ["Location forecasts", "Historical data", "Interactive maps", "Weather alerts"],
      challenges: ["API rate limiting", "Data visualization complexity", "Mobile performance"],
      outcomes: ["1M+ API calls/month", "50+ cities covered", "95% accuracy rate"],
      liveUrl: "https://weather-dashboard.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      category: "web",
      status: "completed",
      startDate: "2023-03",
      endDate: "2023-06",
      teamSize: 2,
      client: "Weather Analytics Inc.",
      tags: ["weather", "vuejs", "data-visualization", "api"],
      repository: {
        url: "https://github.com/yourusername/weather-dashboard",
        stars: 156,
        forks: 22,
        language: "JavaScript"
      },
      performance: {
        lighthouse: 90,
        pagespeed: 88,
        seo: 82,
        accessibility: 90
      }
    },
    {
      id: "social-media-analytics",
      title: "Social Media Analytics Platform",
      description: "Comprehensive analytics platform for social media performance tracking with detailed reporting and sentiment analysis.",
      fullDescription: "A powerful social media analytics platform featuring comprehensive performance tracking across multiple platforms, sentiment analysis with NLP integration, detailed reporting and data visualization, competitor analysis and benchmarking, automated report generation, and API integration for third-party tools.",
      image: "/images/projects/analytics.jpg",
      technologies: ["React", "Python", "Django", "D3.js", "TensorFlow", "PostgreSQL", "Redis"],
      features: ["Performance tracking", "Sentiment analysis", "Competitor analysis", "Automated reports"],
      challenges: ["Data processing at scale", "NLP accuracy", "Real-time analytics"],
      outcomes: ["100+ brands tracked", "Real-time data processing", "85% sentiment accuracy"],
      liveUrl: "https://social-analytics.vercel.app",
      githubUrl: "https://github.com/yourusername/social-analytics",
      category: "web",
      status: "completed",
      startDate: "2023-07",
      endDate: "2023-10",
      teamSize: 5,
      client: "Marketing Agency",
      tags: ["analytics", "social-media", "python", "machine-learning"],
      repository: {
        url: "https://github.com/yourusername/social-analytics",
        stars: 312,
        forks: 45,
        language: "Python"
      },
      performance: {
        lighthouse: 88,
        pagespeed: 85,
        seo: 80,
        accessibility: 87
      }
    },
    {
      id: "ai-chatbot",
      title: "Intelligent Customer Service Chatbot",
      description: "AI-powered conversational chatbot for customer service automation with natural language processing capabilities.",
      fullDescription: "An intelligent customer service chatbot powered by machine learning featuring natural language processing with TensorFlow, multi-language support (English, Spanish, Arabic), integration with popular CRM systems, 24/7 availability, sentiment analysis for customer feedback, and continuous learning from interactions.",
      image: "/images/projects/chatbot.jpg",
      technologies: ["Python", "TensorFlow", "Flask", "React", "NLP", "PostgreSQL"],
      features: ["NLP capabilities", "Multi-language", "CRM integration", "24/7 availability"],
      challenges: ["NLP accuracy", "Context management", "Integration complexity"],
      outcomes: ["95% query resolution", "30% support cost reduction", "Multi-language support"],
      liveUrl: "https://chatbot-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      category: "web",
      status: "completed",
      startDate: "2023-09",
      endDate: "2024-01",
      teamSize: 3,
      client: "Customer Service Solutions",
      tags: ["ai", "chatbot", "nlp", "tensorflow"],
      repository: {
        url: "https://github.com/yourusername/ai-chatbot",
        stars: 278,
        forks: 38,
        language: "Python"
      },
      performance: {
        lighthouse: 91,
        pagespeed: 89,
        seo: 83,
        accessibility: 89
      }
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations, optimized performance, and accessibility features.",
      fullDescription: "A modern personal portfolio website built with Next.js 15, featuring smooth animations with Framer Motion, optimized performance with Lighthouse scores, full accessibility compliance with WCAG 2.1, dark/light mode with system preference detection, responsive design for all devices, and SEO optimization with structured data.",
      image: "/images/projects/portfolio.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl"],
      features: ["Smooth animations", "Dark mode", "Responsive design", "SEO optimized"],
      challenges: ["Animation performance", "Accessibility compliance", "SEO optimization"],
      outcomes: ["Lighthouse 100", "A11y compliant", "SEO optimized"],
      liveUrl: "https://portfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      category: "web",
      status: "completed",
      startDate: "2024-01",
      endDate: "2024-02",
      teamSize: 1,
      client: "Personal Project",
      tags: ["portfolio", "nextjs", "typescript", "tailwind"],
      repository: {
        url: "https://github.com/yourusername/portfolio",
        stars: 45,
        forks: 8,
        language: "TypeScript"
      },
      performance: {
        lighthouse: 100,
        pagespeed: 98,
        seo: 95,
        accessibility: 100
      }
    }
  ] as Project[],

  // Experience
  experience: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "2022-06",
      current: true,
      description: "Leading development teams in architecting and implementing scalable web applications. Mentoring junior developers and driving technical innovation. Working closely with product teams to deliver high-quality solutions.",
      achievements: [
        "Led team of 8 developers in major platform redesign",
        "Improved application performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 5 junior developers to senior level"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis"],
      type: "full-time"
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Digital Solutions Agency",
      location: "New York, NY",
      startDate: "2020-03",
      endDate: "2022-05",
      current: false,
      description: "Developed and maintained multiple client projects ranging from small business websites to enterprise applications. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Delivered 20+ successful projects",
        "Increased client retention by 25%",
        "Reduced page load times by 50%",
        "Implemented automated testing reducing bugs by 40%"
      ],
      technologies: ["Vue.js", "React", "Node.js", "MongoDB", "Express", "GraphQL"],
      type: "full-time"
    },
    {
      id: "3",
      title: "Frontend Developer Intern",
      company: "Startup Hub",
      location: "Austin, TX",
      startDate: "2019-06",
      endDate: "2020-02",
      current: false,
      description: "Assisted in developing responsive web applications using modern frontend frameworks. Gained hands-on experience with React, Vue.js, and modern CSS techniques.",
      achievements: [
        "Contributed to 3 major client projects",
        "Learned best practices for code organization",
        "Participated in code reviews and pair programming"
      ],
      technologies: ["React", "Vue.js", "JavaScript", "CSS", "HTML", "Git"],
      type: "internship"
    }
  ] as Experience[],

  // Skills
  skills: [
    // Frontend
    {
      id: "react",
      name: "React",
      category: "frontend",
      level: 95,
      years: 5,
      icon: "⚛️",
      description: "Expert in React hooks, context, and performance optimization",
      projects: ["ecommerce-platform", "task-management-app", "portfolio-website"]
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      level: 90,
      years: 4,
      icon: "▲",
      description: "Advanced Next.js with SSR, SSG, and API routes",
      projects: ["portfolio-website", "task-management-app"]
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      level: 85,
      years: 4,
      icon: "📘",
      description: "Strong typing skills and type-safe development",
      projects: ["ecommerce-platform", "task-management-app", "portfolio-website"]
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      level: 90,
      years: 4,
      icon: "🎨",
      description: "Expert in utility-first CSS and responsive design",
      projects: ["portfolio-website", "task-management-app", "portfolio-website"]
    },
    {
      id: "vue",
      name: "Vue.js",
      category: "frontend",
      level: 75,
      years: 3,
      icon: "💚",
      description: "Proficient in Vue 3 and Composition API",
      projects: ["weather-dashboard"]
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      level: 70,
      years: 2,
      icon: "🅰️",
      description: "Experience with Angular 12+ and RxJS",
      projects: []
    },
    // Backend
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      level: 90,
      years: 5,
      icon: "🟢",
      description: "Expert in Node.js and ecosystem",
      projects: ["ecommerce-platform", "task-management-app"]
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      level: 80,
      years: 4,
      icon: "🐍",
      description: "Proficient in Python for data processing and ML",
      projects: ["social-media-analytics", "ai-chatbot"]
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      level: 85,
      years: 4,
      icon: "🐘",
      description: "Expert in PostgreSQL design and optimization",
      projects: ["task-management-app"]
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      level: 82,
      years: 3,
      icon: "🍃",
      description: "Proficient in MongoDB and aggregation pipelines",
      projects: ["ecommerce-platform"]
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "database",
      level: 75,
      years: 2,
      icon: "🗄️",
      description: "Experience with MySQL and relational database design",
      projects: []
    },
    // DevOps & Tools
    {
      id: "git",
      name: "Git",
      category: "devops",
      level: 95,
      years: 5,
      icon: "📦",
      description: "Expert in Git workflows and version control",
      projects: ["ecommerce-platform", "task-management-app", "portfolio-website"]
    },
    {
      id: "docker",
      name: "Docker",
      category: "devops",
      level: 70,
      years: 3,
      icon: "🐳",
      description: "Proficient in containerization and deployment",
      projects: ["ecommerce-platform"]
    },
    {
      id: "aws",
      name: "AWS",
      category: "devops",
      level: 75,
      years: 3,
      icon: "☁️",
      description: "Experience with EC2, S3, Lambda, and RDS",
      projects: ["ecommerce-platform", "task-management-app"]
    },
    {
      id: "figma",
      name: "Figma",
      category: "design",
      level: 80,
      years: 4,
      icon: "🎯",
      description: "Expert in UI/UX design and prototyping",
      projects: ["portfolio-website", "task-management-app"]
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      category: "frontend",
      level: 85,
      years: 3,
      icon: "🎬",
      description: "Expert in animations and micro-interactions",
      projects: ["portfolio-website"]
    }
  ] as Skill[],

  // Education
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Your City, Country",
      startDate: "2018-09",
      endDate: "2022-05",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 semesters",
        "Best Capstone Project Award",
        "Computer Science Tutor for 2 years"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    }
  ] as Education[],

  // Certifications
  certifications: [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-03",
      url: "https://aws.amazon.com/certification/",
      skills: ["AWS", "Cloud Architecture", "DevOps"]
    },
    {
      id: "2",
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2022-11",
      url: "https://cloud.google.com/certification/",
      skills: ["Google Cloud", "Cloud Development", "DevOps"]
    },
    {
      id: "3",
      name: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2022-08",
      url: "https://www.mongodb.com/certification/",
      skills: ["MongoDB", "NoSQL", "Database Design"]
    }
  ] as Certification[],

  // Testimonials
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Startup Inc.",
      content: "Exceptional developer who delivered our e-commerce platform ahead of schedule and exceeded all expectations. The quality of code and attention to detail is outstanding.",
      rating: 5,
      avatar: "/images/testimonials/sarah.jpg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      date: "2023-04",
      featured: true
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Productivity Solutions Co.",
      content: "Great communication skills and technical expertise. Always delivers high-quality work on time and is proactive in suggesting improvements.",
      rating: 5,
      avatar: "/images/testimonials/michael.jpg",
      linkedin: "https://linkedin.com/in/michaelchen",
      date: "2023-08",
      featured: true
    },
    {
      id: "3",
      name: "Emily Davis",
      role: "Design Lead",
      company: "Marketing Agency",
      content: "Excellent collaboration between design and development. Always implements designs with pixel-perfect precision and suggests valuable UX improvements.",
      rating: 5,
      avatar: "/images/testimonials/emily.jpg",
      linkedin: "https://linkedin.com/in/emilydavis",
      date: "2023-02",
      featured: false
    }
  ] as Testimonial[]
};

export default portfolioData;
