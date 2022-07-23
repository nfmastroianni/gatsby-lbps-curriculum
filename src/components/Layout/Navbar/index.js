import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HiChevronRight, HiMenu, HiX } from 'react-icons/hi'
import { mainMenu } from '../../../../data'

const Navbar = ({ title, path }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isOpen])
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="min-h-[75px] shadow-sm  text-emerald-900">
        <div className="px-3 sm:px-6 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 flex justify-between items-center  max-w-screen-2xl mx-auto">
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
              className="hidden sm:inline cursor-pointer"
              onClick={toggleMenu}
              onKeyDown={toggleMenu}
              role="button"
              tabIndex={0}
            >
              Menu
            </span>
          </div>
          {/* NAVBAR CENTER - TITLE */}
          <div className="text-center">
            <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ">
              {title}
            </h1>
            <p className="prose prose-sm">Long Branch Public Schools</p>
          </div>
          {/* NAVBAR RIGHT - LOGO */}
          <div>
            <Link to="/">
              <StaticImage
                src="../../../images/lbps_logo.png"
                className="w-12 h-12"
                alt=""
                width={48}
                height={48}
                placeholder="blurred"
              />
            </Link>
          </div>
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
      {/* OFF-CANVAS / SIDE DRAWER MENU */}
      <aside
        className={`absolute top-0 z-10 h-screen  bg-gradient-to-b from-emerald-800 via-emerald-900 to-slate-900 transition ease-in-out duration-500 w-[260px] md:w-[400px] flex flex-col justify-center items-center text-white ${
          isOpen
            ? ' -translate-x-[0px]'
            : ' -translate-x-[260px] md:-translate-x-[400px]'
        }`}
      >
        <button onClick={toggleMenu}>
          <HiX className="absolute top-4 right-4 text-slate-300 w-6 h-6" />
        </button>
        <StaticImage
          src="../../../images/curriculum_logo.png"
          width={120}
          height={120}
          layout="constrained"
          placeholder="tracedSVG"
          alt=""
        />
        <ul className="">
          {mainMenu.map(item => {
            return (
              <li key={item.id} className="my-8">
                {item.type === 'internal' ? (
                  <Link
                    to={item.url}
                    className="text-2xl"
                    activeClassName="active-page"
                  >
                    {item.linkText}
                  </Link>
                ) : (
                  <a href={item.url} className="text-2xl">
                    {item.linkText}
                  </a>
                )}
                {item.subMenu && (
                  <ul className="pl-4">
                    {item.subMenu.map(subItem => {
                      return (
                        <li key={subItem.id} className="my-4 flex items-center">
                          <HiChevronRight className="w-4 h-4" />
                          {subItem.type === 'internal' ? (
                            <Link
                              to={subItem.url}
                              className="text-2xl"
                              activeClassName="active-page"
                            >
                              {subItem.linkText}
                            </Link>
                          ) : (
                            <a href={subItem.url}>{subItem.linkText}</a>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </aside>
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
