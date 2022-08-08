import * as React from 'react'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { graphql } from 'gatsby'
import Section from '../../components/Section'
import Heading from '../../components/Heading'
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
      <Section>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl divide-y mx-auto">
          <Heading level={2} className="text-center">
            Gifted &amp; Talented (Enrichment)
          </Heading>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vel
            labore repellendus maxime ipsum quis qui nam, officia mollitia
            tempora, necessitatibus dolores fugit veritatis, magnam adipisci cum
            placeat. Eos, dolore!
          </p>
        </div>
      </Section>
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
