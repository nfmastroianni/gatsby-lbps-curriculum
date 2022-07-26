// import libraries
import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useI18next } from 'gatsby-plugin-react-i18next'
// import components
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'
import Breadcrumb from '../../../components/Breadcrumb'
import Section from '../../../components/Section'
import Heading from '../../../components/Heading'
import ButtonLink from '../../../components/ButtonLink'
import { getUniqueContentAreas, slugify } from '../../../../utils'

const SpanIndex = ({
  data: {
    allGoogleCurriculaSheet: { rows },
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
  location,
  pageContext: { gradeSpan },
}) => {
  // JS
  const subjects = getUniqueContentAreas(rows)
  const { t } = useI18next()
  // RETURN JSX
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb pathname={location.pathname} />
      <Section>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert mx-auto divide-y">
          <Heading level={2} prose={true} className="text-center capitalize">
            {`${gradeSpan} ${t('subjects')}`}
          </Heading>
          <p className="py-4 ">{t('pageIntro', { gradeSpan })}</p>
        </div>
      </Section>
      <Section headerText={`${t('sectionHeaderText')} ${gradeSpan}`}>
        {!subjects.length && (
          <p className="mx-auto text-center text-3xl font-bold">
            {t('notPublished')}
          </p>
        )}
        <ul className="max-w-screen-lg mx-auto my-4 md:my-6 lg:my-8 grid md:grid-cols-2 gap-6 text-center mt-2">
          {subjects.map(({ title, count }) => {
            return (
              <li key={title} className="">
                <ButtonLink
                  type="internal"
                  url={`/curricula/${gradeSpan.toLowerCase()}/${slugify(
                    title
                  )}/`}
                  className="group"
                >
                  <span>
                    {t(title)}
                    <div className="absolute -left-2 -top-2 w-6 h-6 transition duration-300 ease-in-out bg-white border border-emerald-900 text-emerald-900 group-hover:text-white group-hover:bg-emerald-900 group-hover:border-white rounded-full flex items-center justify-center text-xs md:text-sm lg:text-base shadow-lg shadow-emerald-600 group-hover:shadow-emerald-800">
                      {count}
                    </div>
                  </span>
                </ButtonLink>
              </li>
            )
          })}
        </ul>
      </Section>
    </Layout>
  )
}
SpanIndex.propTypes = {
  data: PropTypes.shape({
    allGoogleCurriculaSheet: PropTypes.shape({
      rows: PropTypes.array.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteTitle: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export const Head = ({ data, pageContext, location }) => {
  const {
    site: { siteMetadata },
  } = data
  const { gradeSpan } = pageContext
  const { pathname } = location
  const { t } = useI18next()

  return (
    <Seo
      {...siteMetadata}
      pageTitle={`${gradeSpan} Subjects`}
      pathname={pathname}
    >
      <title>{`${gradeSpan} ${t('Subjects')} | ${
        siteMetadata.siteTitle
      }`}</title>
    </Seo>
  )
}

export default SpanIndex

export const data = graphql`
  query SpanQuery($gradeSpan: String, $language: String!) {
    allGoogleCurriculaSheet(
      filter: { gradeSpan: { eq: $gradeSpan }, published: { eq: true } }
    ) {
      rows: nodes {
        subject: contentArea
      }
    }
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
        siteImage
      }
    }
    locales: allLocale(
      filter: {
        ns: { in: ["common", "curricula-gradespan"] }
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
