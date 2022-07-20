import * as React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Navbar title={title} />
      <main className="uk-container uk-container-xlarge">{children}</main>
      <button
        data-uk-totop
        data-uk-scroll
        style={{ position: 'fixed', bottom: 25, right: 10 }}
      ></button>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
