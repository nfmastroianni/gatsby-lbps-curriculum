// import libraries
import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import components
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Section from '../components/Section'

const ContentArea = ({
  data: {
    allGoogleCurriculaSheet: { areas },
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
  pageContext: { contentArea, gradeSpan },
}) => {
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb path={path} />
      <Section>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold border-b py-4 max-w-screen-sm mx-auto">
          {gradeSpan} • {contentArea}
        </h2>
      </Section>
    </Layout>
  )
}

ContentArea.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string.isRequired,
}

export default ContentArea

export const data = graphql`
  query contentAreaQuery($gradeSpan: String, $contentArea: String) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allGoogleCurriculaSheet(
      filter: {
        published: { eq: true }
        gradeSpan: { eq: $gradeSpan }
        contentArea: { eq: $contentArea }
      }
    ) {
      areas: nodes {
        area: contentArea
        title: courseTitle
        guide: curriculumGuide__PDF_Link
        span: gradeSpan
        id
        calendar: pacingCalendar__PDF_Link
        published
      }
    }
  }
`
