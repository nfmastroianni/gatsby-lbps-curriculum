import * as React from 'react'
import PropTypes from 'prop-types'
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
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <Heading level={2} className="text-center">
            Gifted &amp; Talented (Enrichment)
          </Heading>
          <p className="pt-4 md:pt-6 lg:pt-8 border-t">
            Each and every student at Long Branch Public Schools has a unique
            set of strengths and abilities. An important part of educating a
            child involves developing these abilities. Our staff are trained to
            educate the whole child.
          </p>
          <p>
            The gifted and talented program recognizes that{' '}
            <a href="https://www.nj.gov/education/standards/gifted/#:~:text=a%20%E2%80%9Cstudent%20who%20possesses%20or%20demonstrates%20a%20high%20level%20of%20ability%20in%20one%20or%20more%20content%20areas%20when%20compared%20to%20their%20chronological%20peers%20in%20the%20school%20district%20and%20who%20require%20modifications%20of%20their%20educational%20program%20if%20they%20are%20to%20achieve%20in%20accordance%20with%20their%20capabilities.%E2%80%AF%E2%80%9D">
              some students
            </a>{' '}
            demonstrate extraordinary levels of proficiency and ability in one
            or more disciplines when compared to their peers. In order to help
            these students make the most of these abilties, Long Branch Public
            Schools has developed an assessment system to identify these
            extraordinary students.
          </p>
          <p>
            The sections below will help you become more familiar with the
            program.
          </p>
        </div>
      </Section>
      <Section headerText={'Identifying a Gifted Learner'}>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          The Long Branch Public Schools Gifted &amp; Talented program{' '}
          <a href="https://www.nj.gov/education/standards/gifted/#:~:text=the%20use%20of,observations%20and%20recommendations.">
            uses multiple measures
          </a>{' '}
          in order to identify gifted learners. To help keep things clear, it is
          helpful to consider the diferences between our students and our gifted
          students:
          <div className="grid sm:grid-cols-2">
            <div>
              <Heading level={3} className="text-center">
                A bright child...
              </Heading>
              <ul>
                <li>Needs multiple (6-8) repititions for mastery</li>
                <li>Answers the questions</li>
                <li>Understands ideas</li>
              </ul>
            </div>
            <div>
              <Heading level={3} className="text-center">
                A gifted child...
              </Heading>
              <ul>
                <li>Needs minimal (1-2) repititions for mastery</li>
                <li>Discusses using details and elaborates</li>
                <li>Constructs abstractions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section headerText={'About the K-5 Gifted & Talented Program'}></Section>
      <Section
        headerText={'About the 6-12 Gifted & Talented Program'}
      ></Section>
    </Layout>
  )
}

GiftedAndTalented.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteTitle: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        siteDescription: PropTypes.string.isRequired,
        siteImage: PropTypes.string.isRequired,
      }),
    }),
  }),
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
