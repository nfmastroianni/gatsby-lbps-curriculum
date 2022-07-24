import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import components
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
// import utility functions
import { getUniqueGradeSpans } from '../../../utils'

const CurriculaIndex = ({
  data: {
    allGoogleCurriculaSheet: { nodes },
  },
  path,
}) => {
  // get the unique grade spans present in the Google Spreadsheet
  const spans = getUniqueGradeSpans(nodes)
  return (
    <Layout siteTitle={'Curricula'} path={path}>
      <Breadcrumb path={path} />
      <div>{JSON.stringify(spans)}</div>
    </Layout>
  )
}
// PROP-TYPES
CurriculaIndex.propTypes = {
  data: PropTypes.shape({
    allGoogleCurriculaSheet: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}
// EXPORTS
export default CurriculaIndex
export const data = graphql`
  query CurriculaQuery {
    allGoogleCurriculaSheet(filter: { published: { eq: true } }) {
      nodes {
        gradeSpan
      }
    }
  }
`
