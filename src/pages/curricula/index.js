import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
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
import Heading from '../../components/Heading'

const CurriculaIndex = ({
  data: {
    allGoogleCurriculaSheet: { nodes },
    site: { siteMetadata },
  },
  path,
  location: { pathname },
}) => {
  // get the unique grade spans present in the Google Spreadsheet
  const spans = getUniqueGradeSpans(nodes)
  const { siteTitle } = siteMetadata
  const { t } = useTranslation()
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb pathname={pathname} />
      <Section>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl  dark:prose-invert divide-y mx-auto">
          <Heading level={2} prose={true} className="text-center">
            {t('pageTitle')}
          </Heading>
          <p className="py-4">
            <Trans i18nKey={'pageIntro'}>
              In order to ensure our students receive a rigorous education, our
              curricula are developed using the "
              <a href="https://files.ascd.org/staticfiles/ascd/pdf/siteASCD/publications/UbD_WhitePaper0312.pdf">
                Understanding By Design
              </a>
              " framework. This framework helps enhance student learning and
              facilitates instruction by starting with the end result in mind.
              Below you will find information on the elementary, middle, and
              high school levels.
            </Trans>
          </p>
        </div>
      </Section>
      {!spans.length && (
        <p className="mx-auto text-center text-3xl font-bold">
          {t('notPublished')}
        </p>
      )}
      {spans.map((span, i) => {
        return (
          <Section key={span} headerText={`${span} Curriculum`}>
            <div
              className={`my-4 md:my-6 max-w-screen-2xl mx-auto flex flex-col justify-center items-center ${
                i % 2 === 0 ? ` md:flex-row-reverse` : `md:flex-row`
              }`}
            >
              <div className="flex-1 prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert">
                <Heading
                  level={3}
                  className="capitalize text-center md:text-left"
                >
                  {t(gradeSpans[i].subtitle)}
                </Heading>
                <p className="">
                  {t(gradeSpans[i].description) ||
                    'Description missing from the data/index.js file'}
                </p>
              </div>
              <div className="flex-1 mx-auto text-center text-emerald-900 dark:text-emerald-200 p-4 my-4 md:my-6 hover:text-emerald-800">
                <Link
                  to={`/curricula/${span.toLowerCase()}/`}
                  className="inline-block rounded border border-emerald-900 dark:border-emerald-200 p-4 transform transition duration-200 ease-in-out hover:bg-emerald-900 hover:text-white hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-black"
                >
                  <HiBookOpen className=" w-32 h-32 inline" />
                  <br />
                  <Trans i18nKey={'exploreBtn'}>
                    <span className="dark:hover:text-white text-xl font-light">
                      Click Here <br /> to Explore {{ span }} Curricula
                    </span>
                  </Trans>
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
  const { pathname } = location
  return (
    <Seo {...siteMetadata} pageTitle="About Our Curricula" pathname={pathname}>
      <title>About Our Curricula | {siteMetadata.siteTitle}</title>
    </Seo>
  )
}
export default CurriculaIndex
export const data = graphql`
  query CurriculaQuery($language: String!) {
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
    locales: allLocale(
      filter: {
        ns: { in: ["common", "curricula-index"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
