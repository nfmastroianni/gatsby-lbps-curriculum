import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import ButtonLink from '../components/ButtonLink'

const NotFoundPage = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
  location: { pathname },
}) => {
  return (
    <div className="text-white min-h-screen bg-emerald-900 flex flex-col justify-center items-center">
      <GatsbyImage
        image={getImage(gatsbyImageData)}
        alt="LBPS Curriculum & Instruction logo"
      />
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 lg:mb-8">
        404 Error: Oops!
      </h1>
      <div className="border rounded max-w-screen-sm prose prose-emerald md:prose-lg lg:prose-xl xl:prose-2xl text-white p-4 md:p-6">
        <p>
          It appears you have found a page that does not exist. Let's get you
          back to one that does...
        </p>
        <ButtonLink type="internal" url="/" className="invert">
          Return Home
        </ButtonLink>
      </div>
    </div>
  )
}

export default NotFoundPage

export const NotFoundQuery = graphql`
  {
    file(name: { eq: "curriculum_logo" }) {
      childImageSharp {
        gatsbyImageData(height: 300, width: 300, layout: CONSTRAINED)
      }
    }
  }
`
