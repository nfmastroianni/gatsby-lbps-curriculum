import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HiMenu } from 'react-icons/hi'

const Navbar = ({ title, path }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="min-h-[75px] shadow-sm flex justify-between items-center px-3 sm:px-6 lg:px-10 xl:px-12">
        {/* NAVBAR LEFT - MENU */}
        <div className="flex items-center">
          <HiMenu
            className="w-6 h-6 sm:w-7 sm:h-7 mr-3 cursor-pointer"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            role="button"
            tabIndex={0}
          />
          <span
            className="invisible sm:visible cursor-pointer"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            role="button"
            tabIndex={0}
          >
            Menu
          </span>
        </div>
        {/* NAVBAR CENTER - TITLE */}
        <div className="">
          <h1 className="text-center prose-h1:">{title}</h1>
          <p className="prose prose-sm">Long Branch Public Schools</p>
        </div>
        {/* NAVBAR RIGHT - LOGO */}
        <div className="">
          <StaticImage
            src="../../../images/lbps_logo.png"
            className="w-12 h-12"
            alt=""
            width={48}
            height={48}
          />
        </div>
      </nav>
      <div
        className={`absolute top-0 z-10 bg-slate-900 bg-opacity-20 h-screen w-full ${
          !isOpen ? 'hidden' : ''
        }`}
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        role="button"
        tabIndex={-1}
      >
        <span className="sr-only">close menu</span>
      </div>
      <aside
        className={`absolute top-0 z-10 h-screen bg-emerald-900 transition ease-in-out duration-500 w-[320px] ${
          isOpen ? ' -translate-x-[50px]' : ' -translate-x-[320px]'
        }`}
      ></aside>
    </>
  )
}
// PROP-TYPES
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
// EXPORTS
export default Navbar
