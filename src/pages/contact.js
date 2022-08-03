import * as React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'

const Contact = ({
  data: {
    site: {
      siteMetadata: { siteTitle },
    },
  },
  path,
}) => {
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <h2>Contact the Curriculum &amp; Instruction Office</h2>
    </Layout>
  )
}

Contact.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteTitle: PropTypes.string.isRequired,
        siteDescription: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        siteImage: PropTypes.string.isRequired,
      }),
    }).isRequired,
    allFile: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export const Head = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const { siteTitle } = siteMetadata
  return (
    <Seo {...siteMetadata}>
      <title>{`Contact Us | ${siteTitle}`}</title>
    </Seo>
  )
}

export default Contact

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
        siteImage
      }
    }
  }
`
