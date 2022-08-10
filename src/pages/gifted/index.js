import * as React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Blockquote from '../../components/Blockquote'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const GiftedAndTalented = ({ data, path, location }) => {
  const {
    site: {
      siteMetadata: { siteTitle },
    },
    giftedGuideImage,
    nacgImage,
  } = data
  return (
    <Layout siteTitle={siteTitle} path={path}>
      <Breadcrumb pathname={location.pathname} />
      <Section>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <Heading level={2} className="text-center">
            Accelerated Learning Program
          </Heading>
          <p className="pt-4 md:pt-6 lg:pt-8 border-t">
            The Long Branch Public School District recognizes that all children
            have unique strengths and talents. We strive to provide
            opportunities to develop the social, emotional, and academic
            abilities of each student. All teachers develop learning
            opportunities to meet these goals through individualized,
            differentiated learning activities across each content area in every
            grade level Pre K-12.
          </p>
          <Blockquote
            quote="Because every child is different, NAGC recognizes that there is no “one perfect program” for teaching gifted students. Instead, the NAGC Pre-K-Grade 12 Gifted Programming Standards state that “a continuum of services must exist for gifted learners” at every level."
            author="National Association for Gifted Children"
            url="https://nagc.org"
            image={nacgImage.childImageSharp.nagcImageData}
            imageAlt="Logo for NAGC.org"
            className="not-prose"
          />
          <p>
            The{' '}
            <a href="https://www.nj.gov/education/standards/gifted/#:~:text=a%20%E2%80%9Cstudent%20who%20possesses%20or%20demonstrates%20a%20high%20level%20of%20ability%20in%20one%20or%20more%20content%20areas%20when%20compared%20to%20their%20chronological%20peers%20in%20the%20school%20district%20and%20who%20require%20modifications%20of%20their%20educational%20program%20if%20they%20are%20to%20achieve%20in%20accordance%20with%20their%20capabilities.%E2%80%AF%E2%80%9D">
              accelerated learner{' '}
            </a>
            has needs that can be met in a multitude of ways. Essentially, a
            "continuum of services" provides administrators, teachers,
            Parent/Guardian, and students with a myriad of educational options
            that are respectful of individual student differences and mindful of
            classroom and community resources. This range of services can be
            provided in the form of accommodations in the regular classroom, and
            part-time assignment to both regular and special classes.
          </p>
        </div>
      </Section>
      <Section headerText={'Overview of the Accelerated Learning Program'}>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <p>
            The Long Branch Public Schools Gifted and Talented Program in Grades
            K-5 shall be referred to as the Accelerated Learning Program (ALPs)
            and in Grades 6-12 as Honors and Accelerated courses. These are
            needs-based programs designed for those students who, when compared
            to their chronological peers, possess or demonstrate exceptionally
            high levels of ability in one or more content areas. The accelerated
            classes provide additional and appropriate educational challenges
            and opportunities to meet the needs of these students. The curricula
            are designed to provide appropriate challenges to intellectually and
            academically advanced learners.
          </p>
          <Heading level={3} className="text-center">
            Goals of the Program
          </Heading>
          <ul>
            <li>
              To challenge students who demonstrate a need for rigor beyond the
              grade level expectations.
            </li>
            <li>
              To provide an environment that encourages the development of
              critical thinking skills such as analysis, evaluation, synthesis,
              and complex problem solving strategies.
            </li>
            <li>
              To provide an environment that encourages divergent thinking and
              supports the development of originality, fluency, flexibility, and
              elaboration.
            </li>
            <li>
              To develop confidence in expressing ideas through various media
              and platforms.
            </li>
            <li>
              To advance the process of inquiry through the application of
              skills in investigations of real-life problems and research.
            </li>
            <li>
              To provide students with opportunities to develop leadership
              skills through positive group interaction.
            </li>
            <li>To encourage a lifelong commitment to independent learning.</li>
          </ul>
        </div>
      </Section>
      <Section
        headerText={'Identification of Accelerated Learning Program Students'}
      >
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <p>
            The identification process occurs at the beginning and middle of
            each school year. However, each school reviews students' information
            and data collected on a regular basis and reviews the information
            with the administration for an ongoing identification process.{' '}
            <a href="https://www.nj.gov/education/standards/gifted/#:~:text=the%20use%20of,observations%20and%20recommendations.">
              Multiple measures
            </a>{' '}
            used for identification include assessment data, teacher and
            Parent/Guardian recommendations.
          </p>
          <p>It can be helpful to consider the diferences:</p>
          <div className="grid sm:grid-cols-2">
            <div>
              <Heading level={3} className="text-center">
                A learner...
              </Heading>
              <ul>
                <li>Needs multiple (6-8) repititions for mastery</li>
                <li>Answers the questions</li>
                <li>Understands ideas</li>
                <li>Completes assignments</li>
                <li>Is a technician</li>
              </ul>
            </div>
            <div>
              <Heading level={3} className="text-center">
                An accelerated learner...
              </Heading>
              <ul>
                <li>Needs minimal (1-2) repititions for mastery</li>
                <li>Discusses using details and elaborates</li>
                <li>Constructs abstractions</li>
                <li>Initiates projects</li>
                <li>Is an inventor</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section headerText={'Equity and Access'}>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <p>
            The Long Branch Public Schools strive to provide equity and access
            to all students. In recognition of this we offer assessments that
            are responsive to students' economic conditions, gender,
            developmental differences, special needs, language proficiency, and
            any other factors that mitigate against fair assessment practices.
            Assessment data comes from multiple sources and includes multiple
            assessment methods. Assessment measures provide evidence of
            reliability and validity for the intended purposes and target
            students.
          </p>
        </div>
      </Section>
      <Section headerText={'Looking for More Information?'}>
        <div className="prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
          <p>
            If you are looking for even more information on our Accelerated
            Learning Program including the procedure for filing a complaint,{' '}
            <a href="https://docs.google.com/document/d/1RLv_hX0sOTov-hzuUC1_QqRa9EM_1Uz_yro45Yq8_eI/edit">
              please checkout the guide.
            </a>
          </p>
          <div className="text-center">
            <a href="https://docs.google.com/document/d/1RLv_hX0sOTov-hzuUC1_QqRa9EM_1Uz_yro45Yq8_eI/edit">
              <GatsbyImage
                image={getImage(
                  giftedGuideImage.childImageSharp.giftedGuideImageData
                )}
                alt="the accelerated learning program guide"
                className="shadow-md"
              />
            </a>
          </div>
          <p>
            Additionaly, our Board of Education{' '}
            <a href="https://www.straussesmay.com/seportal/Public/DistrictPolicy.aspx?policyid=2464&id=b50ce4ebbb5f451db593dc1acdca7f47">
              policy can be read here
            </a>
            .
          </p>
        </div>
      </Section>
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

export function Head({
  data: {
    site: { siteMetadata },
  },
  location,
}) {
  const { siteTitle } = siteMetadata
  const { pathname } = location
  return (
    <Seo
      {...siteMetadata}
      pageTitle="Accelerated Learning Program"
      pathname={pathname}
    >
      <title>{`Accelerated Learning Program | ${siteTitle}`}</title>
    </Seo>
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
    nacgImage: file(name: { eq: "nagcorg" }) {
      childImageSharp {
        nagcImageData: gatsbyImageData(
          placeholder: TRACED_SVG
          width: 35
          height: 35
        )
      }
    }
    giftedGuideImage: file(name: { eq: "giftedGuide" }) {
      childImageSharp {
        giftedGuideImageData: gatsbyImageData(
          placeholder: TRACED_SVG
          width: 200
        )
      }
    }
  }
`
