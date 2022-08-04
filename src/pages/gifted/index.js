import * as React from 'react'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { graphql } from 'gatsby'

const GiftedAndTalented = ({
  data: {
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
}) => {
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb path={path} />
    </Layout>
  )
}

export default GiftedAndTalented

export const query = graphql`
  query GiftedQuery {
    site {
      siteMetadata {
        siteTitle
        siteUrl
        siteDescription
        siteImage
      }
    }
  }
`
