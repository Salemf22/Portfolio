'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { User, Briefcase, Users, Award } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const timeline = [
    {
      year: '2019',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript fundamentals',
      type: 'education'
    },
    {
      year: '2020',
      title: 'Frontend Developer Intern',
      description: 'Worked on React projects and gained industry experience',
      type: 'work'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      description: 'Expanded skills to include Node.js, databases, and cloud services',
      type: 'work'
    },
    {
      year: '2022',
      title: 'Senior Developer',
      description: 'Leading development teams and architecting scalable solutions',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Technical Lead',
      description: 'Mentoring junior developers and driving technical innovation',
      type: 'work'
    }
  ];

  const achievements = [
    {
      icon: User,
      value: '5+',
      label: t('experience'),
      description: 'Years of professional experience'
    },
    {
      icon: Briefcase,
      value: '50+',
      label: t('projects'),
      description: 'Successfully delivered projects'
    },
    {
      icon: Users,
      value: '30+',
      label: t('clients'),
      description: 'Satisfied clients worldwide'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Awards',
      description: 'Industry recognitions'
    }
  ];

  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Leadership', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Communication', level: 90 },
    { name: 'Innovation', level: 88 }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl card-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('description')}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-xl card-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond Code</h3>
              <p className="text-gray-700 mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Open Source', 'Technical Writing', 'Mentoring', 'UI/UX Design', 'Cloud Architecture'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image and Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/api/placeholder/500/600"
                    alt="Professional Profile"
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Career Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === 'work' 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-r from-green-500 to-green-600'
                      }`}>
                        <span className="text-white font-bold text-sm">
                          {item.type === 'work' ? '💼' : '🎓'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                        <span className="text-gray-400">•</span>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl card-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
