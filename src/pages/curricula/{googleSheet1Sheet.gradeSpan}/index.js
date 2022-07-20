import { graphql } from 'gatsby'
import * as React from 'react'

export default function SpanIndex({
  data: {
    allGoogleSheet1Sheet: { nodes },
  },
  path,
  pageContext: { gradeSpan },
}) {
  // JS
  console.log(gradeSpan)
  return (
    <>
      <h1>SPAN INDEX</h1>
    </>
  )
}

export const data = graphql`
  query SpanQuery($gradeSpan: String) {
    allGoogleSheet1Sheet(filter: { gradeSpan: { eq: $gradeSpan } }) {
      nodes {
        contentArea
        gradeSpan
      }
    }
  }
`
