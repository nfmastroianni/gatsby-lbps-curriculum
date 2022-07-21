import * as React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import { Link } from 'gatsby'

const Layout = ({ children, title, path }) => {
  return (
    <>
      <Navbar title={title} path={path} />
      <main className="">{children}</main>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
