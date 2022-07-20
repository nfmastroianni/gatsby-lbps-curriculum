import { graphql } from 'gatsby'
import * as React from 'react'

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
    <>
      <h1>SPAN INDEX</h1>
    </>
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
