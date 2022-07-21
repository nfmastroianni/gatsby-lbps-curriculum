import * as React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Layout = ({ children, title }) => {
  const [scrolled, setScrolled] = React.useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 400) {
      setScrolled(true)
    } else if (scrolled <= 400) {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', toggleVisible)
  return (
    <>
      <Navbar title={title} />
      <main className="uk-container uk-container-xlarge">{children}</main>
      <button
        data-uk-totop
        data-uk-scroll
        style={{ position: 'fixed', bottom: 25, right: 10 }}
        className={scrolled ? `uk-animation-fade` : `uk-hidden`}
      ></button>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
