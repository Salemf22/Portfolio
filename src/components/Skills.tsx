'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cpu } from 'lucide-react';

export default function Skills() {
  const t = useTranslations('skills');

  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', level: 85, icon: '▲', color: 'from-gray-700 to-gray-900' },
      { name: 'TypeScript', level: 80, icon: '📘', color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨', color: 'from-cyan-400 to-teal-500' },
      { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-orange-400 to-red-500' },
      { name: 'Vue.js', level: 75, icon: '💚', color: 'from-green-400 to-green-600' },
      { name: 'Angular', level: 70, icon: '🅰️', color: 'from-red-500 to-red-700' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-500 to-green-700' },
      { name: 'Python', level: 80, icon: '🐍', color: 'from-blue-400 to-yellow-400' },
      { name: 'PostgreSQL', level: 75, icon: '🐘', color: 'from-blue-500 to-blue-700' },
      { name: 'MongoDB', level: 82, icon: '🍃', color: 'from-green-500 to-green-600' },
      { name: 'REST APIs', level: 88, icon: '🔌', color: 'from-purple-500 to-purple-700' },
      { name: 'GraphQL', level: 78, icon: '◈', color: 'from-pink-500 to-purple-600' },
      { name: 'Docker', level: 70, icon: '🐳', color: 'from-blue-400 to-blue-600' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📦', color: 'from-orange-500 to-red-600' },
      { name: 'AWS', level: 75, icon: '☁️', color: 'from-yellow-400 to-orange-500' },
      { name: 'Figma', level: 80, icon: '🎯', color: 'from-purple-500 to-pink-600' },
      { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-blue-700' },
      { name: 'Jest', level: 82, icon: '🃏', color: 'from-red-400 to-pink-500' },
      { name: 'Webpack', level: 75, icon: '📦', color: 'from-blue-400 to-blue-600' },
      { name: 'CI/CD', level: 78, icon: '🔄', color: 'from-green-500 to-teal-600' }
    ]
  };

  const categories = [
    {
      key: 'frontend',
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      key: 'backend',
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      key: 'tools',
      icon: Palette,
      title: 'Tools & Technologies',
      description: 'Modern development tools and deployment platforms',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            Comprehensive skill set spanning modern web technologies and development practices
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const skills = skillsData[category.key as keyof typeof skillsData];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-br ${category.bgColor} rounded-2xl p-6 mb-6 text-center card-shadow`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(category.key as any)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      {/* Skill Icon and Name */}
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                          <span className="text-white text-lg">{skill.icon}</span>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {skill.name}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {skill.level}% Proficiency
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 
                            }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(skill.level / 20)
                                  ? `bg-gradient-to-r ${skill.color}`
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          {skill.level >= 90 ? 'Expert' : 
                           skill.level >= 75 ? 'Advanced' : 
                           skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                <p className="text-sm text-gray-600">
                  Code splitting, lazy loading, and optimization techniques
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Database Design</h4>
                <p className="text-sm text-gray-600">
                  Schema design, indexing, and query optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Testing & QA</h4>
                <p className="text-sm text-gray-600">
                  Unit testing, integration testing, and TDD practices
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
