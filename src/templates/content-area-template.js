// import libraries
import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
// import components
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Section from '../components/Section'
import Heading from '../components/Heading'
import { FaFilePdf, FaPaperclip, FaRegCalendarAlt } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import Seo from '../components/Seo'

const ContentArea = ({
  data: {
    allGoogleCurriculaSheet: { areas },
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
  location: { pathname },
  pageContext: { contentArea, gradeSpan },
}) => {
  const { t } = useI18next()
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb pathname={pathname} contentArea={contentArea} />
      <Section id="curricula">
        <Heading
          level={2}
          className="text-center text-xl md:text-2xl lg:text-3xl font-semibold border-b py-4 mb-4 capitalize"
        >
          {`${gradeSpan} • ${t(contentArea)}`}
        </Heading>
        <div className="max-w-md">
          {!areas.length && <p>{t('notPublished')}</p>}
          {areas.map(({ title, guide, id, calendar, eslAppendix }) => {
            return (
              <details key={id}>
                <summary>
                  <HiChevronRight className="inline w-6 h-6" />
                  {title}
                </summary>
                {guide || calendar ? (
                  <ul>
                    {guide && (
                      <li>
                        <a href={guide}>
                          <FaFilePdf className="curriculum-icon w-8 h-8" />
                          <span className="capitalize">
                            {t('curriculumGuide')}
                          </span>
                        </a>
                      </li>
                    )}
                    {calendar && (
                      <li>
                        <a href={calendar}>
                          <FaRegCalendarAlt className="curriculum-icon w-8 h-8" />
                          <span className="capitalize">
                            {t('pacingCalendar')}
                          </span>
                        </a>
                      </li>
                    )}
                    {eslAppendix && (
                      <li>
                        <a href={eslAppendix}>
                          <FaPaperclip className="curriculum-icon w-8 h-8" />
                          <span className="capitalize">{t('eslAppendix')}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                ) : (
                  <p>{t('noDocuments')}</p>
                )}
              </details>
            )
          })}
        </div>
      </Section>
    </Layout>
  )
}

ContentArea.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string.isRequired,
}

export const Head = ({
  data: {
    site: { siteMetadata },
  },
  pageContext: { gradeSpan, contentArea },
  location,
}) => {
  const { pathname } = location
  return (
    <Seo
      {...siteMetadata}
      pageTitle={`${contentArea} | ${gradeSpan}`}
      pathname={pathname}
    >
      <title>{`${contentArea} | ${gradeSpan} | ${siteMetadata.siteTitle}`}</title>
      <meta
        id="og-title"
        property="og:title"
        content={`${contentArea} | ${gradeSpan} | ${siteMetadata.siteTitle}`}
      />
    </Seo>
  )
}

export default ContentArea

export const data = graphql`
  query contentAreaQuery(
    $gradeSpan: String
    $contentArea: String
    $language: String!
  ) {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
        siteImage
      }
    }
    allGoogleCurriculaSheet(
      filter: {
        published: { eq: true }
        gradeSpan: { eq: $gradeSpan }
        contentArea: { eq: $contentArea }
      }
      sort: { fields: courseTitle, order: ASC }
    ) {
      areas: nodes {
        area: contentArea
        title: courseTitle
        guide: curriculumGuide__PDF_Link
        span: gradeSpan
        id
        calendar: pacingCalendar__PDF_Link
        published
        eslAppendix: eSLAppendex__PDF_Link
      }
    }
    locales: allLocale(
      filter: {
        ns: { in: ["common", "content-area"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
