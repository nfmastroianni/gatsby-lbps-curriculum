import { graphql } from 'gatsby'
import * as React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Layout from '../../../components/Layout'

export default function SpanIndex({
  data: {
    allGoogleCurriculaSheet: { nodes },
  },
  path,
  pageContext: { gradeSpan },
}) {
  // JS
  return (
    <Layout siteTitle={`${gradeSpan} Curricula`} path={path}>
      <Breadcrumb path={path} />
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
