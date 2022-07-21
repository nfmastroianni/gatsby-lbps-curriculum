import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { getUniqueGradeSpans } from '../../../utils'

const CurriculaIndex = ({ data, path }) => {
  const {
    allGoogleCurriculaSheet: { nodes },
  } = data
  const spans = getUniqueGradeSpans(nodes)
  console.log(path)
  return (
    <Layout title={'Curricula'} path={path}>
      <div>{JSON.stringify(spans)}</div>
    </Layout>
  )
}
// PROP-TYPES
CurriculaIndex.propTypes = {
  data: PropTypes.object,
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
