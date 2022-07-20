import React from 'react'
import UIkit from 'uikit'
import 'uikit/dist/js/uikit.min.js'
import Icons from 'uikit/dist/js/uikit-icons.min.js'
import { graphql } from 'gatsby'

UIkit.use(Icons)

export default function Home({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <>
      <div className="">
        <h1>{title}</h1>
      </div>
    </>
  )
}

export function Head({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
  location,
  pageContext,
  params,
}) {
  return (
    <>
      <title>{title}</title>
    </>
  )
}

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
