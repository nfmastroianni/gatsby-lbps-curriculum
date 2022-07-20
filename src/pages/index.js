import React from 'react'
import UIkit from 'uikit'
import 'uikit/dist/js/uikit.min.js'
import Icons from 'uikit/dist/js/uikit-icons.min.js'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

UIkit.use(Icons)

const Home = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <>
      <Layout title={title}>
        <h2 className="uk-heading-line uk-text-center">
          <span>HOME PAGE H1 - {title}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
            incidunt, deleniti in illo corrupti tempore mollitia eius
            voluptatibus similique laboriosam nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti, aliquam explicabo. Nulla
            maxime, necessitatibus odio consequuntur vel praesentium deleniti
            consectetur repellendus ea, veniam pariatur illum explicabo cum
            distinctio iusto assumenda!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
            incidunt, deleniti in illo corrupti tempore mollitia eius
            voluptatibus similique laboriosam nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti, aliquam explicabo. Nulla
            maxime, necessitatibus odio consequuntur vel praesentium deleniti
            consectetur repellendus ea, veniam pariatur illum explicabo cum
            distinctio iusto assumenda!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
            incidunt, deleniti in illo corrupti tempore mollitia eius
            voluptatibus similique laboriosam nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti, aliquam explicabo. Nulla
            maxime, necessitatibus odio consequuntur vel praesentium deleniti
            consectetur repellendus ea, veniam pariatur illum explicabo cum
            distinctio iusto assumenda!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
            incidunt, deleniti in illo corrupti tempore mollitia eius
            voluptatibus similique laboriosam nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti, aliquam explicabo. Nulla
            maxime, necessitatibus odio consequuntur vel praesentium deleniti
            consectetur repellendus ea, veniam pariatur illum explicabo cum
            distinctio iusto assumenda!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
            incidunt, deleniti in illo corrupti tempore mollitia eius
            voluptatibus similique laboriosam nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti, aliquam explicabo. Nulla
            maxime, necessitatibus odio consequuntur vel praesentium deleniti
            consectetur repellendus ea, veniam pariatur illum explicabo cum
            distinctio iusto assumenda!
          </p>
        </h2>
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
        incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
        similique laboriosam nulla.
      </p>
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
