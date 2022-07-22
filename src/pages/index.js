import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/Section'

const Home = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
  path,
}) => {
  return (
    <>
      <Layout title={title} path={path}>
        <Hero />
        <Section headerText="What We Teach"></Section>
        <Section headerText="How We Teach"></Section>
      </Layout>
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

// PROP-TYPES
Home.propTypes = {
  title: PropTypes.string,
}

// EXPORTS
export default Home

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
