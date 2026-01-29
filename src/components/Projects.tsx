'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and personalized user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      category: 'Full Stack',
      duration: '3 months',
      teamSize: '4 developers',
      achievements: ['10K+ Daily Users', '99.9% Uptime', '2s Load Time']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management platform with real-time updates, drag-and-drop functionality, team collaboration tools, and advanced analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      category: 'SaaS',
      duration: '4 months',
      teamSize: '3 developers',
      achievements: ['500+ Teams', 'Real-time Sync', 'Mobile Responsive']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Advanced weather analytics platform with location-based forecasts, interactive maps, historical data visualization, and severe weather alerts.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Express', 'OpenWeather API', 'Chart.js', 'Mapbox'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Data Visualization',
      duration: '2 months',
      teamSize: '2 developers',
      achievements: ['1M+ API Calls', '50+ Cities', 'AI Predictions']
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for social media performance tracking with detailed reporting, sentiment analysis, and competitor insights.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Django', 'D3.js', 'TensorFlow'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Analytics',
      duration: '5 months',
      teamSize: '5 developers',
      achievements: ['100+ Brands', 'Real-time Data', 'ML Insights']
    },
    {
      id: 5,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI powered by machine learning for customer service automation with natural language processing capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'NLP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'AI/ML',
      duration: '6 months',
      teamSize: '3 developers',
      achievements: ['95% Accuracy', '24/7 Support', 'Multi-language']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations, optimized performance, and accessibility features.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      category: 'Frontend',
      duration: '1 month',
      teamSize: '1 developer',
      achievements: ['Lighthouse 100', 'A11y Compliant', 'SEO Optimized']
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, isFeatured = false }: { project: any; isFeatured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-xl card-shadow hover:scale-105 transition-all duration-300 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            isFeatured ? 'h-64' : 'h-48'
          }`}
        />
        
        {/* Overlay with category */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-2">
              {project.category}
            </span>
            <div className="flex gap-4 text-white text-sm">
              <span>📅 {project.duration}</span>
              <span>👥 {project.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className={`p-6 ${isFeatured ? 'lg:p-8' : ''}`}>
        <div className="mb-4">
          <h3 className={`font-bold text-gray-900 mb-2 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${isFeatured ? 'text-base' : 'text-sm'} line-clamp-3`}>
            {project.description}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, isFeatured ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isFeatured ? 5 : 3) && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{project.technologies.length - (isFeatured ? 5 : 3)} more
            </span>
          )}
        </div>

        {/* Achievements for featured projects */}
        {isFeatured && project.achievements && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.achievements.map((achievement: string) => (
                <div key={achievement} className="flex items-center gap-1 text-xs text-green-600">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors ${
              isFeatured ? 'text-base' : 'text-sm'
            }`}
          >
            <ExternalLink className={`w-4 h-4`} />
            {t('viewProject')}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors ${
              isFeatured ? 'text-base' : 'text-sm'
            }`}
          >
            <Github className={`w-4 h-4`} />
            {t('viewCode')}
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of my recent work showcasing expertise in modern web development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button className="px-6 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm transition-all duration-200">
              All Projects
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 font-medium transition-all duration-200">
              Featured
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 font-medium transition-all duration-200">
              Web Apps
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-900 font-medium transition-all duration-200">
              Mobile
            </button>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
