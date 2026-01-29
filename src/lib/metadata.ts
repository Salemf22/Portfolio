import portfolioData, { PersonalInfo } from '@/data/portfolio';

export const siteMetadata = {
  title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
  description: portfolioData.personal.bio,
  keywords: [
    'full stack developer',
    'web developer',
    'react developer',
    'next.js developer',
    'typescript developer',
    'node.js developer',
    'portfolio website',
    portfolioData.personal.title.toLowerCase(),
    ...portfolioData.personal.languages.map((lang: string) => lang.toLowerCase()),
    ...portfolioData.skills.map((skill: any) => skill.name.toLowerCase()),
    ...portfolioData.projects.map((project: any) => project.title.toLowerCase()),
    ...portfolioData.projects.flatMap((project: any) => project.technologies)
  ].filter(Boolean),
  authors: [
    {
      name: portfolioData.personal.name,
      url: portfolioData.personal.contact.website || 'https://portfolio.vercel.app',
      image: portfolioData.personal.avatar
    }
  ],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: portfolioData.personal.contact.website || 'https://portfolio.vercel.app',
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: portfolioData.personal.avatar,
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} - ${portfolioData.personal.title}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: portfolioData.personal.contact.website || 'https://portfolio.vercel.app',
    creator: portfolioData.personal.name,
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export const generateProjectMetadata = (project: typeof portfolioData.projects[0]) => ({
  title: project.title,
  description: project.fullDescription,
  keywords: [
    project.title.toLowerCase(),
    ...project.technologies,
    ...project.tags
  ],
  openGraph: {
    title: project.title,
    description: project.fullDescription,
    type: 'website',
    url: project.liveUrl,
    images: [
      {
        url: project.image,
        width: 1200,
        height: 630,
        alt: project.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: project.title,
    description: project.fullDescription
  }
});

export const generateBlogPostMetadata = (post: any) => ({
  title: post.title,
  description: post.excerpt,
  keywords: [
    post.title.toLowerCase(),
    ...post.tags
  ],
  author: {
    name: post.author.name,
    url: post.author.linkedin
  },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    type: 'article',
    url: `/blog/${post.slug}`,
    images: [
      {
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt
  }
});
