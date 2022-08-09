import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ButtonLink = ({ children, type, url, className }) => {
  if (type === 'internal') {
    return (
      <Link
        to={url}
        className={`px-4 md:px-6 py-2 md:py-3 lg:px-8 lg:py-4 md:text-xl lg:text-2xl text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center relative ${className}`}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        href={url}
        className={`px-4 md:px-6 py-2 md:py-3 lg:px-8 lg:py-4 md:text-xl lg:text-2xl text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center relative ${className}`}
      >
        {children}
      </a>
    )
  }
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  type: PropTypes.oneOf(['internal', 'external']).isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ButtonLink
