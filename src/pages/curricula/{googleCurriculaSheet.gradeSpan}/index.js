// import libraries
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
// import components
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'
import Breadcrumb from '../../../components/Breadcrumb'
import Section from '../../../components/Section'
import { getUniqueContentAreas, slugify } from '../../../../utils'

const SpanIndex = ({
  data: {
    allGoogleCurriculaSheet: { rows },
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
  pageContext: { gradeSpan },
}) => {
  // JS
  const subjects = getUniqueContentAreas(rows)
  // RETURN JSX
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb path={path} />
      <Section>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center border-b py-4">
          {gradeSpan} Curricula
        </h2>
        <p className="my-4 prose prose-emerald sm:prose-lg md:prose-xl lg:prose-2xl mx-auto">
          You have reached the curriculum page for grades {gradeSpan}. Please
          select a subject area below to access the documents.
        </p>
      </Section>
      <Section headerText={`Subject Areas for ${gradeSpan}`}>
        {!subjects.length && (
          <p className="mx-auto text-center text-3xl font-bold">
            We have not yet published any curricula. Please check back again
            soon.
          </p>
        )}
        <ul className="max-w-screen-md mx-auto grid md:grid-cols-2 gap-4 text-center mt-2">
          {subjects.map(subject => {
            return (
              <li key={subject} className="">
                <Link
                  to={`/curricula/${gradeSpan.toLowerCase()}/${slugify(
                    subject
                  )}/`}
                  className="block px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900"
                >
                  {subject}
                </Link>
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

  return (
    <Seo
      {...siteMetadata}
      pageTitle={`${gradeSpan} Subjects`}
      pathname={pathname}
    >
      <title>{`${gradeSpan} Subjects | ${siteMetadata.siteTitle}`}</title>
    </Seo>
  )
}

export default SpanIndex

export const data = graphql`
  query SpanQuery($gradeSpan: String) {
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
  }
`
