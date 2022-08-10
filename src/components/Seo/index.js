import * as React from 'react'

const Seo = ({
  children,
  siteDescription = 'DESCRIPTION PROP MISSING',
  siteImage,
  siteTitle,
  pageTitle,
  siteUrl,
  pathname,
}) => {
  return (
    <>
      {/* OG TAGS */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={`website`} />
      <meta
        id="og-image"
        property="og:image"
        content={`${siteUrl}/${siteImage}`}
      />
      <meta
        id="og-title"
        property="og:title"
        content={`${pageTitle} | ${siteTitle}`}
      />
      <meta name="description" content={siteDescription} />
      <meta property="og:description" content={siteDescription} />
      {/* TWITTER TAGS */}
      <meta
        id="twitter-image"
        property="twitter:image"
        content={`${siteUrl}/${siteImage}`}
      />
      <meta id="twitter-card" property="twitter:card" content="summary" />
      <link rel="canonical" href={siteUrl + pathname} />
      {children}
    </>
  )
}

export default Seo
