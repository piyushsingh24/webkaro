import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/logo.png',
  ogUrl,
  ogType = 'website',
  twitterHandle = '@webkaro',
  noIndex = false,
  schema,
  ogImageWidth = '1200',
  ogImageHeight = '630',
  location: pathName
}) => {
  const siteName = 'Webkaro';
  const fullTitle = title ? `${title} | ${siteName}` : `Webkaro | Premium Digital Agency`;
  const siteUrl = 'https://webkaro.in';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const fullOgUrl = ogUrl || (pathName ? `${siteUrl}${pathName}` : undefined);

  // Ensure absolute URLs for images
  const getAbsoluteUrl = (url) => {
    if (!url) return `${siteUrl}/logo.png`;
    if (url.startsWith('http')) return url;
    return `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const absoluteOgImage = getAbsoluteUrl(ogImage);

  // Generate Breadcrumb Schema
  const generateBreadcrumbs = () => {
    if (!pathName || pathName === '/') return null;

    const paths = pathName.split('/').filter(p => p);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
        "item": `${siteUrl}${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  const breadcrumbSchema = generateBreadcrumbs();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      {absoluteOgImage && <meta property="og:image" content={absoluteOgImage} />}
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:type" content="image/png" />
      {fullOgUrl && <meta property="og:url" content={fullOgUrl} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      {absoluteOgImage && <meta name="twitter:image" content={absoluteOgImage} />}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
