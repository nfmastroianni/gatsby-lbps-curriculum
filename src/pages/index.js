import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { departments } from '../../data'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { getDepartmentImages } from '../../utils'
// import { HiCheck } from 'react-icons/hi'

const Home = ({
  data: {
    site: {
      siteMetadata: { siteTitle },
    },
    allFile: { nodes },
  },
  path,
}) => {
  getDepartmentImages(nodes, departments)

  return (
    <>
      <Layout siteTitle={siteTitle} path={path}>
        <Hero />
        <Section headerText="Learn More About Us">
          <h3 className="text-2xl md:text-3xl font-light text-center my-2 md:my-4 lg:my-6">
            Departments
          </h3>
          <p className="prose md:prose-lg mx-auto my-4 md:my-6 lg:my-8">
            Check out some of the departments here at Long Branch Public
            Schools. Each department has at least one supervisor and a master
            teacher for each building. These professionals help ensure best
            practices are followed when using their curriculum.
          </p>
          <ul className="divide-y">
            {departments.map(
              ({
                description,
                id,
                gatsbyImageData,
                title,
                departmentUrl,
                departmentUrlType,
              }) => {
                return (
                  <li
                    key={id}
                    className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 pt-2 md:pt-6 pb-6 md:pb-8"
                  >
                    <GatsbyImage
                      image={getImage(gatsbyImageData)}
                      alt=""
                      className="md:col-span-1 self-center justify-self-center md:justify-self-center my-4 md:my-0 md:mr-4"
                    />
                    <div className="col-span-2">
                      <p className="font-semibold text-center text-2xl lg:text-3xl pb-2 md:pb-4 lg:pb-6">
                        {title}
                      </p>
                      <p className="prose md:prose-lg lg:prose-xl mx-auto mb-6">
                        {description}
                      </p>
                      {departmentUrl && departmentUrlType === 'internal' ? (
                        <Link
                          to={'/'}
                          className="px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center"
                        >
                          Visit the {title} site.
                        </Link>
                      ) : departmentUrl && departmentUrlType === 'external' ? (
                        <a
                          href={departmentUrl}
                          className="px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center"
                        >
                          Visit the {title} site
                        </a>
                      ) : null}
                    </div>
                  </li>
                )
              }
            )}
          </ul>
        </Section>
        <Section headerText={'Explore Our Curricula'}>
          <p className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
            Looking for our Curriculum Documents? We've got you covered. Head on
            over to our <Link to="/curricula/">curricula page</Link> to pick a
            grade span and get started.
          </p>
          <Link
            to="/curricula/"
            className="my-4 px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto text-center w-[200px]"
          >
            Pick a Grade Span
          </Link>
        </Section>
        {/* <Section headerText="How We Teach">
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
                <div key={id} className="grid md:grid-cols-2">
                  <dt className="text-xl md:text-2xl text-emerald-900 justify-self-center self-center mt-6">
                    <HiCheck className="w-6 h-6 text-emerald-900 inline mr-2" />
                    {title}
                  </dt>
                  <dd className="prose md:prose-lg lg:prose-xl my-4">
                    {description}
                  </dd>
                  {url && type === 'internal' ? (
                    <Link
                      className="text-center md:col-span-2 mb-4 md:mb-6"
                      to={url}
                    >
                      Learn More About {title}
                    </Link>
                  ) : (
                    url &&
                    type === 'external' && (
                      <a
                        className="text-center md:col-span-2 mb-4 md:mb-6 px-4 py-2 bg-emerald-900 rounded text-white my-4 max-w-screen-sm mx-auto hover:bg-emerald-800 hover:text-slate-200"
                        href={url}
                      >
                        Learn More About {title}
                      </a>
                    )
                  )}
                </div>
              )
            })}
          </dl>
        </Section> */}
      </Layout>
    </>
  )
}

export function Head({
  data: {
    site: { siteMetadata },
  },
  location,
}) {
  const { siteTitle } = siteMetadata
  const { pathname } = location
  return (
    <Seo {...siteMetadata} pageTitle="Home" pathname={pathname}>
      <title>{`Home | ${siteTitle}`}</title>
    </Seo>
  )
}

// PROP-TYPES
Home.propTypes = {
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
  path: PropTypes.string.isRequired,
}

// EXPORTS
export default Home

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
        siteImage
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
