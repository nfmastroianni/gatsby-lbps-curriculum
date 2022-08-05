import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ButtonLink = ({ children, type, url, className }) => {
  if (type === 'internal') {
    return (
      <Link
        to={url}
        className={`px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center ${className}`}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        href={url}
        className={`px-4 py-2 text-white bg-emerald-900 rounded border transition duration-300 ease-in-out hover:bg-transparent hover:border border-emerald-900 hover:text-emerald-900 block mx-auto max-w-screen-sm text-center ${className}`}
      >
        {children}
      </a>
    )
  }
}

export default ButtonLink
