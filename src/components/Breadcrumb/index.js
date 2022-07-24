import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { HiChevronRight } from 'react-icons/hi'
import { getBreadcrumbs } from '../../../utils'

const Breadcrumb = ({ path }) => {
  const breadcrumbs = getBreadcrumbs(path)
  return (
    <>
      <nav className="max-w-screen-2xl px-3 sm:px-6 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 mx-auto">
        <ul className="flex justify-center my-4 text-xl text-emerald-900 font-semibold">
          <li className="">
            <Link to="/" className="">
              Home
            </Link>
            <HiChevronRight className="inline mx-4 w-4 h-4 text-emerald-900" />
          </li>
          {breadcrumbs.crumbs.map((crumb, i) => {
            console.log(crumb)
            return (
              <li key={crumb} className="">
                <Link to={`/${crumb}/`} className="capitalize">
                  {breadcrumbs.pieces[i]}
                </Link>
                {i < breadcrumbs.crumbs.length - 1 && (
                  <HiChevronRight className="inline mx-4 w-4 h-4 text-emerald-900" />
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

Breadcrumb.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Breadcrumb
