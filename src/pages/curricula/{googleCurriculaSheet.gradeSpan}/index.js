import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../../components/Layout'

export default function SpanIndex({
  data: {
    allGoogleCurriculaSheet: { nodes },
  },
  path,
  pageContext: { gradeSpan },
}) {
  // JS
  console.log(gradeSpan)
  return (
    <Layout title={`${gradeSpan} Curricula`} path={path}>
      <h1>SPAN INDEX</h1>
    </Layout>
  )
}

export const data = graphql`
  query SpanQuery($gradeSpan: String) {
    allGoogleCurriculaSheet(filter: { gradeSpan: { eq: $gradeSpan } }) {
      nodes {
        contentArea
        gradeSpan
      }
    }
  }
`
