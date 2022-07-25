import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
// import components
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import Section from '../../components/Section'
// import utility functions
import { getUniqueGradeSpans } from '../../../utils'
import { HiBookOpen } from 'react-icons/hi'
// import data
import { gradeSpans } from '../../../data'
import Seo from '../../components/Seo'

const CurriculaIndex = ({
  data: {
    allGoogleCurriculaSheet: { nodes },
  },
  path,
}) => {
  // get the unique grade spans present in the Google Spreadsheet
  const spans = getUniqueGradeSpans(nodes)
  return (
    <Layout siteTitle={'Curricula'} path={path}>
      <Breadcrumb path={path} />
      <Section>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl divide-y mx-auto">
          <h2 className="text-center text-emerald-900">About Our Curricula</h2>
          <p className="py-4 prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
            In order to ensure our students receive a rigorous, our curricula
            are developed using the "
            <a href="https://files.ascd.org/staticfiles/ascd/pdf/siteASCD/publications/UbD_WhitePaper0312.pdf">
              Understanding By Design
            </a>
            " framework. This framework helps enhance student learning and
            facilitates instruction by staring with the end result in mind.
            Below you will find information on the primary, middle, and
            secondary school levels.
          </p>
        </div>
      </Section>
      {spans.map((span, i) => {
        return (
          <Section key={span} headerText={span}>
            <div
              className={`my-4 md:my-6 max-w-screen-2xl mx-auto flex flex-col justify-center items-center ${
                i % 2 === 0 ? ` md:flex-row-reverse` : `md:flex-row`
              }`}
            >
              <div className="flex-1 prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl">
                <h3 className="capitalize text-center md:text-left">
                  {gradeSpans[i].subtitle}
                </h3>
                <p className="">
                  {gradeSpans[i].description ||
                    'Description missing from the data/index.js file'}
                </p>
              </div>
              <div className="flex-1 mx-auto text-center text-emerald-900 p-4 my-4 md:my-6 hover:text-emerald-800">
                <Link
                  to={span.toLowerCase()}
                  className="inline-block rounded border border-emerald-900 p-4 transform transition duration-300 ease-in-out hover:bg-emerald-900 hover:text-white hover:shadow-md hover:shadow-slate-900"
                >
                  <HiBookOpen className=" w-32 h-32 inline" />
                  <br />
                  <span className="text-xl">Explore {span} curricula</span>
                </Link>
              </div>
            </div>
          </Section>
        )
      })}
    </Layout>
  )
}
// PROP-TYPES
CurriculaIndex.propTypes = {
  data: PropTypes.shape({
    allGoogleCurriculaSheet: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}
// EXPORTS
export const Head = ({
  data: {
    site: { siteMetadata },
  },
  location,
}) => {
  siteMetadata.siteUrl += location.pathname
  console.log(siteMetadata.siteUrl)
  return (
    <Seo {...siteMetadata}>
      <title>Curricula Grade Spans | {siteMetadata.siteTitle}</title>
    </Seo>
  )
}
export default CurriculaIndex
export const data = graphql`
  query CurriculaQuery {
    allGoogleCurriculaSheet(filter: { published: { eq: true } }) {
      nodes {
        gradeSpan
      }
    }
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
