import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

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
        <h2 className="">
          <span>HOME PAGE H1 - {title}</span>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
          incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
          similique laboriosam nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti, aliquam explicabo. Nulla maxime,
          necessitatibus odio consequuntur vel praesentium deleniti consectetur
          repellendus ea, veniam pariatur illum explicabo cum distinctio iusto
          assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
          incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
          similique laboriosam nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti, aliquam explicabo. Nulla maxime,
          necessitatibus odio consequuntur vel praesentium deleniti consectetur
          repellendus ea, veniam pariatur illum explicabo cum distinctio iusto
          assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
          incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
          similique laboriosam nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti, aliquam explicabo. Nulla maxime,
          necessitatibus odio consequuntur vel praesentium deleniti consectetur
          repellendus ea, veniam pariatur illum explicabo cum distinctio iusto
          assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
          incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
          similique laboriosam nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti, aliquam explicabo. Nulla maxime,
          necessitatibus odio consequuntur vel praesentium deleniti consectetur
          repellendus ea, veniam pariatur illum explicabo cum distinctio iusto
          assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          voluptatem iure blanditiis quia nemo? Accusantium, vero quae optio
          incidunt, deleniti in illo corrupti tempore mollitia eius voluptatibus
          similique laboriosam nulla. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti, aliquam explicabo. Nulla maxime,
          necessitatibus odio consequuntur vel praesentium deleniti consectetur
          repellendus ea, veniam pariatur illum explicabo cum distinctio iusto
          assumenda!
        </p>
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
