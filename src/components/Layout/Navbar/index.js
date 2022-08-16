import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Link as TransLink, useI18next } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'
import { HiChevronRight, HiMenu, HiX } from 'react-icons/hi'
import { GoTriangleUp } from 'react-icons/go'
import { mainMenu } from '../../../../data'
import Heading from '../../Heading'
import DarkMode from '../DarkMode'

const Navbar = ({ siteWrapper }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { languages, originalPath, t, i18n } = useI18next()
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
      <nav className="shadow-sm  text-emerald-900 dark:bg-emerald-900 dark:text-white pt-6">
        <div className="px-3 sm:px-6 lg:px-10 xl:px-12  flex justify-between items-center  max-w-screen-2xl mx-auto">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <Heading
              level={1}
              className="sm:text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white"
            >
              {t('siteTitle')}
            </Heading>
            <p className="prose prose-sm dark:prose-invert">
              {t('districtName')}
            </p>
          </div>
          {/* NAVBAR RIGHT - LOGO */}
          <div className="grid grid-cols-2 gap-x-4 relative">
            <DarkMode siteWrapper={siteWrapper} />
            <Link to="/" className="hidden sm:block">
              <StaticImage
                src="../../../images/lbps_logo.png"
                className="w-12 h-12"
                alt=""
                width={48}
                height={48}
                placeholder="blurred"
              />
              <span className="sr-only">Return to Curriculum Home Page</span>
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-x-4  px-4 mt-4">
          {languages.map(lng => {
            return (
              <li className="grid grid-rows-2 text-center" key={lng}>
                <TransLink to={originalPath} language={lng}>
                  {lng === 'en'
                    ? 'English'
                    : lng === 'es'
                    ? 'Español'
                    : 'Português'}
                </TransLink>
                {i18n.resolvedLanguage === lng && (
                  <span className="text-center animate-pulse">
                    <GoTriangleUp className="inline" />
                  </span>
                )}
              </li>
            )
          })}
        </ul>
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
        className={`absolute top-0 z-10 h-screen  bg-gradient-to-b from-emerald-800 via-emerald-900 to-gray-900 transition ease-in-out duration-500 w-[260px] md:w-[400px] flex flex-col justify-center items-center text-white ${
          isOpen
            ? ' -translate-x-[0px]'
            : ' -translate-x-[260px] md:-translate-x-[400px]'
        }`}
      >
        <button onClick={toggleMenu}>
          <HiX className="absolute top-4 right-4 text-slate-300 w-6 h-6" />
          <span className="sr-only">Close navigation menu</span>
        </button>
        <StaticImage
          src="../../../images/curriculum_logo.png"
          width={120}
          height={120}
          layout="constrained"
          placeholder="tracedSVG"
          alt="The Office of Curriculum and Instruction Logo"
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
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
// EXPORTS
export default Navbar
