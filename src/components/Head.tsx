'use client';

import Head from 'next/head';
import { siteMetadata } from '@/lib/metadata';
import { generatePersonStructuredData, generateWebsiteStructuredData } from '@/lib/structured-data';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
}

export default function CustomHead({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
  noIndex = false
}: HeadProps) {
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const pageImage = image || siteMetadata.openGraph.images[0].url;
  const pageUrl = url || siteMetadata.openGraph.url;
  const pageKeywords = keywords ? [...keywords, ...siteMetadata.keywords].join(', ') : siteMetadata.keywords.join(', ');

  const structuredData = [
    generatePersonStructuredData(),
    generateWebsiteStructuredData()
  ];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={siteMetadata.creator} />
      <meta name="publisher" content={siteMetadata.publisher} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteMetadata.openGraph.siteName} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={siteMetadata.twitter.card} />
      <meta name="twitter:site" content={siteMetadata.twitter.site} />
      <meta name="twitter:creator" content={siteMetadata.twitter.creator} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteMetadata.openGraph.siteName} />
      
      {/* Viewport and Character Set */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Verification Tags */}
      <meta name="google-site-verification" content={siteMetadata.verification.google} />
      <meta name="yandex-verification" content={siteMetadata.verification.yandex} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://analytics.google.com" />
    </Head>
  );
}
