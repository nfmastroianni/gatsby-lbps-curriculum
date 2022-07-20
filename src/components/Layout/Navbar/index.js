import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import * as styles from './navbar.module.scss'

const Navbar = ({ title }) => {
  return (
    <>
      <div data-uk-sticky="start: 400; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: ">
        <nav
          className={`uk-navbar uk-navbar-container uk-navbar-transparent ${styles.nav}`}
        >
          <div className="uk-navbar-left">
            <button
              className="uk-navbar-toggle uk-button uk-button-link uk-text-primary"
              data-uk-toggle="target: #offcanvas-overlay"
            >
              <span data-uk-navbar-toggle-icon></span>{' '}
              <span className="uk-margin-small-left uk-text-primary uk-visible@s">
                Menu
              </span>
            </button>
          </div>
          <div className="uk-navbar-center branding">
            <Link to="/" className={`uk-navbar-item uk-logo`}>
              <h1 className="uk-text-primary uk-heading-line uk-text-center uk-margin-remove">
                {title} <br />
                <span className="uk-text-small">
                  Long Branch Public Schools
                </span>
              </h1>
            </Link>
          </div>
        </nav>
      </div>
      <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-background-primary">
          <button
            className="uk-offcanvas-close"
            type="button"
            aria-label="close menu"
            data-uk-close
          ></button>

          <h3 className="uk-text-inverted">Curriculum &amp; Instruction</h3>

          <p className={styles.whiteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  )
}
// PROP-TYPES
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
// EXPORTS
export default Navbar
