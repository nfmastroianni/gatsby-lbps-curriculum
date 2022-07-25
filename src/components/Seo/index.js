import * as React from 'react'

const Seo = ({
  children,
  siteDescription = 'DESCRIPTION PROP MISSING',
  siteImage,
  siteTitle,
  pageTitle,
  siteUrl,
}) => {
  return (
    <>
      {/* OG TAGS */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={`website`} />
      <meta id="og-image" property="og:image" content={siteUrl + siteImage} />
      <meta
        id="og-title"
        property="og:title"
        content={`${pageTitle} | ${siteTitle}`}
      />
      <meta property="og:description" content={siteDescription} />
      <meta name="description" content={``} />
      {children}
    </>
  )
}

export default Seo
