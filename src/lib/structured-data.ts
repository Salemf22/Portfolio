import portfolioData from '@/data/portfolio';

export const generatePersonStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: portfolioData.personal.name,
  jobTitle: portfolioData.personal.title,
  description: portfolioData.personal.bio,
  url: portfolioData.personal.contact.website,
  image: portfolioData.personal.avatar,
  email: portfolioData.personal.contact.email,
  telephone: portfolioData.personal.contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: portfolioData.personal.location
  },
  knowsAbout: portfolioData.skills.map(skill => skill.name),
  knowsLanguage: portfolioData.personal.languages,
  sameAs: [
    portfolioData.personal.contact.linkedin,
    portfolioData.personal.contact.github,
    portfolioData.personal.contact.twitter
  ].filter(Boolean),
  worksFor: portfolioData.experience.map(exp => ({
    '@type': 'Organization',
    name: exp.company,
    address: {
      '@type': 'PostalAddress',
      addressLocality: exp.location
    }
  })),
  alumniOf: portfolioData.education.map(edu => ({
    '@type': 'EducationalOrganization',
    name: edu.institution,
    address: {
      '@type': 'PostalAddress',
      addressLocality: edu.location
    }
  }))
});

export const generateWebsiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${portfolioData.personal.name} Portfolio`,
  url: portfolioData.personal.contact.website || 'https://portfolio.vercel.app',
  description: portfolioData.personal.bio,
  author: {
    '@type': 'Person',
    name: portfolioData.personal.name,
    url: portfolioData.personal.contact.website
  },
  publisher: {
    '@type': 'Person',
    name: portfolioData.personal.name
  },
  inLanguage: ['en', 'ar'],
  isAccessibleForFree: true,
  isFamilyFriendly: true,
  audience: {
    '@type': 'Audience',
    audienceType: 'developers,recruiters,clients'
  }
});

export const generateProjectStructuredData = (project: typeof portfolioData.projects[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.fullDescription,
  image: project.image,
  url: project.liveUrl,
  dateCreated: project.startDate,
  dateModified: project.endDate || project.startDate,
  author: {
    '@type': 'Person',
    name: portfolioData.personal.name,
    url: portfolioData.personal.contact.website
  },
  publisher: {
    '@type': 'Person',
    name: portfolioData.personal.name
  },
  programmingLanguage: project.technologies,
  keywords: project.tags.join(', '),
  about: project.tags.map((tag: string) => ({
    '@type': 'Thing',
    name: tag
  })),
  offers: project.client ? {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'CreativeWork',
      name: project.title
    },
    seller: {
      '@type': 'Organization',
      name: project.client
    }
  } : undefined,
  potentialAction: {
    '@type': 'ViewAction',
    target: project.liveUrl,
    name: `View ${project.title}`
  }
});

export const generateBlogPostStructuredData = (post: any) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.coverImage,
  author: {
    '@type': 'Person',
    name: post.author.name,
    url: post.author.linkedin
  },
  publisher: {
    '@type': 'Organization',
    name: portfolioData.personal.name,
    logo: portfolioData.personal.avatar
  },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `/blog/${post.slug}`
  },
  keywords: post.tags.join(', '),
  wordCount: post.content.split(' ').length,
  timeRequired: `PT${post.readTime}M`,
  about: post.tags.map((tag: string) => ({
    '@type': 'Thing',
    name: tag
  }))
});

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb: any, index: number) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
});

export const generateOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: portfolioData.personal.name,
  url: portfolioData.personal.contact.website,
  logo: portfolioData.personal.avatar,
  description: portfolioData.personal.bio,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: portfolioData.personal.contact.phone,
    contactType: 'professional',
    availableLanguage: portfolioData.personal.languages
  },
  sameAs: [
    portfolioData.personal.contact.linkedin,
    portfolioData.personal.contact.github,
    portfolioData.personal.contact.twitter
  ].filter(Boolean),
  knowsAbout: portfolioData.skills.map((skill: any) => skill.name)
});

export const generateServiceStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  description: 'Professional web development services including frontend, backend, and full-stack development',
  provider: {
    '@type': 'Person',
    name: portfolioData.personal.name,
    url: portfolioData.personal.contact.website
  },
  serviceType: 'Web Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frontend Development',
          description: 'React, Vue.js, Angular development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backend Development',
          description: 'Node.js, Python, API development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Stack Development',
          description: 'End-to-end web application development'
        }
      }
    ]
  }
});
