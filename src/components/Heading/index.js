import * as React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ level, children, className, prose }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-emerald-900 ${className}`}
        >
          {children}
        </h1>
      )
    case 2:
      return (
        <h2
          className={`${
            !prose
              ? `text-xl sm:text-2xl md:text-3xl lg:text-4x xl:text-5xl font-semibold`
              : ``
          } font-extralight text-emerald-900 dark:text-emerald-200 ${className}`}
        >
          {children}
        </h2>
      )
    case 3:
      return (
        <h3
          className={`${
            !prose
              ? `text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light`
              : ``
          } font-extralight text-emerald-900 dark:text-emerald-200 ${className}`}
        >
          {children}
        </h3>
      )
    case 4:
      return (
        <h4
          className={`${
            !prose
              ? `sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light`
              : ``
          } font-extralight text-emerald-900 dark:text-emerald-200 ${className}`}
        >
          {children}
        </h4>
      )
    case 5:
      return (
        <h5
          className={`${
            !prose
              ? `text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extralight`
              : ``
          } font-extralight text-emerald-900 dark:text-emerald-200 ${className}`}
        >
          {children}
        </h5>
      )
    case 6:
      return (
        <h6
          className={`${
            !prose
              ? `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-thin`
              : ``
          } font-extralight text-emerald-900 dark:text-emerald-200 ${className}`}
        >
          {children}
        </h6>
      )
    default:
      return <p>HEADING LEVEL NOT SPECIFIED</p>
  }
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  className: PropTypes.string,
  prose: PropTypes.bool,
}

export default Heading
