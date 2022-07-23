import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { departments, practices } from '../../data'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { getDepartmentImages } from '../../utils'
import { HiCheck } from 'react-icons/hi'

const Home = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allFile: { nodes },
  },
  path,
}) => {
  getDepartmentImages(nodes, departments)

  return (
    <>
      <Layout title={title} path={path}>
        <Hero />
        <Section headerText="What We Teach">
          <dl className="divide-y">
            {departments.map(({ description, id, gatsbyImageData, title }) => {
              return (
                <div
                  key={id}
                  className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 pt-2 md:pt-6 pb-6 md:pb-8"
                >
                  <GatsbyImage
                    image={getImage(gatsbyImageData)}
                    alt=""
                    className="md:col-span-1 self-center justify-self-center md:justify-self-end my-4 md:my-0 md:mr-4"
                  />
                  <div className="col-span-2">
                    <dt className="font-semibold text-center text-2xl lg:text-3xl pb-2 md:pb-4 lg:pb-6">
                      {title}
                    </dt>
                    <dd className="prose md:prose-lg lg:prose-xl mx-auto">
                      {description}
                    </dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </Section>
        <Section headerText="How We Teach">
          <h3 className="text-2xl md:text-3xl font-light text-center my-2 md:my-4 lg:my-6">
            Practices
          </h3>
          <p className="prose md:prose-lg mx-auto my-4 md:my-6 lg:my-8">
            Below you will find some of the instructional practices that are
            foundational to the experience of students here in Long Branch
            Public Schools. Your child's teacher should be able to answer any
            questions you may have about these practices.
          </p>
          <dl className="divide-y max-w-screen-lg mx-auto">
            {practices.map(({ id, title, description, url, type }) => {
              return (
                <div className="grid md:grid-cols-2">
                  <dt className="text-xl md:text-2xl text-emerald-900 justify-self-center self-center mt-6">
                    <HiCheck className="w-6 h-6 text-emerald-900 inline mr-2" />
                    {title}
                  </dt>
                  <dd className="prose md:prose-lg lg:prose-xl my-4">
                    {description}
                  </dd>
                </div>
              )
            })}
          </dl>
        </Section>
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
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 180
            height: 180
          )
        }
        name
      }
    }
  }
`
