import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getUniqueGradeSpans } from '../../../utils'

const CurriculaIndex = ({ data }) => {
  const {
    allGoogleCurriculaSheet: { nodes },
  } = data
  const spans = getUniqueGradeSpans(nodes)
  console.log(spans)
  return <div>{JSON.stringify(spans)}</div>
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
